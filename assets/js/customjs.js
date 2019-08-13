// Testing
var t1 = new Date("Aug 8, 2019 17:34:00").getTime();
var t2 = new Date("Aug 8, 2019 17:34:10").getTime();
var t3 = new Date("Aug 8, 2019 17:34:20").getTime();
var t4 = new Date("Aug 8, 2019 17:34:30").getTime();
var t5 = new Date("Aug 8, 2019 17:34:40").getTime();
var t6 = new Date("Aug 8, 2019 17:34:50").getTime();
var t7 = new Date("Aug 8, 2019 17:35:00").getTime();
var t8 = new Date("Aug 8, 2019 17:35:10").getTime();
var t9 = new Date("Aug 8, 2019 17:35:00").getTime();
var t10 = new Date("Aug 8, 2019 17:35:10").getTime();


// Count Down 1 British Touring Cars
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Thruxton = new Date("Aug 17, 2019 12:15:00").getTime();
    var ThruxtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Knockhill = new Date("Sep 14, 2019 18:34:00").getTime();
    var KnockhillLive = new Date("Sep 15, 2019 19:00:00").getTime();
    var Silverstone = new Date("Sep 28, 2019 09:50:00").getTime();
    var SilverstoneLive = new Date("Sep 29, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Oct 11, 2019 11:35:00").getTime();
    var BrandshatchLive = new Date("Oct 13, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Thruxton - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle1").innerHTML = 'Thruxton, Hampshire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = ThruxtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
        document.getElementById("live1").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = Knockhill - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
            document.getElementById("live1").innerHTML = "";
            document.getElementById("locationTitle1").innerHTML = 'Knockhill, Scotland';
            if (distance3 < 0) {
                distance4 = KnockhillLive - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                document.getElementById("live1").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = Silverstone - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                    document.getElementById("live1").innerHTML = "";
                    document.getElementById("locationTitle1").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = SilverstoneLive - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                        document.getElementById("live1").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = Brandshatch - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                            document.getElementById("live1").innerHTML = "";
                            document.getElementById("locationTitle1").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = BrandshatchLive - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown1").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                                document.getElementById("live1").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown1").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);

// Count Down 2 British GT
// Update the count down every 1 second
var x = setInterval(function() {

     // Dates we're counting down to
    var Donnington = new Date("Sep 14, 2019 12:55:00").getTime();
    var DonningtonLive = new Date("Sep 15, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Donnington - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle2").innerHTML = 'Donington Park, Leicestershire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = DonningtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
        document.getElementById("live2").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = t3 - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
            document.getElementById("live2").innerHTML = "";
            document.getElementById("locationTitle2").innerHTML = 'Knockhill, Scotland';
            if (distance3 < 0) {
                distance4 = t4 - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                document.getElementById("live2").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = t5 - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                    document.getElementById("live2").innerHTML = "";
                    document.getElementById("locationTitle2").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = t6 - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                        document.getElementById("live2").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = t7 - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                            document.getElementById("live2").innerHTML = "";
                            document.getElementById("locationTitle2").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = t8 - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown2").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                                document.getElementById("live2").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown2").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);


// Count Down 3 Porsche Carrera Cup GB
// Update the count down every 1 second
var x = setInterval(function() {

     // Dates we're counting down to
    var Thruxton = new Date("Aug 16, 2019 10:40:00").getTime();
    var ThruxtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Silverstone = new Date("Aug 31, 2019 13:05:00").getTime();
    var SilverstoneLive = new Date("Sep 1, 2019 12:00:00").getTime();
    var Silverstone2 = new Date("Sep 27, 2019 12:00:00").getTime();
    var SilverstoneLive2 = new Date("Sep 29, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Oct 11, 2019 10:40:00").getTime();
    var BrandshatchLive = new Date("Oct 13, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Thruxton - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle3").innerHTML = 'Thruxton, Hampshire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = ThruxtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
        document.getElementById("live3").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = Silverstone - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
            document.getElementById("live3").innerHTML = "";
            document.getElementById("locationTitle3").innerHTML = 'Silverstone, Northamptonshire';
            if (distance3 < 0) {
                distance4 = SilverstoneLive - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                document.getElementById("live3").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = Silverstone2 - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                    document.getElementById("live3").innerHTML = "";
                    document.getElementById("locationTitle3").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = SilverstoneLive2 - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                        document.getElementById("live3").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = Brandshatch - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                            document.getElementById("live3").innerHTML = "";
                            document.getElementById("locationTitle3").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = BrandshatchLive - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown3").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                                document.getElementById("live3").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown3").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);


// Count Down 4 Caterham Seven 420R, 310R, and 270R Championships
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Donnington = new Date("Aug 17, 2019 10:25:00").getTime();
    var DonningtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Donnington2 = new Date("Sep 21, 2019 10:25:00").getTime();
    var DonningtonLive2 = new Date("Sep 22, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Sep 28, 2019 10:30:00").getTime();
    var BrandshatchLive = new Date("Sep 29, 2019 19:00:00").getTime();
    var Portimao = new Date("Nov 1, 2019 10:50:00").getTime();
    var PortimaoLive = new Date("Nov 3, 2019 19:00:00").getTime();
    var Estoril = new Date("Nov 22, 2019 10:40:00").getTime();
    var EstorilLive = new Date("Nov 24, 2019 19:00:00").getTime();

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = Donnington - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id
   document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
   document.getElementById("locationTitle4").innerHTML = 'Donington Park, Leicestershire';
   document.getElementById("championship-title").innerHTML ='Caterham Seven 420R, 310R, and 270R Championships';
   // If the count down is finished, write some text 
   if (distance < 0) {
       distance2 = DonningtonLive - now;
       // Time calculations for days, hours, minutes and seconds
       days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
       hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
       seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

       // Display the result in the element with id
       document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
       document.getElementById("live4").innerHTML = "Live";
       if (distance2 < 0) {
           distance3 = Donnington2 - now;
           // Time calculations for days, hours, minutes and seconds
           days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
           hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
           seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
       
           // Display the result in the element with id
           document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
           document.getElementById("live4").innerHTML = "";
           document.getElementById("locationTitle4").innerHTML = 'Donington Park, Leicestershire';
           document.getElementById("championship-title").innerHTML ='Toyo Tyres 7 Race Series';
           document.getElementById("championship-title2").innerHTML ='Toyo Tyres 7 Race Series';
           if (distance3 < 0) {
               distance4 = DonningtonLive2 - now;
               // Time calculations for days, hours, minutes and seconds
               days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
               hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
               seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
           
               // Display the result in the element with id
               document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
               document.getElementById("live4").innerHTML = "Live";
               if (distance4 < 0) {
                   distance5 = Brandshatch - now;
                   // Time calculations for days, hours, minutes and seconds
                   days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                   hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                   minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                   seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
               
                   // Display the result in the element with id
                   document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                   document.getElementById("live4").innerHTML = "";
                   document.getElementById("locationTitle4").innerHTML = 'Brands Hatch (Indy), Kent';
                   document.getElementById("championship-title").innerHTML ='Caterham Seven 420R, 310R, and 270R Championships';
                   document.getElementById("championship-title2").innerHTML ='Caterham Seven 420R, 310R, and 270R Championships';
                   if (distance5 < 0) {
                       distance6 = BrandshatchLive - now;
                       // Time calculations for days, hours, minutes and seconds
                       days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                       hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                       minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                       seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                   
                       // Display the result in the element with id
                       document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                       document.getElementById("live4").innerHTML = "Live";
                       if (distance6 < 0) {
                           distance7 = Portimao - now;
                           // Time calculations for days, hours, minutes and seconds
                           days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                           hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                           minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                           seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                       
                           // Display the result in the element with id
                           document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                           document.getElementById("live4").innerHTML = "";
                           document.getElementById("locationTitle4").innerHTML = 'Portimao, Portugal';
                           document.getElementById("championship-title").innerHTML ='Toyo Tyres 7 Race Series';
                           document.getElementById("championship-title2").innerHTML ='Toyo Tyres 7 Race Series';
                           if (distance7 < 0) {
                               distance8 = PortimaoLive - now;
                               // Time calculations for days, hours, minutes and seconds
                               days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                               hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                               minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                               seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                           
                               // Display the result in the element with id
                               document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                               document.getElementById("live4").innerHTML = "Live";
                               if (distance8 < 0) {
                                    distance9 = Estoril  - now;
                                    // Time calculations for days, hours, minutes and seconds
                                    days = Math.floor(distance9 / (1000 * 60 * 60 * 24));
                                    hours = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                    minutes = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
                                    seconds = Math.floor((distance9 % (1000 * 60)) / 1000);
                                
                                    // Display the result in the element with id
                                    document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                                    document.getElementById("live4").innerHTML = "";
                                    document.getElementById("locationTitle4").innerHTML = 'Estoril, Portgual';
                                    document.getElementById("championship-title").innerHTML = 'Toyo Tyres 7 Race Series';
                                    document.getElementById("championship-title2").innerHTML = 'Toyo Tyres 7 Race Series';
                                    if (distance9 < 0) {
                                        distance10 = EstorilLive - now;
                                        // Time calculations for days, hours, minutes and seconds
                                        days = Math.floor(distance10 / (1000 * 60 * 60 * 24));
                                        hours = Math.floor((distance10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        minutes = Math.floor((distance10 % (1000 * 60 * 60)) / (1000 * 60));
                                        seconds = Math.floor((distance10 % (1000 * 60)) / 1000);
                                    
                                        // Display the result in the element with id
                                        document.getElementById("countDown4").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
                                        document.getElementById("live4").innerHTML = "Live";
                                        if (distance10 < 0) {
                                            clearInterval(x);
                                            document.getElementById("countDown4").innerHTML = "EXPIRED";
                                        }
                                    }
                                }   
                            }
                        }   
                   }
               }
           }
       }
   }
}, 1000);

// Count Down 5 Blancpain GT Series Endurance Cup
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Barcelona = new Date("Sep 28, 2019 13:00:00").getTime();
    var BarcelonaLive = new Date("Sep 29, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Barcelona - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown5").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle5").innerHTML = 'Barcelona, Spain';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = BarcelonaLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown5").innerHTML = ("0" + days).slice(-2) + "\xa0  :\xa0  " + ("0" + hours).slice(-2) + "\xa0  :\xa0  " + ("0" + minutes).slice(-2) + "\xa0  :\xa0  " + ("0" + seconds).slice(-2);
        document.getElementById("live5").innerHTML = "Live";
        if (distance2 < 0) {
            clearInterval(x);
            document.getElementById("countDown5").innerHTML = "EXPIRED";
        }
    }
},1000);



// Count Down 1 British Touring Cars
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Thruxton = new Date("Aug 17, 2019 12:15:00").getTime();
    var ThruxtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Knockhill = new Date("Sep 14, 2019 18:34:00").getTime();
    var KnockhillLive = new Date("Sep 15, 2019 19:00:00").getTime();
    var Silverstone = new Date("Sep 28, 2019 09:50:00").getTime();
    var SilverstoneLive = new Date("Sep 29, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Oct 11, 2019 11:35:00").getTime();
    var BrandshatchLive = new Date("Oct 13, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Thruxton - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown11").innerHTML = ("0" + days ).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle11").innerHTML = 'Thruxton, Hampshire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = ThruxtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
        document.getElementById("live11").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = Knockhill - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
            document.getElementById("live11").innerHTML = "";
            document.getElementById("locationTitle11").innerHTML = 'Knockhill, Scotland';
            if (distance3 < 0) {
                distance4 = KnockhillLive - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                document.getElementById("live11").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = Silverstone - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                    document.getElementById("live11").innerHTML = "";
                    document.getElementById("locationTitle11").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = SilverstoneLive - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                        document.getElementById("live11").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = Brandshatch - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown11").innerHTML = days + " : " + hours + " : " + minutes + ": " + seconds;
                            document.getElementById("live11").innerHTML = "";
                            document.getElementById("locationTitle11").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = BrandshatchLive - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown11").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                                document.getElementById("live11").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown11").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);

// Count Down 2 British GT
// Update the count down every 1 second
var x = setInterval(function() {

     // Dates we're counting down to
    var Donnington = new Date("Sep 14, 2019 12:55:00").getTime();
    var DonningtonLive = new Date("Sep 15, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Donnington - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle22").innerHTML = 'Donington Park, Leicestershire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = DonningtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
        document.getElementById("live22").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = t3 - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
            document.getElementById("live22").innerHTML = "";
            document.getElementById("locationTitle22").innerHTML = 'Knockhill, Scotland';
            if (distance3 < 0) {
                distance4 = t4 - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                document.getElementById("live22").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = t5 - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                    document.getElementById("live22").innerHTML = "";
                    document.getElementById("locationTitle22").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = t6 - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                        document.getElementById("live22").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = t7 - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                            document.getElementById("live22").innerHTML = "";
                            document.getElementById("locationTitle22").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = t8 - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown22").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                                document.getElementById("live22").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown22").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);


// Count Down 3 Porsche Carrera Cup GB
// Update the count down every 1 second
var x = setInterval(function() {

     // Dates we're counting down to
    var Thruxton = new Date("Aug 16, 2019 10:40:00").getTime();
    var ThruxtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Silverstone = new Date("Aug 31, 2019 13:05:00").getTime();
    var SilverstoneLive = new Date("Sep 1, 2019 12:00:00").getTime();
    var Silverstone2 = new Date("Sep 27, 2019 12:00:00").getTime();
    var SilverstoneLive2 = new Date("Sep 29, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Oct 11, 2019 10:40:00").getTime();
    var BrandshatchLive = new Date("Oct 13, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Thruxton - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle33").innerHTML = 'Thruxton, Hampshire';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = ThruxtonLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
        document.getElementById("live33").innerHTML = "Live";
        if (distance2 < 0) {
            distance3 = Silverstone - now;
            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        
            // Display the result in the element with id
            document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
            document.getElementById("live33").innerHTML = "";
            document.getElementById("locationTitle33").innerHTML = 'Silverstone, Northamptonshire';
            if (distance3 < 0) {
                distance4 = SilverstoneLive - now;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            
                // Display the result in the element with id
                document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                document.getElementById("live33").innerHTML = "Live";
                if (distance4 < 0) {
                    distance5 = Silverstone2 - now;
                    // Time calculations for days, hours, minutes and seconds
                    days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                    hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                
                    // Display the result in the element with id
                    document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                    document.getElementById("live33").innerHTML = "";
                    document.getElementById("locationTitle33").innerHTML = 'Silverstone, Northamptonshire';
                    if (distance5 < 0) {
                        distance6 = SilverstoneLive2 - now;
                        // Time calculations for days, hours, minutes and seconds
                        days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                        hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                        seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    
                        // Display the result in the element with id
                        document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                        document.getElementById("live33").innerHTML = "Live";
                        if (distance6 < 0) {
                            distance7 = Brandshatch - now;
                            // Time calculations for days, hours, minutes and seconds
                            days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                            hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                            seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        
                            // Display the result in the element with id
                            document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                            document.getElementById("live33").innerHTML = "";
                            document.getElementById("locationTitle33").innerHTML = 'Brands Hatch, Kent';
                            if (distance7 < 0) {
                                distance8 = BrandshatchLive - now;
                                // Time calculations for days, hours, minutes and seconds
                                days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                                hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                                seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                            
                                // Display the result in the element with id
                                document.getElementById("countDown33").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                                document.getElementById("live33").innerHTML = "Live";
                                if (distance8 < 0) {
                                    clearInterval(x);
                                    document.getElementById("countDown33").innerHTML = "EXPIRED";
                                }
                            }
                        }   
                    }
                }
            }
        }
    }
}, 1000);


// Count Down 4 Caterham Seven 420R, 310R, and 270R Championships
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Donnington = new Date("Aug 17, 2019 10:25:00").getTime();
    var DonningtonLive = new Date("Aug 18, 2019 19:00:00").getTime();
    var Donnington2 = new Date("Sep 21, 2019 10:25:00").getTime();
    var DonningtonLive2 = new Date("Sep 22, 2019 19:00:00").getTime();
    var Brandshatch = new Date("Sep 28, 2019 10:30:00").getTime();
    var BrandshatchLive = new Date("Sep 29, 2019 19:00:00").getTime();
    var Portimao = new Date("Nov 1, 2019 10:50:00").getTime();
    var PortimaoLive = new Date("Nov 3, 2019 19:00:00").getTime();
    var Estoril = new Date("Nov 22, 2019 10:40:00").getTime();
    var EstorilLive = new Date("Nov 24, 2019 19:00:00").getTime();

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = Donnington - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id
   document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
   document.getElementById("locationTitle44").innerHTML = 'Donington Park, Leicestershire';
   document.getElementById("championship-title2").innerHTML ='Caterham Seven 420R, 310R, and 270R Championships';
   // If the count down is finished, write some text 
   if (distance < 0) {
       distance2 = DonningtonLive - now;
       // Time calculations for days, hours, minutes and seconds
       days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
       hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
       seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

       // Display the result in the element with id
       document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
       document.getElementById("live44").innerHTML = "Live";
       if (distance2 < 0) {
           distance3 = Donnington2 - now;
           // Time calculations for days, hours, minutes and seconds
           days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
           hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
           seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
       
           // Display the result in the element with id
           document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
           document.getElementById("live44").innerHTML = "";
           document.getElementById("locationTitle44").innerHTML = 'Donington Park, Leicestershire';
           document.getElementById("championship-title").innerHTML ='Toyo Tyres 7 Race Series';
           if (distance3 < 0) {
               distance4 = DonningtonLive2 - now;
               // Time calculations for days, hours, minutes and seconds
               days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
               hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
               seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
           
               // Display the result in the element with id
               document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
               document.getElementById("live44").innerHTML = "Live";
               if (distance4 < 0) {
                   distance5 = Brandshatch - now;
                   // Time calculations for days, hours, minutes and seconds
                   days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                   hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                   minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                   seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
               
                   // Display the result in the element with id
                   document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                   document.getElementById("live44").innerHTML = "";
                   document.getElementById("locationTitle44").innerHTML = 'Brands Hatch (Indy), Kent';
                   document.getElementById("championship-title2").innerHTML ='Caterham Seven 420R, 310R, and 270R Championships';
                   if (distance5 < 0) {
                       distance6 = BrandshatchLive - now;
                       // Time calculations for days, hours, minutes and seconds
                       days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                       hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                       minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                       seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                   
                       // Display the result in the element with id
                       document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                       document.getElementById("live44").innerHTML = "Live";
                       if (distance6 < 0) {
                           distance7 = Portimao - now;
                           // Time calculations for days, hours, minutes and seconds
                           days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                           hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                           minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                           seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                       
                           // Display the result in the element with id
                           document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                           document.getElementById("live44").innerHTML = "";
                           document.getElementById("locationTitle44").innerHTML = 'Portimao, Portugal';
                           document.getElementById("championship-title2").innerHTML ='Toyo Tyres 7 Race Series';
                           if (distance7 < 0) {
                               distance8 = PortimaoLive - now;
                               // Time calculations for days, hours, minutes and seconds
                               days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
                               hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                               minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
                               seconds = Math.floor((distance8 % (1000 * 60)) / 1000);
                           
                               // Display the result in the element with id
                               document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                               document.getElementById("live44").innerHTML = "Live";
                               if (distance8 < 0) {
                                    distance9 = Estoril  - now;
                                    // Time calculations for days, hours, minutes and seconds
                                    days = Math.floor(distance9 / (1000 * 60 * 60 * 24));
                                    hours = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                    minutes = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
                                    seconds = Math.floor((distance9 % (1000 * 60)) / 1000);
                                
                                    // Display the result in the element with id
                                    document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                                    document.getElementById("live44").innerHTML = "";
                                    document.getElementById("locationTitle44").innerHTML = 'Estoril, Portgual';
                                    document.getElementById("championship-title2").innerHTML ='Toyo Tyres 7 Race Series';
                                    if (distance9 < 0) {
                                        distance10 = EstorilLive - now;
                                        // Time calculations for days, hours, minutes and seconds
                                        days = Math.floor(distance10 / (1000 * 60 * 60 * 24));
                                        hours = Math.floor((distance10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        minutes = Math.floor((distance10 % (1000 * 60 * 60)) / (1000 * 60));
                                        seconds = Math.floor((distance10 % (1000 * 60)) / 1000);
                                    
                                        // Display the result in the element with id
                                        document.getElementById("countDown44").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
                                        document.getElementById("live44").innerHTML = "Live";
                                        if (distance10 < 0) {
                                            clearInterval(x);
                                            document.getElementById("countDown44").innerHTML = "EXPIRED";
                                        }
                                    }
                                }   
                            }
                        }   
                   }
               }
           }
       }
   }
}, 1000);

// Count Down 5 Blancpain GT Series Endurance Cup
// Update the count down every 1 second
var x = setInterval(function() {

    // Dates we're counting down to
    var Barcelona = new Date("Sep 28, 2019 13:00:00").getTime();
    var BarcelonaLive = new Date("Sep 29, 2019 19:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = Barcelona - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("countDown55").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
    document.getElementById("locationTitle55").innerHTML = 'Barcelona, Spain';
    // If the count down is finished, write some text 
    if (distance < 0) {
        distance2 = BarcelonaLive - now;
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id
        document.getElementById("countDown55").innerHTML = ("0" + days).slice(-2) + " : " + ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
        document.getElementById("live55").innerHTML = "Live";
        if (distance2 < 0) {
            clearInterval(x);
            document.getElementById("countDown55").innerHTML = "EXPIRED";
        }
    }
},1000);