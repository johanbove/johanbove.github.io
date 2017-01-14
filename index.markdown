---
layout: front
---

{%comment%}
@see: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

Getting current year for calculating my age.

{%endcomment%}
{% assign currentyear = site.time | date:'%Y' %}

# _An Info-Tech professional passionate about the World Wide Web._

<!-- So this is totally assuming I am still alive when you read this... *darkthoughts* -->

## Hi, my name is Johan!

<div class="grid">

    <div class="block">
        <h3>I work on websites</h3>
        <p>As a web professional I have gathered over fifteen years of hands-on experience developing websites.</p>
        <p>People I worked with have called me an expert in HTML, CSS and JavaScript. I know how to build complex, scalable browser applications starting from concept to design, which will - most probably - work perfectly on any Internet-connected device. I take special consideration for accessibility and performance.</p>
    </div>

    <div class="block">
        <h3>I keep up-to-date</h3>
        <p>Every day I browse through ship-loads of articles and tutorials to keep up with the latest trends and technologies.</p>
        <p>I keep an eye out for cool open-source projects, scouting for the best coding examples of great software design and user experience.</p>
    </div>

    <div class="block">
        <h3>I'm an IT consultant</h3>
        <p>In my professional career I worked on online job boards, e-commerce web shops, CMS systems (Drupal, WordPress), streaming media and smart-home automation platforms.</p>
        <p>I am currently employed as a senior consultant at Deloitte Digital where I am specializing in Front End Web Development.</p>
    </div>

    <div class="block">
        <h3>Living in Germany</h3> 
        <p>My mother tongue is Dutch, and I speak English, German and some French.</p>
        <p>I am {{ currentyear | minus:site.birthyear }}, grew up in a small town in the middle of Flanders, Belgium and I migrated to Germany in 2009. It's good to be European.</p>
    </div>

    <div class="block">
        <h3>Getting in touch</h3>
        <p>The easiest way to connect with me is through <a href="//twitter.com/johanbove">Twitter</a>. And if you're interested in working with me, check-out my public resume on <a href="//de.linkedin.com/in/johanbove">LinkedIn</a>.</p>
        <p>Anyway, thanks for dropping by!</p>
    </div>

</div>
