---
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
eleventyComputed:
  title: "Posts realted to {{ tag | slug }}"
  description: "Posts related to {{ tag | slug }} from Karthik Kadambi."
---
<div class="section-inset">
  <h1 class="header-branding">Tag: {{ tag }}</h1>
  <p>Posts tagged to {{ tag | slug }}.</p>
</div>
{% set posts = collections[tag] | default([]) %}
{% if posts | length %}
<ul>
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title or post.fileSlug }}</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts found for this tag.</p>
{% endif %}