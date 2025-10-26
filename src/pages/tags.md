---
description: Tags of posts from Karthik Kadambi
title: Tags
---
<div class="section-inset">
    <h1 class="header-branding">{{ title }}</h1>
    <p>Collection of all the tags tagged to my posts.</p>
</div>
{% if collections.tagList %}
<ul>
  {% for tag in collections.tagList %}
    {% set tagLower = tag %}
    {% if tagLower != "all" and tagLower != "posts" %}
      <li>
        <a href="/tags/{{ tag | slug }}/">
          {{ tag }}
          {% if collections[tag] %}
            ({{ collections[tag] | length }})
          {% endif %}
        </a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% else %}
<p>No tag list found in your Eleventy collections.</p> 
{% endif %}
