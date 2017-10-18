---
layout: page
---

Starting the Jekyll Server in Cloud9:

    jekyll serve --host $IP --port $PORT

Serving Jekyll with drafts in Cloud9:

    jekyll serve --host $IP --port $PORT --drafts

New commands to start Jekyll after update:

    bundle exec jekyll serve

Starting Jekyll on Ubuntu with rvm and drafts:

    rvm all do bundle exec jekyll serve --drafts
