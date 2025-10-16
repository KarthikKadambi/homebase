---
description: "Learn about web development, and more by Karthik Kadambi, full stack web developer"
title: 'Articles and more'
---
<section class="section-inset">
  <div class="flow">
    <h1>Articles</h1>
    <h2>learn from me</h2>
  </div>
</section>
<h2>Posts</h2>
{% for post in collections.posts %}
    <article>
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>{{ post.templateContent | safe }}</p>
    </article>
{% endfor %}
<h1>Talks</h1>
<p>No talks yet.</p>