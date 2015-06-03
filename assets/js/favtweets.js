/*jslint browser: true, nomen: true */
/*global $, console */
$(function () {
    "use strict";
    $.getJSON('http://tweetledee.johanbove.info/favoritesjson.php', {
        "c": 10,
        "cache_interval": 600 // 10 minutes
    }, function (data) {
        var items = [],
            $target = $('.favorites');
        $target.html('');
        $.each(data, function (key, tweet) {
            //console.info("tweet", tweet);
            // https://twitter.com/johanbove/status/605994672922738688
            items.push('<blockquote id="tweet-' + tweet.id + '"><p>&ldquo;' + tweet.text + '&rdquo;</p><p>by <a href="https://twitter.com/' + tweet.user.screen_name + '">@' + tweet.user.screen_name + '</a> (<a href="https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str + '">source</a>)</p></blockquote>');
        });
        $("<div/>", {
            "class": "fav-tweets",
            html: items.join("")
        }).appendTo($target);
    });
});