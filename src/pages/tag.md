---
eleventyComputed:
  description: "Posts related to {{ tag | slug }} from Karthik Kadambi."
  title: "{{ tag | slug }} Posts | By Karthik Kadambi"
eleventyExcludeFromCollections: true
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
---
<div class="section-inset">
  <h1 class="header-branding">Tag: {{ tag }}</h1>
  <p>Posts tagged to {{ tag | slug }}.</p>
</div>
{% set posts = collections[tag] | default([]) %}
{% if posts | length %}
<ul>
{% for post in posts | reverse %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title or post.fileSlug }}</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts found for this tag.</p>
{% endif %}