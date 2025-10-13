import { HtmlBasePlugin } from '@11ty/eleventy';
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

/**
 * @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig
 */
export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src/pages');
	eleventyConfig.setIncludesDirectory('../_includes');
	eleventyConfig.setDataDirectory('../_data');
	eleventyConfig.setOutputDirectory('dist');
    
    eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
    eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/images' });
	eleventyConfig.addPassthroughCopy({ 'src/js': 'assets/js' });
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': 'robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/site.webmanifest': 'site.webmanifest' });
	eleventyConfig.addPassthroughCopy("_headers");

	eleventyConfig.addWatchTarget("src/css");
    
    eleventyConfig.addPlugin(HtmlBasePlugin);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed/feed.xml",
		collection: {
			name: "posts",
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "Karthik Kadambi's website",
			subtitle: "Learn about web development, and more by Karthik Kadambi, full stack web developer",
			base: "https://karthikkadambi.com/",
			author: {
				name: "Karthik Kadambi",
				email: "krtkram@gmail.com",
			},
		}
	});
    
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}