---
layout: post
title: "Grunt 'the socket is closed' error and how I found a workaround"
categories: blog
---

So the other day I started building a website for a friend. Since I am pretty happy with Jekyll I decided to use the same website building technology for this new site.

Thanks to the GDG Düsseldorf group I had come across the excellent template called "[Zeppelin](https://github.com/gdg-x/zeppelin-grunt)".

Now the nice developers who built this template offered the complete source code including the build system for free on Github. I was eager to get started with it so I could set up the event site quickly and smoothly.

Since my personal site works fine to build using Jekyll and I had previously checked out Grunt, I was convinced that this would be all a piece of cake. I was wrong. Unfortunately it happens that even-though all Node NPM modules should work on Windows, I ran into issues with the Windows command prompt.

The issue happened when I tried building the site using the grunt command ```grunt serve:dist```.

The following error stopped everything midway in the build process:

[![Error: the socket is closed during script execution](/images/20150609-gruntsocketisclosederror.png)](/images/20150609-gruntsocketisclosederror.jpg)

Funny enough serving the site for testing directly worked without troubles. So what was going on? Was it the imagemin and svgmin modules? Was it lodash which caused the issue? I actually still don't really know.

So desperate to find a solution I hunted down pages of Github project issues but was not able to find anything that helped me to the issue.

At this point I thought I should document this issue at perhaps find someone to help me fix it, so my next step was to transfer the output of the Windows command line window into a text file. I knew you can pipe the command line output to text files and so I did that with the Grunt command.

    $grunt serve:dist > out.log

Guess what? The command executed without any hiccup and super swiftly! :smile:

So for now I'm through the woods, but it would be cool to be able to figure out what exactly is causing the socket issue.

There were some other issues as well which I found ways of getting past.

The Jekyll Multiple Languages plugin had issues with the Windows command prompt page encoding which is not UTF-8 by default. You can fix this by executing this command which I found at [Jose On Code blog](http://joseoncode.com/2011/11/27/solving-utf-problem-with-jekyll-on-windows/) in the command prompt:

    $chcp 65001
    
The other problem is with Node's [nested node_modules](https://github.com/joyent/node/issues/6960) of [endless dependencies](https://github.com/npm/npm/issues/3697) it can happen that you end with too many nested folders which gets you stuck in a Windows OS issue where the system is not able to get through to all folders because of a 260 character path limit. To get around this issue you can actually [create a temporary drive assignment](http://stackoverflow.com/questions/21731066/too-long-paths-because-of-nested-node-dependencies) using the command ```subst``` from within half-way the nested folders.

This command will effectively [create a temporary partition drive letter](http://www.makeuseof.com/tag/how-to-map-a-local-windows-folder-to-a-drive-letter/) and hence the path will be literally cut in half so you can try to delete the folders.

    $subst j: .\

After all these years Windows is still full of little surprises!