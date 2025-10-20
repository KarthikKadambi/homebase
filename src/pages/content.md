---
description: "Learn about web development, and more by Karthik Kadambi, full stack web developer"
title: 'Articles and more'
---
<section class="section-inset" aria-label="Hero section for content">
  <div class="flow">
    <h1  class="header-branding">Articles</h1>
    <p>Learn about Web development, Personal Finance, Travel and More.</p>
  </div>
</section>
<section class="flow" aria-label="Latest posts">
  <h2  class="header-branding">Posts</h2>
  {% for post in collections.posts %}
      <article>
          <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
          <p>{{ post.templateContent | safe }}</p>
      </article>
  {% endfor %}
</section>
<section class="flow" aria-label="Latest talks">
  <h2  class="header-branding">Talks</h2>
  <p>No talks yet.</p>
</section>