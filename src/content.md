---
description: "Learn about web development, and more by Karthik Kadambi, full stack web developer"
layout: 'layouts/base.html'
title: 'Articles and more'
---
<p>Blog content..</p>
{% for post in collections.posts %}
    <article>
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>{{ post.templateContent | safe }}</p>
    </article>
{% endfor %}