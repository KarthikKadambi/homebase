---
title: 'Karthik Kadambi | Full Stack Web Developer'
description: "Full Stack Web Developer, Teacher, Personal Finance Enthusiast"
type: "website"
url: "https://karthikkadambi.com"
layout: 'layouts/base.html'
---
<p>blog content..</p>
{% for post in collections.posts %}
    <article>
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>{{ post.templateContent | safe }}</p>
    </article>
{% endfor %}