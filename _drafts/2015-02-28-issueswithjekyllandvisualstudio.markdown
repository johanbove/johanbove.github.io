---
layout: post
title: "Jekyll Visual Studio and UTF-8 encoding"
---

> So I had some serious issues with creating new Jekyll blog posts using Visual Studio.

# Visual Studio messes up encoding for simple text files

I started off with creating a new HTML file in Visual Studio 2013 and apparently this added some weird series of bytes into the file which totally screwed up Jekyll's ability to render and parse the Markdown file.

As a result of this issue I'm now using Brackets again to write this post.

Damn this is disappointing, since I really wanted to use Visual Studio, at least for a while, to check if I could learn more about it. Guess I just need to face the facts and admit defeat today. :disappointed: 

## How to reproduce the issue

- Have Jekyll running with the command: ``jekyll serve --drafts --watch``
- Started off Visual Studio with right-clicking the ``_drafts`` folder and selecting *"Add New Item"*.
- Select "HTML Page" and entered the name ``testing001.markdown`` in the name field in the bottom of the wizard screen.
- This created a new HTML file in the ``_drafts`` folder.
- Delete the generated HTML source code from the new file.
- Enter the basic content of the blog post, eg.:

```
---
layout: post
---
> Testing 001
```

- Reload your blog posts page and check if the file shows up in the list of new articles.
- Click the link to the new blog post draft and see for yourselve that somehow the post didn't render and you end up with only a HTML page with no layout etc.

## Screenshots

### What the HTML page looks like after broken rendering

![What the page looks like after rendering](/images/20150228-VisualStudioJekyllMarkdownIssue001.png)

### How it looks like in Visual Studio

![How it looks like in Visual Studio](/images/20150228-VisualStudioJekyllMarkdownIssue002.png)

## So how do to fix this?

Well you just experienced an UTF-8 encoding issue.

When Visual Studio is saving files it is saving it as Unicode (UTF-8 with signature), Jekyll needs files which are encoded using UTF-8 without signature.

Just make sure that you save the files using the right unicode and you're good to go.

This is explained in the [http://jekyllrb.com/docs/windows/]() page.

So better follow those guidelines!