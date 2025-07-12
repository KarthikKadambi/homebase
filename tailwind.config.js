import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import { tokensToTailwind } from './src/css-utils/tokens-to-tailwind.js';

// Raw design tokens
const fontTokens = require('./src/design-tokens/fonts.json');

// Process design tokens
const fontFamily = tokensToTailwind(fontTokens.items);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,mdx,njk,twig,vue,json}'],
  theme: {
    fontFamily,
    extend: {},
  },
  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'fontFamily', prefix: 'font'}
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
}
