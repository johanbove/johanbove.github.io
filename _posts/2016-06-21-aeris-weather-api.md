---
layout: page
title: "Aeris Weather API demo"
categories: blog
---

A demo implementation of the Aeris Weather API

<http://www.aerisweather.com/signup/developer/>
<http://idratherbewriting.com/files/restapicourse/wind-aeris.html>

<script>
    function checkWind() {
        var output = $.ajax({
            url: 'http://api.aerisapi.com/observations/Duesseldorf?client_id=lDaWTTH36hso9l7hq5sLk&client_secret=SRHgEKsZSWge30jNX9yggYPNocPjyNK2a0PLeY9C',
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
</script>

<button type="button" onclick="checkWind()" class="btn btn-danger">Check wind conditions</button>

<h2>Wind conditions for Düsseldorf</h2>

<b>Wind chill: </b><span id="wind_chill"></span> <span id="temperature"></span><br>
<b>Wind speed: </b><span id="wind_speed"></span> <span id="speed"></span><br>
<b>Wind direction: </b><span id="wind_direction"></span>
