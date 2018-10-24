window.dancers = [];
var hasDancer = false;
//init
$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

    if (hasDancer === false) {
      $('body').append('<embed src = \'audio/Digital_love.mp3\' autostart = \'true\' loop = \'true\' height = \'0\' width = \'0\'>');
      setInterval(function() { return changeLight(); }, 500);
    }

    hasDancer = true;

    $('img').on('click', function(event) {
      $(this).height($(this).height() * 1.05);
      $(this).width($(this).width() * 1.05);
    });
  });

  $('.lineUpButton').on('click', function(event) {
    var top = $( window ).height() / 2;
    var left = 20;
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top, left);
      left += window.dancers[i].$node.width();
    }
  });

  $('.interactButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i=i+2) {
      if (window.dancers[i+1]) {
        window.dancers[i].$node.stop();
        window.dancers[i+1].$node.stop();
        window.dancers[i].isLinedUp = true;
        window.dancers[i+1].isLinedUp = true;
        window.dancers[i].meet(window.dancers[i+1]);
        window.dancers[i+1].meet(window.dancers[i]);
      }
    }
  });

  $('.danceButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].isLinedUp = false;
      window.dancers[i].animate();
    }
  });



  var changeLight = function() {
    //change background lighting
    if ($('#light_div').hasClass('blink_screen')) {
      $( '#light_div' ).removeClass( 'blink_screen' ).addClass( 'blink_screen_green' );
    } else if ($('#light_div').hasClass('blink_screen_green')) {
      $('#light_div').removeClass( 'blink_screen_green' ).addClass( 'blink_screen_red' );
    } else if ($('#light_div').hasClass('blink_screen_red')) {
      $('#light_div').removeClass( 'blink_screen_red' ).addClass( 'blink_screen_blue' );
    } else {
      $('#light_div').removeClass( 'blink_screen_blue' ).addClass( 'blink_screen' );
    }
  };



});

