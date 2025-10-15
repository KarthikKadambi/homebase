export default {
  schemaorg: (data) => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${data.metadata.url}/#website`,
          name: data.title,
          description: data.description,
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
            "https://github.com/KarthikKadambi",
            "https://karthikkadambi.substack.com",
            "https://linkedin.com/in/kkadambi",
            "https://mastodon.social/@karthikkadambi",
            "https://youtube.com/user/karthik24590"
          ]
        }
      ]
    };
  }
};