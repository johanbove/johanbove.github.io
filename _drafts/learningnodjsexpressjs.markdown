---
layout: post
title: "Node.JS and Express.JS"
categories: blog
---

# Should you still start learning the Express JS framework on Node.JS?

## Motivation

Motivated to finally look into depth at NodeJS because of a work project which could make use of a NodeJS implementation. It also seems appropriate for me to start this now since there is a lot of movement in the JavaScript screen to go away from Node.JS and go for either GoLang or Io.JS.

So is it still a good idea to start learning Node.JS and its most popular framework Express.JS? See below for my experience.

## Richard Tolar raises some valid concerns regarding Node.JS 

> Look carefully at Node.js before committing a substantial investment to it. While it certainly has it’s advocates, there is a pretty substantial anti-Node.js camp.

> Everything in Node.js ends up being callback-driven, since there’s only one operating thread. So, ‘callback hell’ is an often-discussed topic in the Node.js community, and there are plenty of websites dedicated to discussing it: [http://callbackhell.com/](http://callbackhell.com/).

> Is Javascript the right choice for a server-side language? Fire that question into a room of developers, and step back to watch the fun. It’s certainly a topic with a lot of disagreement. Contrast that to pretty much all other languages : Java, C#, Python, etc. There’s pretty much universal agreement that all of these other languages are good server-side languages, in the right context.

> Also, there are some high profile Node.js developers that recently moved away from Node.js, such as TJ Holowaychuk. See his ‘farewell Node.js’ blog at: [https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b](https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b) Who is TJ? A very prolific creator/contributor to Node.js frameworks: [http://www.quora.com/How-is-TJ-Holowaychuk-so-insanely-productive](http://www.quora.com/How-is-TJ-Holowaychuk-so-insanely-productive)

> A google trends report shows that while Node.js was pretty hot for a few years, interest has basically flat-lined in the last 12 months. [http://www.google.com/trends/explore#q=node.js](http://www.google.com/trends/explore#q=node.js)

> Are there a lot of successful projects out there using Node.js in production? Absolutely. But be aware that you are building your server-side logic in an interpreted language with a single-threaded execution model based on callbacks/async requests.

> My $.02 : Node.js is ideally suited for development organizations that have a very deep bench of expertise in Javascript, and want to leverage that expertise on the server side, rather than having to manage to two language ecosystems.
 
## Diving right in

So I understand from these excellent thoughts that Node.JS is still alive and kicking and therefore it is perfectly sensible to learn more about it and Express.JS. Let's get started.

Going for the official documents first of course: [http://expressjs.com/starter/](http://expressjs.com/starter/)

## Todo's

- Building a todo-list app in Express.js
- Building a monitoring application for weather API with alerts etc.