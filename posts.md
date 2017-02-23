---
layout: page
title: Posts
permalink: /posts/
desc: "Thoughts and ideas by Johan"
nav: primary
---

Most of these posts are not full-fledged articles as they might actually be snippets and references for stuff I'd like to remember and share with the Intarwebs.

<div role="blog">

  {% comment %}
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
  
  {% for post in site.posts  %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
    {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

    {% if forloop.first %}
    <h2 id="{{ this_year }}-ref">{{this_year}}</h2>
    <h3 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }}</h3>
    <ul>
    {% endif %}

    <li><a href="{{ post.url }}">{{ post.title }}</a></li>

    {% if forloop.last %}
    </ul>
    {% else %}
      {% if this_year != next_year %}
      </ul>
      <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
      <h3 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
      <ul>
      {% else %}
        {% if this_month != next_month %}
        </ul>
        <h3 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
        <ul>
        {% endif %}
      {% endif %}
  {% endif %}
{% endfor %}

  <p class="rss-subscribe"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">Subscribe to my RSS - feed and stay up-to-date!</a></p>

</div>
