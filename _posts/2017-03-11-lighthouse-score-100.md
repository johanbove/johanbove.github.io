---
layout: post
title: "Achievement unlocked: Lighthouse score of 100"
categories: post
---

# What is *Lighthouse* and why did I care?

> [Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an open-source, automated tool for improving the quality of your web apps.

> Lighthouse can be run as [a Chrome Extension](https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk), from the command line, or used programmatically as a Node module. You give Lighthouse a URL that you want to audit, it runs a barrage of tests against the page, and then it generates a report on how well the page did. From here you can use the failing tests as indicators on what you can do to improve your app.

I cared because "I 💓 web validators" and it kicked me finally into action adding the enigmatic ["manifest.json"](https://johanbove.info/manifest.json) file to my homepage.

Turns out, creating a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), complete with taking care of offline handling with a service-worker behind the screens, is actually not that hard, thanks to a plethora of [useful documentation and tutorials](https://developers.google.com/web/tools/lighthouse/audits/manifest-exists), all of which are neatly linked right from the LightHouse report page.

The result:

[![My Lighthouse score of 100/100](/images/20170311-lighthouseresults100.png)](https://johanbove.info/lighthouse/johanbove.info_2017-03-11_00-15-24.report.html)

Running the test really helps you in learning on how to set up the manifest.json file and optimize your site.

In the end it took me about three hours to achieve the perfect 100/100 score by follwing the documentation and setting up the web app manifest file with a service worker in the currently available LightHouse test. Most of that time I actually spent on creating [an app icon of myself](https://johanbove.info/img/johanbove_192x192.png).

Next up I'll try to make this Jekyll blog which is currently hosted on Github Pages also achieve a similar high score...

Thanks goes out to **CSSWizardry** Magician [Harry Roberts](https://csswizardry.com/) for boasting with his site'score, since he made me want to get a similar high score for my own site.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just spent a few minutes tweaking some settings in <a href="https://twitter.com/Cloudflare">@Cloudflare</a>. My homepage: <a href="https://t.co/z9Dr89UNHP">pic.twitter.com/z9Dr89UNHP</a></p>&mdash; Harry Roberts (@csswizardry) <a href="https://twitter.com/csswizardry/status/839814781326483456">March 9, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
