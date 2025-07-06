const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    ...(isProd && { 'cssnano': {} })
  }
};
