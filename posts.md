---
author: "Johan"
layout: page
title: Posts
permalink: /posts/
redirect_from:
  - /blog
  - /blog/
desc: "Thoughts and ideas by Johan"
nav: primary
---

> <a href="https://johanbove.info" class="p-author h-card">I</a> write about various sorts of topics, mostly software and web related. Most posts are not full-fledged articles as they might actually be snippets and references for information I'd like to share with the Web.

<div class="posts">

  {% comment %}
  <!-- http://stackoverflow.com/a/19104574 -->
  <ul class="post-list">
  {% for post in site.categories.posts %}
    <li class="h-entry">
      <h2>
        <span class="post-meta"><time class="dt-published" datetime="{{ post.date | date: "%Y-%m-%dT%H:%M:%S%z" }}">{{ post.date | date: "%b %d, %Y" }}</time></span>
        <a class="post-link u-url" href="{{ post.url | prepend: site.baseurl }}"{% if post.lang != null %} lang="{{ post.lang }}"{% endif %}><span class="p-name">{{ post.title }}</span></a>
      </h2>
    </li>
  {% endfor %}
  </ul>
  {% endcomment %}

  {% for post in site.categories.posts %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
    {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

    {% if forloop.first %}
    <h2 id="{{ this_year }}-ref">{{this_year}}</h2>
    <h3 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }} {{this_year}}</h3>
    <ul>
    {% endif %}

    <li class="h-entry">
      <time class="dt-published" datetime="{{ post.date | date: "%Y-%m-%dT%H:%M:%S%z" }}">{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url }}" class="u-url">
        <span class="p-name">{{ post.title }}</span>
      </a>
      <span>by <a href="https://johanbove.info" class="p-author h-card">Johan</a></span>
    </li>

    {% if forloop.last %}
    </ul>
    {% else %}
      {% if this_year != next_year %}
      </ul>
      <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
      <h3 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }} {{next_year}}</h3>
      <ul>
      {% else %}
        {% if this_month != next_month %}
        </ul>
        <h3 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }} {{next_year}}</h3>
        <ul>
        {% endif %}
      {% endif %}
  {% endif %}
{% endfor %}
</div>

 {% include subscribe-rss.html %}
