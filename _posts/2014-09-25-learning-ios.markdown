---
layout: post
title:  "Learning iOS development"
categories: blog
---

So I just installed [CodeBlocks](http://www.cprogramming.com/code_blocks/) on my work dev machine (DELL XPS-12 running Windows 8.1) so I can run C code.

**Update:** so actually that didn't take me very far. I'm in the process of switching to this approach now: [running objective-c on Windows](http://stackoverflow.com/questions/56708/objective-c-for-windows).

Why? Well, I am currently [learning](http://code.tutsplus.com/tutorials/getting-started-with-objective-c--mobile-13944) all about [Objective-C and iOS development](http://code.tutsplus.com/series/learn-ios-sdk-development-from-scratch--mobile-14536).

The excellent tutorials are written by fellow Belgian [Bart Jacocs](http://tutsplus.com/authors/bart-jacobs).

You might think it is strange since you need an Apple computer to do anything related with iOS. Well, the company I am currently working for needs an iOS app in preparation to the HomeKit craze which is expected to happen as soon as devices come available on the market.

Developers need to work with Apple's Xcode for iOS development, so they ordered a Mac Mini exactly for this purpose for me. I the meantime nothing stops me from learning about the new programming language, tools and everything around this using my Windows PC while waiting until the shiny new Apple gear arrives.

There is a whole bunch of new concepts I have to get used to, since my background as a front-end web developer working in JavaScript, Java etc is very different from the Apple World of Programming. But I am certain I will be able to get going quickly because of the plethora of documentation online.

The concepts I need to master in short-term, in no particular order:

* Objective-C
* Using an Apple machine
* XCode IDE
* iOS guidelines

So wish me luck! I'm going in.

## My first Objective-C program

So this is the ``helloworld.m`` objective-c program I have been playing with, courtesy of [Bart's tutorial](http://code.tutsplus.com/tutorials/learning-c-a-primer--mobile-13916). This amazing code compiles to a nice ``helloworld.exe`` program which outputs the prints to the console in [Windows PowerShell](http://technet.microsoft.com/en-us/library/ee221100.aspx).

```objective-c
/*
 Got Objective-C to compile on Windows thanks to this Stackoverflow post:
 http://stackoverflow.com/questions/56708/objective-c-for-windows

 Build command:
     gcc -o helloworld.exe helloworld.m -I /GNUstep/GNUstep/System/Library/Headers -L /GNUstep/GNUstep/System/Library/Libraries -std=c99 -lobjc -lgnustep-base -fconstant-string-class=NSConstantString
*/

#include <stdio.h>
#include <Foundation/Foundation.h>

// Structures
struct Album
{
    int year;
    int tracks;
    int duration;
    NSString *title;
};

// Function Prototypes

int multiplyByFive(int a);
double averageDuration(double duration, int tracks);
void albumInfo(struct Album theAlbum);
int helloWorld();
NSString *myName = @"Captain Obvious";

int main(void)
{

    // Declaring two album structures
    struct Album yourAlbum;
    struct Album myAlbum;

    // Giving the albums some properties
    myAlbum.year = 1998;
    myAlbum.tracks = 20;
    myAlbum.title = @"Album A";
    myAlbum.duration = 45;
    yourAlbum.year = 2001;
    yourAlbum.tracks = 18;
    yourAlbum.title = @"Album B";
    yourAlbum.duration = 60;

    // helloWorld() returns the length of the given name
    int nameLength = helloWorld(myName);
    
    // Console output
    NSLog(@"The length of your name multiplied by five is %d.\n", multiplyByFive(nameLength));

    // Outputting album info
    
    albumInfo(myAlbum);
    albumInfo(yourAlbum);
    
    return 0;
}

// Function Implementations

int multiplyByFive(int a)
{
    return a * 5;
}

double averageDuration(double duration, int tracks)
{
    return duration / tracks;
}

void albumInfo(struct Album theAlbum)
{
    NSLog(@"The album '%@', was released in %d, lasts %d minutes and had %d tracks, with an average track length of %f minutes.\n", theAlbum.title, theAlbum.year, theAlbum.duration, theAlbum.tracks, averageDuration(theAlbum.duration, theAlbum.tracks));
}

int helloWorld(NSString *theName)
{
    NSLog(@"Hello %@! Your name is %d characters long.\n", theName, [theName length]);
    return [theName length];
}

```

