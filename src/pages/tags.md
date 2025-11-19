---
description: A complete list of all tags and topics used in posts by Karthik Kadambi. Browse and explore articles grouped by their respective tags and subjects.
keywords: tags, topics, Karthik Kadambi, articles, blog, categories, subjects, browse, posts, notes
title: All tags and topics | By Karthik Kadambi
---
<div class="section-inset">
    <h1 class="header-branding">All Tags</h1>
    <p>Collection of all the tags tagged to my notes and posts.</p>
</div>
<h2 class="header-branding">Browse by Tag</h2>
{% if collections.tagList -%}
<ul>
{%- for tag in collections.tagList -%}
  {%- set tagLower = tag -%}
  {%- if tagLower != "all" -%}
  <li>
      {%- set tagKey = tag | default('untitled') -%}
      {%- set tagSlug = (tagKey) | slug -%}
      {%- if collections[tag] -%}
        {%- set tagCount = collections[tag] | length -%}
      {%- else -%}
        {%- set tagCount = 0 -%}
      {%- endif -%}
      <a href="/tags/{{ tagSlug }}/"
          aria-label="View articles tagged to {{ tagKey }} ({{ tagCount }})">
        View articles tagged to {{ tagKey }} ({{ tagCount }})
      </a>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>
{%- else -%}
<p>No tag list found in your Eleventy collections.</p> 
{%- endif %}
