/*http://imakewebthings.com/waypoints/*/
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

