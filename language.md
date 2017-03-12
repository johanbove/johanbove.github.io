---
layout: page
title: "Language"
permalink: /language/
desc: "Learning foreign languages"
---

Living in Germany I am actively learning German, mostly by trying to speak and write as much as I can, but also by using fun applications like DuoLingo. These are my notes.

<div class="language">
  <ul class="post-list">
  {% for post in site.categories.language %}
    <li>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title }}
      </a>
    </li>
  {% endfor %}
  </ul>
</div>
