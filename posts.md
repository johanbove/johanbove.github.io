---
layout: page
title: Posts
permalink: /posts/
redirect_from:
  - /blog
  - /blog/
desc: "Thoughts and ideas by Johan"
nav: primary
---

I write about various sorts of topics, mostly software and web related. Most posts are not full-fledged articles as they might actually be snippets and references for information I'd like to share with the Web.

<div class="posts">

  {% comment %}
  <!-- http://stackoverflow.com/a/19104574 -->
  <ul class="post-list">
  {% for post in site.categories.posts %}
    <li>
      <h2>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"{% if post.lang != null %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</a>
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
  <div class="year">
    <h2 id="{{ this_year }}-ref">{{this_year}}</h2>
    <div class="month">
      <h3 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }} {{this_year}}</h3>
      <ul class="thisyear">
    {% endif %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% if forloop.last %}
      </ul>
    </div>
  </div>
    {% else %}
      {% if this_year != next_year %}
      </ul>
    </div>
  </div>
  <div class="year">
    <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
    <div class="month">
      <h3 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }} {{next_year}}</h3>
      <ul class="next_year">
      {% else %}
        {% if this_month != next_month %}
        </ul>
      </div>
      <div class="month">
        <h3 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }} {{next_year}}</h3>
        <ul class="next_year">
        {% endif %}
      {% endif %}
  {% endif %}
{% endfor %}
</div>

 {% include subscribe-rss.html %}
