/**
 * @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig
 */
export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}