---
layout: page
---

> My public code is [on Github](http://github.com/johanbove). Here are my most recent logged activities.

## Changelog of this site
<ul class="changelog"></ul>

## My Github Gists
<ul class="gists"></ul>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
$(function () {

    $.get("https://api.github.com/repos/johanbove/johanbove.github.io/commits", function (data) {
        var date,
            datepart,
            msg,
            $out,
            i,
            limit = 10;
        for (i = 0; i < limit; i += 1) {
            $out = $("<li/>");
            msg = data[i].commit.message;
            date = data[i].commit.committer.date;
            datepart = date.split("T")[0];
            $out.append(
              $("<a/>", {
                  "class": "message",
                  "href": data[i]["html_url"],
                  "title": 'Created at ' + datepart
              }).text(msg)
            );
            $('.changelog').append($out);
        }
    });
    
    
    $.get("https://api.github.com/users/johanbove/gists", function (data) {
        var i,
            limit = data.length,
            date,
            descr,
            url;
        for (i = 0; i < limit; i += 1) {
            $out = $("<li/>");
            date = data[i].created_at;
            datepart = date.split("T")[0];
            descr = data[i].description || "missing description";
            url = data[i]["html_url"];
            $out.append(
              $("<a/>", {
                  "class": "gist",
                  "href": url,
                  "title": 'Created at ' + datepart
              }).text(descr)
            );
            $('.gists').append($out);
        }
    });
    
    
});
</script>
