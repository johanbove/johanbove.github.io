---
layout: page
title: Tweets
desc: "Sharing news, videos and other things I like and more, with the occasional opinionated public tweet."
nav: primary
---

<style>
    iframe#twitter-widget-0 {
        width: 100% !important;
    }
</style>

Sharing news, videos and other things I like and more, with the occasional opinionated public tweet. Follow me at [@johanbove](https://twitter.com/johanbove).

## My latest Tweets

<!--
<a class="twitter-timeline" href="https://twitter.com/johanbove"
   data-widget-id="333577388069896193"
   data-chrome="transparent noborders"
   data-theme="dark"
   data-link-color="#F3F398"
   data-tweet-limit="5"
>
    Loading Tweets by @johanbove&hellip;
</a>
-->

<div class="mytweets">Loading&hellip;</div>

## Tweets I recently favorited

<div class="favorites">Loading&hellip;</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="/assets/js/favtweets.js"></script>
<script>
$(function () {
    window.favtweets.getMyTweets().getFavTweets();
});
</script>

<!-- Credits: [Tweetledee](http://chrissimpkins.github.io/tweetledee/) -->

<!--
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
-->