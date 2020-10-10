/*$(function() {
  // Cache the Window object
  var $window = $(window);

  //if($window.width >= 500px) {

    // Parallax Backgrounds
    // Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

    $('section[data-type="background"][data-speed]').each(function(){
      var $bgobj = $(this); // Assigning the object

      $window.scroll(function() {

        // Scroll the background at var speed
        // The yPos is a negative value because it's scrolling up
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));

        // Final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });

      }); // end window scroll
    });

  //}

  $window.on('load', function() {
    $window.trigger('scroll');
  });

});*/

/*$(function() {

  $('.target-eagle').on('mouseenter', function() {
    var position = $(this).position();
    console.log(position);
    console.log('left: ' + position.left + ", top: " + position.top);

    console.log('eagle left: ' + $('.eagle').position().left + ", top: " + $('.eagle').position().top);

    var centerX = position.left + (parseInt($(this).width()) / 2);
    var centerY = position.top + (parseInt($(this).height()) / 2);
    console.log('x: ' + centerX + ', y: ' + centerY);

    var eaglePos = $('.eagle').position();
    var eagleCenterX = eaglePos.left + (parseInt($('.eagle').width()) / 2);
    var eagleCenterY = eaglePos.top + (parseInt($('.eagle').height()) / 2);
    console.log('eagleX: ' + eagleCenterX + ', eagleY: ' + eagleCenterY);

    var quarter;

    if(centerX >= eagleCenterX) {
      if(centerY >= eagleCenterY) {
        quarter = 2;
      } else {
        quarter = 1;
      }
    } else {
      if(centerY >= eagleCenterY) {
        quarter = 3;
      } else {
        quarter = 4;
      }
    }

    var deltaX = Math.abs(centerX - eagleCenterX);
    var deltaY = Math.abs(centerY - eagleCenterY);
    console.log('deltaX:' + deltaX + ', deltaY: ' + deltaY);


    function radians(degrees) {
      return degrees * Math.PI / 180.0;
    }

    function degrees(radians) {
      return radians * 180.0 / Math.PI;
    }

    var angle = 0.0;

    switch(quarter) {
      case 1:
        angle += 0.0 + degrees(Math.atan(deltaX / deltaY));
        break;
      case 2:
        angle += 90.0 + degrees(Math.atan(deltaY / deltaX));
        break;
      case 3:
        angle += 180.0 + degrees(Math.atan(deltaX / deltaY));
        break;
      case 4:
        angle += 270.0 + degrees(Math.atan(deltaY / deltaX));
        break;
    }


    //var angle = 180.0;
    //var angle = 180.0 + degrees(Math.atan(deltaX / deltaY));
    console.log(angle);




    $('.eagle').css('transform', 'rotate(' + angle + 'deg)');
    console.log(angle);

  });
});*/
