---
description: Short notes and quick thoughts by Karthik Kadambi on tech, finance, travel and daily learning.
keywords: notes, quick thoughts, Karthik Kadambi, tech, finance, travel, learning, snippets, ideas, blog
title: Notes | Quick Thoughts by Karthik Kadambi
pagination:
    data: collections.notes
    size: 10
    alias: pagedNotes
    reverse: true
---

<div class="section-inset">
    <h1 class="header-branding">Notes</h1>
    <p>Collection of notes by Karthik Kadambi.</p>
</div>

<h2 class="header-branding">All Notes</h2>
{%- for post in pagedNotes %}
<article>
    {%- set titleText = post.data.title | default('') -%}
    {%- set parts = titleText.split('|') -%}
    {%- if parts.length > 0 and parts[0] -%}
      {%- set articleHeadingText = parts[0] | trim -%}
    {%- else -%}
      {%- set articleHeadingText = titleText | trim -%}
    {%- endif -%}
    <h3><a href="{{ post.url }}">{{ articleHeadingText }}</a></h3>
    <time datetime="{{ post.data.date.toISOString() }}">{{ post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }) }}</time>
    <p>{{ post.data.description }}</p>
</article>
{%- endfor %}

{%- if pagination.href.next or pagination.href.previous %}
<nav class="pagination" aria-label="Pagination">
    {%- if pagination.href.previous %}
    <a rel="next" href="{{ pagination.href.previous }}">← Newer</a>
    {%- endif %}
    {%- if pagination.href.next %}
    <a rel="prev" href="{{ pagination.href.next }}">Older →</a>
    {%- endif %}
</nav>
{%- endif %}