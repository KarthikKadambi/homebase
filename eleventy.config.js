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
	eleventyConfig.addPassthroughCopy({ 'src/resume.pdf': 'resume.pdf' });
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
		itemOptions: {
			date: (item) => item.data.date || item.page.date,
		},
		metadata: {
			language: "en",
			title: "Karthik Kadambi | Blog",
			subtitle: "Learn about web development, and more by Karthik Kadambi, full stack web developer",
			base: "https://karthikkadambi.com/",
			author: {
				name: "Karthik Kadambi",
				email: "ramens.regress_8l@icloud.com",
			},
		}
	});

	// Eleventy lifecycle note:
	// Eleventy renders templates (including feed XML templates produced by the feed plugin),
	// then calls any transforms added via eleventyConfig.addTransform for each rendered output.
	// The feed plugin does not need to "know" about this transform — Eleventy will run it
	// on the rendered feed file (outputPath will be something like "feed/feed.xml"),
	// so we restrict the transform to XML/feed paths below.
	// Strip feed-exclude blocks from feed outputs (XML). Keeps HTML pages unchanged.
	eleventyConfig.addTransform("stripFeedExcludesForFeeds", function(content, outputPath) {
		if (!outputPath || typeof content !== "string") return content;
		if (outputPath.endsWith(".xml") || /\/feed\/|feed\.xml$/i.test(outputPath)) {
			// remove literal HTML comments
			const rawPattern = /<!--\s*feed-exclude-start\s*-->[\s\S]*?<!--\s*feed-exclude-end\s*-->/gi;
			// remove escaped HTML comments (e.g. &lt;!-- feed-exclude-start --&gt; ... &lt;!-- feed-exclude-end --&gt;)
			const escapedPattern = /&lt;!--\s*feed-exclude-start\s*--&gt;[\s\S]*?&lt;!--\s*feed-exclude-end\s*--&gt;/gi;
			return content.replace(rawPattern, "").replace(escapedPattern, "");
		}
		return content;
	});
	
	// Custom filter: Cloudinary encode
	eleventyConfig.addFilter("cloudinaryEncode", function(text) {
		if (!text || typeof text !== 'string') {
			return '';
		}
  		return encodeURIComponent(text.replace(/,/g, ' -'));
	});

	// Custom filter: find note by slug
  	eleventyConfig.addFilter("findNoteBySlug", (notes, slug) => {
    	return notes.find((n) => n.data.slug === slug);
  	});

	// Custom Filter: intersection of tags
  	eleventyConfig.addFilter("intersect", (arr1 = [], arr2 = []) => {
    	return arr1.filter((t) => arr2.includes(t));
  	});

	// Collection: tag list
	eleventyConfig.addCollection("tagList", function(collectionApi) {
		const tagsSet = new Set();
		collectionApi.getAll().forEach(item => {
		if (Array.isArray(item.data.tags)) {
			item.data.tags.forEach(t => tagsSet.add(t));
		}
		});
		return [...tagsSet].sort();
  	});
    
    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}