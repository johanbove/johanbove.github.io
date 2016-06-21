---
layout: page
title: "Aeris Weather API demo"
categories: blog
---

A demo implementation of the Aeris Weather API

<http://www.aerisweather.com/signup/developer/>
<http://idratherbewriting.com/files/restapicourse/wind-aeris.html>

```
function checkWind() {
    var output = $.ajax({
        url: 'http://api.aerisapi.com/observations/Duesseldorf?client_id={CLIENTID}&client_secret={CLIENTSECRET}',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $("#wind_speed").append(data.response.ob.windKPH + " KPH");
            $("#wind_direction").append(data.response.ob.windDir);
            $("#wind_chill").append(data.response.ob.feelslikeC + " C");
        },
        error: function(err) { alert(err); }
    });
}
```
