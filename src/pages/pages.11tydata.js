export default {
	layout: "layouts/base.html",
	eleventyComputed: {
		schemaorg: (data) => {
			return {
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "WebSite",
						"@id": `${data.metadata.url}/#website`,
						name: data.metadata.title,
						description: data.metadata.description,
						url: data.metadata.url,
						publisher: {
							"@type": "Person",
							"@id": `${data.metadata.url}/#person_karthik_kadambi`
						}
					},
					{
						"@type": "Person",
						"@id": `${data.metadata.url}/#person_karthik_kadambi`,
						"name": data.metadata.author.name,
						"url": data.metadata.author.url,
						"gender": "Male",
						"givenName": "Karthik",
						"email": data.metadata.author.email,
						"familyName": "Kadambi",
						"jobTitle": "Senior Lead Engineer",
						"sameAs": [
							"https://www.linkedin.com/in/kkadambi",
							"https://github.com/KarthikKadambi",
							"https://mastodon.social/@karthikkadambi",
							"https://www.youtube.com/user/karthik24590",
							"https://karthikkadambi.substack.com/"
						]
					},
					{
						"@type": "WebPage",
						"@id": `${data.metadata.url}${data.page.url}#webpage`,
						name: data.title,
						description: data.description,
						url: `${data.metadata.url}${data.page.url}`,
						isPartOf: {
							"@type": "WebSite",
							"@id": `${data.metadata.url}/#website`,
						},
						author: {
							"@type": "Person",
							"@id": `${data.metadata.url}/#person_karthik_kadambi`
						},
					},
				]
			};
		},
	}
};