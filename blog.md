---
layout: page
title: Blog
permalink: /blog/
desc: "Thoughts and ideas by Johan"
nav: primary
---

Most of these posts are not full-fledged articles as they might actually be snippets and references for stuff I'd like to remember and share with the Intarwebs.

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

    <p class="rss-subscribe"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">Subscribe to my RSS - feed and stay up-to-date!</a></p>

</div>
