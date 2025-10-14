---
description: "Learn about web development, and more by Karthik Kadambi, full stack web developer"
title: 'Articles and more'
---
<h1>Articles</h1>
{% for post in collections.posts %}
    <article>
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>{{ post.templateContent | safe }}</p>
    </article>
{% endfor %}
<br />
<h1>Talks</h1>
<p>No talks yet.</p>