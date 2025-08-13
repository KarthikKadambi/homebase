# Eleventy

## Folder structure
* _data - global data for 11ty to use on templates.
* _includes - reusable partials and layouts for eleventy to use on templates.
* css - our CSS codebase.
* css-utils - little helper functions that the Tailwind system uses to generate utilities and CSS custom properties.
* design-tokens - JSON files that define design token values for colour, text sizes, fonts, spacing, leading (line height), font weights and viewports.
* fonts - web fonts.
* images - images that are used on the site.
* <page>.md - the template file for respective page.
* robots.txt - implements Robots exclusion protocol.
* site.webmanifest - Web manifest.
* sitemap.njk - the sitemap template file.

## Packages

* **@11ty/eleventy** Static site generator.
* **postcss** A tool for transforming CSS with JavaScript.
* **postcss-cli** PostCSS CLI is a command line interface for PostCSS.
* **postcss-import** PostCSS plugin to transform @import rules by inlining content.
* **postcss-js** PostCSS for CSS-in-JS and styles in JS objects.
* **tailwindcss** A utility-first CSS framework for rapidly building custom user interfaces.
* **cssnano** cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.
* **slugify** Slugifies a string.
* **concurrently** Run multiple commands concurrently.