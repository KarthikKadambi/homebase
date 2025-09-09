export default {
  schemaorg: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "{{ metadata.url }}/#website",
        name: "{{ metadata.title }}",
        description: "{{ metadata.description }}",
        url: "{{ metadata.url }}",
        publisher: {
          "@type": "Person",
          "@id": "{{ metadata.url }}/#person_karthik_kadambi"
        }
      },
      {
        "@type": "Person",
        "@id": "{{ metadata.url }}/#person_karthik_kadambi",
        "name": "Karthik Kadambi",
        "url": "https://karthikkadambi.com/",
        "gender": "Male",
        "givenName": "Karthik",
        "email": "krtkram@gmail.com",
        "familyName": "Kadambi",
        "jobTitle": "Senior Lead Engineer",
        "sameAs": [
          "https://www.linkedin.com/in/kkadambi",
          "https://github.com/KarthikKadambi",
          "https://mastodon.social/@karthikkadambi"
        ]
      }
    ]
  }
};