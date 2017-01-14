---
layout: page
title: "Past Projects"
permalink: /projects/
desc: "Sharing my personal mile-stone projects"
nav: primary
---

As a self-made web developer I learned a lot *on-the-job*. In this section I will share my personal mile-stone projects.

<div role="projects">

    <ul class="post-list">
    {% for post in site.categories.projects %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}{% if post.timeframe %} • {{ post.timeframe }}{% endif %}</a>
        </h2>
        {{ post.excerpt }}
      </li>
    {% endfor %}
    </ul>

</div>