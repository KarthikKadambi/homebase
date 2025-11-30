---
description: Explore in-depth articles and guides on technology, learning, and ideas by Karthik Kadambi connecting concepts through detailed, thoughtful posts.
keywords: posts, articles, guides, Karthik Kadambi, technology, learning, blog, in-depth, thoughtful, detailed, concepts
pagination:
    data: collections.posts
    size: 7
    alias: pagedPosts
    reverse: true
title: Posts | Detailed articles by Karthik Kadambi
---
<div class="section-inset">
    <h1 class="header-branding">Posts</h1>
    <p>Collection of posts by Karthik Kadambi.</p>
</div>

<h2 class="header-branding">All Posts</h2>
{%- for post in pagedPosts %}
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
    <a href="{{ pagination.href.previous }}">← Newer</a>
    {%- endif %}
    {%- if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Older →</a>
    {%- endif %}
</nav>
{%- endif %}