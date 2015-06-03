/*jslint browser: true, nomen: true */
/*global $, console */
$(function () {
    
    "use strict";
    
    /**
     * An implementation of Tweetledee
     * @see http://chrissimpkins.github.io/tweetledee
     */
    var Tweetledee = function () {
    
        var DOMAIN = "http://tweetledee.johanbove.info/",
            FAV_TWEETS = DOMAIN + "favoritesjson.php",
            MY_TWEETS = DOMAIN + "userjson.php",

        /**
         * @param {string} inputText
         * @returns {string}
         * @author Oleh Zasadnyy @ozasadnyy
         */
            linkify = function (inputText) {
                var replacedText,
                    links1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
                    links2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
                    hashtags = /#(\S*)/g,
                    profileLinks = /\B@([\w-]+)/gm;
                replacedText = inputText.replace(links1, '<a href="$1" target="_blank">$1</a>');
                replacedText = replacedText.replace(links2, '$1<a href="http://$2" target="_blank">$2</a>');
                replacedText = replacedText.replace(hashtags, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                replacedText = replacedText.replace(profileLinks, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                return replacedText;
            };

        return {

            getFavTweets: function () {

                $.getJSON(FAV_TWEETS, {
                    "c": 5,
                    "cache_interval": 600 // 10 minutes
                }, function (data) {
                    var items = [],
                        $target = $('.favorites').html('');
                    $.each(data, function (key, tweet) {
                        //console.info("tweet", tweet);
                        items.push('<blockquote id="tweet-' + tweet.id + '"><p>&ldquo;' + linkify(tweet.text) + '&rdquo;<br>~ <a href="https://twitter.com/' + tweet.user.screen_name + '">@' + tweet.user.screen_name + '</a> (<a href="https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str + '">tweet</a>)</p></blockquote>');
                    });
                    $("<div/>", {
                        "class": "fav-tweets",
                        html: items.join("")
                    }).appendTo($target);
                });

                return this;
                
            },
            
            getMyTweets: function () {

                $.getJSON(MY_TWEETS, {
                    "c": 5,
                    "cache_interval": 600 // 10 minutes
                }, function (data) {
                    var items = [],
                        $target = $('.mytweets').html('');
                    $.each(data, function (key, tweet) {
                        //console.info("tweet", tweet);
                        items.push('<blockquote id="tweet-' + tweet.id + '"><p>&ldquo;' + linkify(tweet.text) + '&rdquo; - <a href="https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str + '">view on twitter</a></p></blockquote>');
                    });
                    $("<div/>", {
                        "class": "my-tweets",
                        html: items.join("")
                    }).appendTo($target);
                });
                
                return this;

            }

        };
    
    };
    
    window.favtweets = new Tweetledee();
    
    //window.favtweets.getFavTweets();
    
});