---
layout: page
title: Tweets
desc: "Sharing news, videos and other things I like and more, with the occasional opinionated public tweet."
---

<style>
    iframe#twitter-widget-0 {
        width: 100% !important;
    }
</style>

Sharing news, videos and other things I like and more, with the occasional opinionated public tweet.

<a class="twitter-timeline" href="https://twitter.com/johanbove"
   data-widget-id="333577388069896193"
   data-chrome="transparent noborders"
   data-theme="dark"
   data-link-color="#F3F398"
   data-tweet-limit="5"
>
    Loading Tweets by @johanbove&hellip;
</a>

<div class="favorites"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
$(function () {
    $.getJSON('http://tweetledee.johanbove.info/favoritesjson.php', function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        $( "<ul/>", {
        "class": "fav-tweets",
        html: items.join( "" )
        }).appendTo($('.favorites'));    
    });
});
</script>

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>