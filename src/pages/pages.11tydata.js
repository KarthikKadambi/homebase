export default {
	// set a default layout that can be overridden by child directory data files
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
						url: `${data.metadata.url}/`,
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
							"https://github.com/KarthikKadambi",
							"https://karthikkadambi.substack.com",
							"https://linkedin.com/in/kkadambi",
							"https://mastodon.social/@karthikkadambi",
							"https://youtube.com/user/karthik24590",
							"https://linktr.ee/karthikkadambi"
						],
						"knowsAbout": [
							"Full Stack Web Development",
							"React",
							"Next.js",
							"Node.js",
							"Design Systems",
							"Web Accessibility",
							"Cloud Architecture",
							"AI Integration",
							"User Experience"
						],
						"worksFor": {
							"@type": "Organization",
							"name": "Brillio",
							"url": "https://www.brillio.com/"
						},
						"alumniOf": [
							{
							"@type": "CollegeOrUniversity",
							"name": "S.J.B. Institute of Technology (SJBIT)",
							"url": "https://sjbit.edu.in/"
							}
						],
						"image": `${data.metadata.url}/assets/images/site/karthik.jpg`,
						"spouse": {
							"@type": "Person",
							"name": "Neha Pradeep",
							"gender": "Female",
							"givenName": "Neha",
							"familyName": "Pradeep",
							"sameAs": [
								"https://www.youtube.com/@Veggiedelicacies",
								"https://www.linkedin.com/in/neha-pradeep-7b152147",
								"https://www.instagram.com/veggie_delicacies"
							]
          				}	
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