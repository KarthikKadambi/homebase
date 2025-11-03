---
description: Tags of posts from Karthik Kadambi
title: All Tags | Explore Topics by Karthik Kadambi
---
<div class="section-inset">
    <h1 class="header-branding">{{ title }}</h1>
    <p>Collection of all the tags tagged to my notes and posts.</p>
</div>
{% if collections.tagList %}
<ul>
{% for tag in collections.tagList %}
  {% set tagLower = tag %}
  {% if tagLower != "all" %}
    <li>
      {% set tagKey = tag | default('untitled') %}
      {% set tagSlug = (tagKey) | slug %}
      {% if collections[tag] %}
        {% set tagCount = collections[tag] | length %}
      {% else %}
        {% set tagCount = 0 %}
      {% endif %}
      <a href="/tags/{{ tagSlug }}/"
          title="View posts tagged '{{ tagKey }}'"
          aria-label="View posts tagged '{{ tagKey }}' ({{ tagCount }})">
        {{ tagKey }} ({{ tagCount }})
      </a>
    </li>
  {% endif %}
{% endfor %}
</ul>
{% else %}
<p>No tag list found in your Eleventy collections.</p> 
{% endif %}
