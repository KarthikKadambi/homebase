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
          "birthDate": "1990-05-24",
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
        }
      ]
    };
  }
};