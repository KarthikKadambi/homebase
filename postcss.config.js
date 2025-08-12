const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'tailwindcss': {},
    ...(isProd && { 'cssnano': {} })
  }
};
