---
layout: post
categories: blog
title: "Jumping on the Visual Studio Code train"
---

## Visual Studio Code is like Visual Studio Light

Well-known web developer, [Dave Rupert](http://daverupert.com/2015/10/windows-editors-and-shells/) introduced me to this new Multi-Platform (Windows, Mac AND Ubuntu :sparkles:) editor made by Microsoft.
You can download your own "preview" "for free" over at <https://code.visualstudio.com> while supplies last.

## First Impressions: "5 minutes in"

- Solid Markdown support. This editor is made for creating notes in Markdown, including previews!
- Cool fresh interface.
- Great, familiar way of navigating around folders and open files if you're used to Visual Studio.
- Integrated Git support! :rocket:
- Task running right from within the editor is really sweet!

## More to follow ...

This post will be updated with more experiences and impressions as I go along.

## Some initial questions

- Can I use this editor for free developer commercial applications?
- Will it stay free?
- What's the status of plugins adding missing features and functionality?
- Does it support GitHub's Two-Factor authentication?

## Issues

### Task Runner encoding is set to IBM ...

For my Jekyll grunt build to success I need to be able to set the encoding of the "Task" output window by doing:

    chcp 65001
	
This sets the Powershell encoding to UTF-8 and the Multi-lingual Jekyll plugin I'm using in a project works.
The issue: I don't know - yet - where to define this command so it runs everytime I run ``ctrl-shift-p`` and type ``Run Task``.