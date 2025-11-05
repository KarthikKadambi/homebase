---
description: Explore articles on web development, AI, finance and travel by Karthik Kadambi.
title: Articles | By Karthik Kadambi
---

<section class="section-inset" aria-label="Hero section for content">
  <div class="flow">
    <h1 class="header-branding">Articles</h1>
    <p>Learn about Web development, Personal finance, Travel and More</p>
  </div>
</section>
{% set heading = "Latest Posts" %}
{% set ariaLabel = "Latest blog posts" %}
{% set subheading = "Posts are long-form articles that explore broader topics or ideas in depth. They often combine multiple notes, examples or insights into a cohesive narrative, like guides, essays or deep dives that connect related concepts." %}
{% include "partials/blog-teaser/blog-teaser.njk" %}
<p><a href="/posts/">View all posts</a></p>
{% set heading = "Latest Notes" %}
{% set ariaLabel = "Latest blog notes" %}
{% set subheading = "Notes are short, focused pieces of content that capture a single idea, concept or reference. They're smaller than full posts and often serve as building blocks: quick explanations, definitions or insights that can later be linked or combined into larger posts." %}
{% set collectionName = "notes" %}
{% include "partials/blog-teaser/blog-teaser.njk" %}
<p><a href="/notes/">View all notes</a></p>
<section class="flow" aria-label="Filter articles">
  <h2 class="header-branding">Filter Articles</h2>
  <ul>
    <li><a href="/tags/">Filter by specific tags</a></li>
  </ul>
</section>
<section class="flow" aria-label="Latest talks">
  <h2 class="header-branding">Latest Talks</h2>
  <p>No talks yet.</p>
</section>
