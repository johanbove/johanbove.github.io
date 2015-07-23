---
layout: page
title: Writings
permalink: /blog/
desc: "Thoughts and ideas by Johan"
---

Sharing my thoughts here as a way to perform some self-reflection. Also sharing my experiences as a web developer, giving some insights back to the dev-community.

<div role="blog">

    <ul class="post-list">
    {% for post in site.categories.blog %}
      <li>
        <h2>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"{% if post.lang != null %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
    </ul>

    <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>