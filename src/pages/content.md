---
description: "Learn about web development, and more by Karthik Kadambi, full stack web developer"
title: 'Articles and more'
---
<section class="section-inset" aria-label="Articles">
  <div class="flow">
    <h1  class="header-branding">Articles</h1>
    <p>learn from me</p>
  </div>
</section>
<h2  class="header-branding">Posts</h2>
{% for post in collections.posts %}
    <article>
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p>{{ post.templateContent | safe }}</p>
    </article>
{% endfor %}
<h2  class="header-branding">Talks</h2>
<p>No talks yet.</p>