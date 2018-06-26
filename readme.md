# The personal web page or blog for Johan Bové

Hosted on GitHub Pages.

Public URL: <http://blog.johanbove.info>

<https://travis-ci.org/johanbove/johanbove.github.io/builds>

[![Build Status](https://travis-ci.org/johanbove/johanbove.github.io.svg?branch=master)](https://travis-ci.org/johanbove/johanbove.github.io)

## Setting up Jekyll on Ubuntu Bash for Windows

Works on:

```
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 16.04.3 LTS
Release:        16.04
Codename:       xenial
```

As documented by [Dave Rupert](https://daverupert.com/2016/04/jekyll-on-windows-with-bash/)

First install Ruby 2.3

```
$ sudo -s
$ apt update
$ apt-add-repository ppa:brightbox/ruby-ng
$ apt install make gcc
$ apt install ruby2.3 ruby2.3-dev ruby-switch
$ apt-get install dh-autoreconf
```

Verify the Ruby version, or set to version 2.3

```
$ ruby -v
$ ruby-switch --set ruby2.3
```

## Update 2018-06-26

Installing Ruby using rbenv as the Ruby set up got messed up after some later updates.

From <https://gorails.com/setup/ubuntu/16.04>:

```
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.5.1
rbenv global 2.5.1
ruby -v
```

## Installing Jekyll

Install Jekyll and Bundler, including `activesupport`

```
$ gem install jekyll bundler activesupport
```

See the [Install Jekyll Docs](https://jekyllrb.com/docs/installation/) for all information..


## Starting the Jekyll server

To start a local Jekyll server, enter:

```
$ bundle install
$ bundle exec jekyll serve -w
```

See also the [commands](commands.md) file for more commands.


## This is a Jekyll blog

The first post was in 2014.

- <http://blog.johanbove.info/blog/2014/09/06/welcome-to-jekyll.html>

## Emoji Cheat Sheet

<https://www.webpagefx.com/tools/emoji-cheat-sheet/>

## License

Johan Bové released this blog system and blog content under the **[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)**.
