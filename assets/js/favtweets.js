/*jslint browser: true, nomen: true */
/*global $, console */
$(function () {
    
    "use strict";
    
    // @see http://stackoverflow.com/a/14880260
    String.prototype.replaceBetween = function (start, end, what) {
        return this.substring(0, start) + what + this.substring(end);
    };
    
    /**
     * An implementation of Tweetledee
     * @see http://chrissimpkins.github.io/tweetledee
     */
    var Tweetledee = function () {
    
        var TWEETLEDEE = "http://tweetledee.johanbove.info/",
            FAV_TWEETS = TWEETLEDEE + "favoritesjson.php",
            MY_TWEETS = TWEETLEDEE + "userjson.php",

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
                //replacedText = replacedText.replace(hashtags, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                replacedText = replacedText.replace(profileLinks, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                return replacedText;
            },

            /**
             * @param {object} tweet
             */
            renderEntitiesURLS = function (tweet) {
                var i,
                    len,
                    url,
                    text = tweet.text;
                if (tweet.entities && tweet.entities.urls) {
                    for (i = 0, len = tweet.entities.urls.length; i < len; i += 1) {
                        url = tweet.entities.urls[i];
                        text = tweet.text.replaceBetween(url.indices[0], url.indices[1], url.expanded_url);
                    }
                }
                return text;
            },
            
            /**
             * @param {object} tweet
             */
            renderEntitiesIMGS = function (tweet) {
                var i,
                    len,
                    media,
                    output = "";
                if (tweet.entities && tweet.entities.media) {
                    for (i = 0, len = tweet.entities.media.length; i < len; i += 1) {
                        media = tweet.entities.media[i];
                        output += '<img src="' + media.media_url + '" alt="' + media.display_url + '" />';
                    }
                }
                return output;
            },
            
            /**
             * @param {array} data
             * @param {object} options
             */
            renderTweet = function (data, options) {
            
                var targetEl = options.targetEl || ".favorites",
                    targetClass = options.targetClass || "fav-tweets",
                    items = [],
                    $target = $(targetEl).html(''),
                    i,
                    len,
                    tweet,
                    $content,
                    $author,
                    $images;

                for (i = 0, len = data.length; i < len; i += 1) {
                    
                    tweet = data[i];
                    
                    console.info("tweet", tweet);
                    //console.info("entities", tweet.entities);
                    
                    tweet.text = renderEntitiesURLS(tweet);
                    tweet.images = renderEntitiesIMGS(tweet);
                    
                    $content = $("<div/>", {
                        "class": "content"
                    }).html('&ldquo;' + linkify(tweet.text) + '&rdquo;');
                    
                    $author = $("<div/>", {
                        "class": "author"
                    }).html('~ <a href="https://twitter.com/' + tweet.user.screen_name + '">@' + tweet.user.screen_name + '</a> (<a href="https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str + '">tweet</a>)');
                    
                    $images = $("<div/>", { "class": "images" }).html(tweet.images);
                    
                    items.push($("<blockquote/>", {
                        "id": "tweet-" + tweet.id
                    }).append($content, $images, $author));
                    
                }
                
                $("<div/>", { "class": targetClass }).append(items).appendTo($target);
                
            };
        
        return {
            
            getFavTweets: function () {
                
                var self = this;
                
                $.getJSON(FAV_TWEETS, {
                    "c": 5,
                    "cache_interval": 600 // 10 minutes
                }, function (data) {
                    renderTweet(data, {
                        "targetEl": ".favorites",
                        "targetClass": "fav-tweets"
                    });
                });

                return this;
                
            },
            
            getMyTweets: function () {

                var self = this;
                
                $.getJSON(MY_TWEETS, {
                    "c": 5,
                    "cache_interval": 600 // 10 minutes
                }, function (data) {
                    renderTweet(data, {
                        "targetEl": ".mytweets",
                        "targetClass": "my-tweets"
                    });
                });
                
                return this;

            }

        };
    
    };
    
    window.favtweets = new Tweetledee();
    
    //window.favtweets.getFavTweets();
    
});