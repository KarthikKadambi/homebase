import { HtmlBasePlugin } from '@11ty/eleventy';

/**
 * @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig
 */
export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    
    eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
    eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/images' });
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('src/site.webmanifest');
    
    eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addWatchTarget("src/css");
    
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}