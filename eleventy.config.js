import { HtmlBasePlugin } from '@11ty/eleventy';

/**
 * @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig
 */
export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.addPlugin(HtmlBasePlugin);
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}