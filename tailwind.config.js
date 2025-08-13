import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import { tokensToTailwind } from './src/css-utils/tokens-to-tailwind.js';
import { clampGenerator } from './src/css-utils/clamp-generator.js';

// Raw design tokens
const colorTokens = require('./src/design-tokens/colors.json');
const fontTokens = require('./src/design-tokens/fonts.json');
const spacingTokens = require('./src/design-tokens/spacing.json');
const textSizeTokens = require('./src/design-tokens/text-sizes.json');
const textLeadingTokens = require('./src/design-tokens/text-leading.json');
const textWeightTokens = require('./src/design-tokens/text-weights.json');
const viewportTokens = require('./src/design-tokens/viewports.json');

// Process design tokens
const colors = tokensToTailwind(colorTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const fontWeight = tokensToTailwind(textWeightTokens.items);
const lineHeight = tokensToTailwind(textLeadingTokens.items);
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{html,js,md,njk,json}'],
  blocklist: ['container'],
  theme: {
    screens: {
      sm: `${viewportTokens.min}px`,
      md: `${viewportTokens.mid}px`,
      lg: `${viewportTokens.large}px`,
      xl: `${viewportTokens.max}px`
    },
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    spacing,
    lineHeight,
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({theme}) => theme('spacing')
  },
  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'colors', prefix: 'color'},
        {key: 'spacing', prefix: 'space'},
        {key: 'fontFamily', prefix: 'font'},
        {key: 'fontSize', prefix: 'size'},
        {key: 'fontWeight', prefix: 'font'},
        {key: 'lineHeight', prefix: 'leading'},
      ];

      groups.forEach(({key, prefix}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });
    }),
  ],
  corePlugins: {
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },
}
