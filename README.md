# Eleventy

## Folder structure
* _data - Global data for 11ty to use on templates.
* _includes - Reusable partials and layouts for 11ty to use on templates.
* css - CSS codebase.
* css-utils - Little helper functions that the Tailwind system uses to generate utilities and CSS custom properties.
* design-tokens - JSON files that define design token values for colour, text sizes, fonts, spacing, leading (line height), font weights and viewports.
* fonts - Web fonts.
* images - Images that are used on the site.
* pages/<page>.md - The template file for respective page.
* pages/posts/<post>.md - The template file for respective post.
* pages/sitemap.njk - The sitemap template file.
* robots.txt - Implements Robots exclusion protocol.
* site.webmanifest - Web manifest.

## Packages

* **@11ty/eleventy** Static site generator.
* **@11ty/eleventy-plugin-rss** A pack of Eleventy filters for generating Atom, JSON and RSS feeds using the Nunjucks templating engine.
* **concurrently** Run multiple commands concurrently.
* **cssnano** cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.
* **postcss** A tool for transforming CSS with JavaScript.
* **postcss-cli** PostCSS CLI is a command line interface for PostCSS.
* **postcss-import** PostCSS plugin to transform @import rules by inlining content.
* **postcss-import-ext-glob** A PostCSS v8 plugin to extend postcss-import path resolver to allow glob usage as a path.
* **postcss-js** PostCSS for CSS-in-JS and styles in JS objects.
* **slugify** Slugifies a string.
* **tailwindcss** A utility-first CSS framework for rapidly building custom user interfaces.