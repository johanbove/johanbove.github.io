---
layout: page
desc: "A collection of tools for web development"
---

# Online Website building Tools

A collection of tools for web development.

## Tools

{% for category in site.data.webdevelopmenttools %}
### {{ category.name }}
{% for tool in category.tools %}
- [{{ tool.name }}]({{ tool.url }}) (S:{{ tool.source }})
{% endfor %}
{% endfor %}

## Sources

1. [www.danstools.com](http://www.danstools.com/)
2. [davidwalsh.name](http://davidwalsh.name/)
3. [www.htaccesstools.com](http://www.htaccesstools.com/)