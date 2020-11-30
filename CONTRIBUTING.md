# Contributing

## Adding a new page
Creating a new .md file will create a new page with the link being the name of the file.

## Writing content
Files are in markdown - the beginning of the file is the frontmatter, which is written in YAML. [This page at the @nuxt/content documentation has more detailed information.](https://content.nuxtjs.org/writing)

### Frontmatter
Your frontmatter should look something like this.
```yaml
---
title: Getting started
tags:
 - test
 - tag2
 - tag3
 - tag4
---
```

### Body
The body of the page is anything after the three dashes. It is mainly written in markdown, with a few extensions. Any non-markdown content needs to be followed by two line breaks to be considered markdown again. [See the @nuxt/content documentation for a better explanation with examples.](https://content.nuxtjs.org/writing#html)

### HTML
You can write arbitrary HTML in the article, and it'll be included. 

### Vue components
You can include global Vue components - anything in the components/global directory should work. Yell at autumn for help with this.