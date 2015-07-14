
// Create a onclick event to rotate the squares
  $(".pieceContainer" ).on( "click" , function() {
    $( this ).addClass( "flip" );
});

  $( ".pieceContainer" ).on( "click" , time );

  var timeKeeper;

  function time() {
    timeKeeper = setTimeout(compareFlipped, 500 );
  }

// Removes class to fire onclick event again
  // $(".pieceContainer").on( "mouseout" , function() {
  //       $( this ) .removeClass("flip");
  // });

  // using Math, chooses randomly how to set up board

  var cards = document.querySelectorAll(".pieceBack");

  var randomTracker = [];

  function randomCounter() {

    while(randomTracker.length < 10) {
      var randomNum = Math.floor((Math.random() * 10) + 1);
      var found = false;

      for(var i = 0; i < randomTracker.length; i++) {
        if (randomTracker[i] == randomNum) {found=true; break}
      }

      if (!found)randomTracker[randomTracker.length] = randomNum;
      }

  } // end of randomCounter

randomCounter();

function setSquare() {

  for(var i = 0; i < cards.length; i++ ) {
  var counter = 0;
    if (randomTracker.length == 0) {
      randomCounter();
    }

    counter = randomTracker.pop();
    cards[i].setAttribute( "data-id", counter);
  }
} // end setSquare

setSquare();

function compareFlipped() {
  clearTimeout(timeKeeper);

  var flipped = $( ".flip" );

  if(flipped.length == 2) {
    var flipOne = $( ".flip .pieceBack" ).eq(0).attr("data-id");

    var flipTwo = $( ".flip .pieceBack" ).eq(1).attr("data-id");

    if(flipOne == flipTwo) {
      $( ".flip" ).addClass( "stayFlipped" );
      $( ".pieceContainer" ).removeClass( "flip" );
    } else if (flipOne != flipTwo ) {
      $( ".pieceContainer" ).removeClass( "flip" );
    }
  }

} // end compareFlipped;



// When a player clicks on a square it stores what was clicked on
    // When two clicks happen, the getters are compared
    // if equal, squares are kept on class .flip

// When all squares are on .flip, player won the game
    // Have svgs pop out and spin?
