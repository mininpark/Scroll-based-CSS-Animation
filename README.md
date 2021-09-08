## Table of contents

- [Overview](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
    - [The challenge](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
    - [Links](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
- [My process](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
    - [Built with](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
    - [What I learned](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
    - [Continued development](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)
- [Author](https://www.notion.so/Rocksweb-Scroll-based-CSS-21b351ff40af4fb9a07ffaf350432efd)

## Overview

### The challenge

Users should be able to:

- Anmiation with scroll down

### Links

- Live Site URL:

[]()

## My process

### Built with

- Semantic HTML5 markup
- web font load with script
- CSS Grid with Framework Bootstrap
- Scroll down
    - Javascript for addClass
    - Waypoint
    - Scrolltrigger

### What I learned

- NEW Semantic HTML 5
    - **<blockquote>**: The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.
        - <figcaption>: The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element.
    - **<small>**: The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.

- Webfont load with script can be faster than import method in css

    ```html
    <!--webfont script load is a bit faster: montserrat, raleway-->
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        <script>
          WebFont.load({
            google: {
              families: ['Source Sans Pro:300,600,700']
            }
          });
        </script>
    ```

- **CSS Grid with Bootstrap**
    - Bootstrap CSS download and CSS reset setting: bootstrap.min.css
        - CSS Reset is done with bootstrap.min.css

        ```html
            <!--bootstrap CSS-->
            <link rel="stylesheet" href="css/bootstrap.min.css">
            <link rel="stylesheet" href="css/default.css">
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="js/main.js"></script>
            <!--higher priority, if the stylesheets come at last-->
        ```

    - **div.container > div.row > div.col-md-6 (6 column)**

        ```html
        <div class="container">
            <!--parents row > middel-device 6column * 2: div.row>div.col-md-6*2-->
            <div class="row">
                <div class="col-md-6">
                   <img src="images/server_img.png" alt="">
                </div>
                <div class="col-md-6">
                   <h2>Free SDD Cloud Hosting</h2>
                   <p class="main_tt">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
        	         <a href="" class="main_tt">Give me that free stuff</a> 
                </div>
             </div>
        </div>
        ```

    - CSS anmiation for **roatiation**

    ```css
    #map {margin-left: 70px; margin-top: 120px;}
    #radar {
        position: absolute; 
        top: 90px; 
        left: 109px;
        /*ANIMATION ROTATION FOR RADAR*/
        animation: rotation 10s infinite linear;
    }
    @keyframes rotation {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
    ```

    - **CSS Stripes with Transition**
        - CSS: Transition-delay: 0.1s to 1s can be good alternative instead of javascript

    ```css
    .stripes {display: flex;}
    .stripes .stripe {width: 10%; height: 0px;} /*ANIMATION HEIGHT 0 --> 512px */
    /*Transition-delay: 0.1s to 1s */
    #s1 {background: #2c2f36; }
    #s2 {background: #444850; }
    #s3 {background: #36383c; }
    #s4 {background: #1e2026; }
    #s5 {background: #444850; }
    #s6 {background: #2b2d30; }
    #s7 {background: #1e2026; }
    #s8 {background: #36383c; 
    #s9 {background: #444850; }
    #s10 {background: #2c2f36;}
    ```

- Scrolldown

    ```css
    /*CSS ANMIATION by ScrollDown*/
    .animate, .grow-img, .animate_down{ /*Javascipt */
        animation: fadeIn 1s forwards ease-in;
        transition: 2s ease-in-out; 
    }
    @keyframes fadeIn{
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    #phone {margin-top: 40px;}
    #phone.animate {transform: translateX(28em);}
    #monitor.animate {transform: translateX(16em);}

    .features .item img.grow-img {width: 169px; height:169px;}
    .stripes .stripe.animate_down {height: 512px;}
    ```

        **var $offset = 500;
        var $deviceOST = $device.offset().top - $offset;**

    ```jsx
    $(function(){  /*scroll down for monitor and phone animation fade in*/

        var $device = $('.control');
        var $features = $('.features');
        var $location = $('.location');

        **var $offset = 500;
        var $deviceOST = $device.offset().top - $offset;**
        var $featuresOST = $features.offset().top - $offset
        var $locationOST = $location.offset().top - $offset

        $(window).scroll(function(){
            if($(this).scrollTop() > $deviceOST){
                $device.find('img').addClass('animate')
            } 
            if($(this).scrollTop() > $featuresOST){
                $features.find('img').addClass('grow-img')
            } 
            if($(this).scrollTop() > $featuresOST){
                $features.find('h4').addClass('animate')
            } 
            if($(this).scrollTop() > $locationOST){

                //$location.find('.stripe').addClass('animate_down')
                /*ALTERNATIVE 1:
                setTimeout (function) {acutally to do --> $('#s1').addClass('animate_down');}, time);

                setTimeout(function(){ $('#s1').addClass('animate_down');}, 100);
                setTimeout(function(){ $('#s2').addClass('animate_down');}, 200);
                setTimeout(function(){ $('#s3').addClass('animate_down');}, 300);
                setTimeout(function(){ $('#s4').addClass('animate_down');}, 400);
                setTimeout(function(){ $('#s5').addClass('animate_down');}, 500);
                setTimeout(function(){ $('#s6').addClass('animate_down');}, 600);
                setTimeout(function(){ $('#s7').addClass('animate_down');}, 700);
                setTimeout(function(){ $('#s8').addClass('animate_down');}, 800);
                setTimeout(function(){ $('#s9').addClass('animate_down');}, 900);
                setTimeout(function(){ $('#s10').addClass('animate_down');}, 1000);
                */

                //ALTERNATIVE 2: EACH METHOD
                $('.stripe').each(function(idx){
                    var $this = $(this);
                    setTimeout(function(){ $this.addClass('animate_down');}, 100*idx);
                });
                }
            } 
           );
    });
    ```

- Waypoint

    : http://imakewebthings.com/waypoints

    1. download jquery.waypoints.min in js folder 
    2. Add Waypoint script in html

        ```html
        <!--WAYPOINTS
            <script src="js/jquery.waypoints.min.js"></script>
            -->
        ```

    3. writedown java script

        ```jsx
        $(function(){  /*scroll down for monitor and phone animation fade in*/

            var $device = $('.control');
            var $features = $('.features');
            var $location = $('.location');

            /*Waypoint basic setting with offset
            var waypoints = $('#handler-first').waypoint(function(direction) {
                notify(this.element.id + ' hit 25% from top of window') 
              }, {
                offset: '25%'
              })
              */
            var waypoints1 = $device.waypoint(function() {
                $device.find('img').addClass('animate');
              }, {
                offset: '50%'
              })
              var waypoints2 = $features.waypoint(function() {
                $features.find('img').addClass('grow-img');
                $features.find('h4').addClass('animate');
              }, {
                offset: '50%'
              })
              var waypoints3 = $location.waypoint(function() {
                    //ALTERNATIVE 2: EACH METHOD
                    $('.stripe').each(function(idx){
                        var $this = $(this);
                        setTimeout(function(){ $this.addClass('animate_down');}, 100*idx);
                    });
              }, {
                offset: '50%'
              })
        });
        ```

    - Scroll Trigger —> not many lines of java script, but easy to adjust

        :  https://terwanerik.github.io/ScrollTrigger/

        1. Download ScrollTrigger.min
        2. Add Scroll Triger in html 
        3. Add attribute **scroll-down** in html elements 

        ```html
        <!--Scrolltrigger-->
        <script src="js/ScrollTrigger.min.js"></script>

        <section class="control container" data-scroll>
        <section class="features" data-scroll>
        <section class="location" data-scroll >
        ```

        1. scroll trigger in js

        ```jsx
        $(function(){  /*scroll down for monitor and phone animation fade in*/
            var trigger = new ScrollTrigger.default({
                offset: {
                    x: 0,
                    y: 300
                    },
                trigger: {
                        // If the trigger should just work one time
                    once: true
                }
            });
        });
        ```

### Continued development

Moblie device friendly with media query

## Author

- Website - Min Park
- Github - [@mininpark](https://github.com/mininpark)
