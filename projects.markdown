---
layout: page
title: "Past Projects"
permalink: /projects/
---

As a self-made web developer I worked on various websites and other web-based projects. Here, I'm sharing some of the more interesting ones.

<div role="projects">

    <ul class="post-list">
    {% for post in site.categories.projects %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        {{ post.excerpt }}
      </li>
    {% endfor %}
    </ul>

</div>