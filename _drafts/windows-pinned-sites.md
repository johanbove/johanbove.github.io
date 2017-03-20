---
categories: posts
title: "How to enable pinned sets for Windows"
---

Write about how to use <http://www.buildmypinnedsite.com/> since I'm using this in my personal blog to enable an updating "pinned" site for the Windows 8 and Windows 10 start menu.

Windows 10 site tile:

```
<meta name="msapplication-TileColor" content="#0E0412"/>
<meta name="msapplication-square70x70logo" content="tiny.png"/>
<meta name="msapplication-square150x150logo" content="square.jpg"/>
<meta name="msapplication-wide310x150logo" content="wide.jpg"/>
<meta name="msapplication-square310x310logo" content="large.jpg"/>
```

Updating "pinned site" code:

```
<meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=http://blog.johanbove.info/feed.xml&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=http://blog.johanbove.info/feed.xml&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=http://blog.johanbove.info/feed.xml&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=http://blog.johanbove.info/feed.xml&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=http://blog.johanbove.info/feed.xml&amp;id=5; cycle=1"/>
```
