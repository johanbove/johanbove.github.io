---
layout: project
evernote: ""
title: "Project: Sustainica"
permalink: /project/sustainica
timeframe: "2015"
category: projects
---

A website built on top of the Zeppelin template (Github Link) which applies Jekyll (Ruby), Bower, Grunt, SCSS and various other web tools (add list of components) to construct a fast and modern web site constructed using Markdown and Yaml (yml) files which apply the Liquid Template (Shopify) engine to compile simple code into a full website.

## About Zeppelin

Introduction of the templating tool and how it works.
(Check the GitHub repository)

## Using git.geekli.st as code repository

- Introduction on the code repository used.
- Issues: creating, editing, emojies, assigning to users
- Commenting
- Commit annotation and comparison
- Milestones
- Labels: bug, content, feature, installation, layout, major, minor, patch, tweaks, not doing
- Commits
- Branching & merging
- RSS feed to e-mail through IFTTT integration.
- Tags and releases
- Not possible to upload files through the GitLab interface [GitLab issue](http://feedback.gitlab.com/forums/176466-general/suggestions/5867835-allow-file-upload-to-repositories-from-the-web-int)

## Next: Web Hooks

Currently I'm still manually FTP-ing the *deployed* site to the hosting server. I would like to automatise this process by building the site on a server which then will copy the compiled files to the FTP server.

## Software used

- Brackets was used as main IDE.
- Paint.net for bitmap images (PNG, JPG)
- Inkscape was used for SVG
- FileZilla for uploading files

## Using Git

- Windows powershell and Git for Windows; fixing some issues with dealing with Git in Github Git bash console
- Tagging: before I figured I can use NPM version I did manual ``git tag -a v1.4 -m "my version 1.4"`` [manual](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- ``git push origin master``

## Google Structured Data

- <https://developers.google.com/structured-data/rich-snippets/events>

## Using Grunt

- Building the site and execution the various optimizations: SVGMIN, Imagemin, Uglifier, etc.
- Deployment with grunt; running grunt tasks
- Configuration file example...
- NPM version: ``npm version [major|minor|patch] -m "Upgrade to version %s for ..."``

## Things I learned

- For loops, data lists and conditional statements in Shopify's Liquid template language
- Bootstrap's grid CSS layout system
