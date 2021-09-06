$(function(){  /*scroll down for monitor and phone animation fade in*/

    var $device = $('.control');
    var $features = $('.features');
    var $location = $('.location');

    var $offset = 500;
    var $deviceOST = $device.offset().top - $offset;
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
            //setTimeout (function) {acutally to do --> $('#s1').addClass('animate_down');}, time);
 
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