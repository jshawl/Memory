
// Create a onclick event to rotate the squares
  $(".pieceContainer" ).on( "click" , function() {
    $( this ).addClass( "flip" );
});

  $( ".pieceContainer" ).on( "click" , time );

  $( "button" ).on( "click" , clear );

  var timeKeeper;

  function time() {
    timeKeeper = setTimeout(compareFlipped, 500 );
  }


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

randomCounter();  // set randomTracker to mix up square data-ids

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

setSquare(); // puts background-image in squares

function compareFlipped() {
  clearTimeout(timeKeeper);

  var flipped = $( ".flip" );

  if(flipped.length == 2) {
    var flipOne = $( ".flip .pieceBack" ).eq(0).attr("data-id");

    var flipTwo = $( ".flip .pieceBack" ).eq(1).attr("data-id");

    if(flipOne == flipTwo) {
      $( ".flip" ).addClass( "stayFlipped" );
      $( ".pieceContainer" ).removeClass( "flip" );
      winner();
    } else if (flipOne != flipTwo ) {
      $( ".pieceContainer" ).removeClass( "flip" );
    }
  }

} // end compareFlipped;

function winner() {
  var winner = $( ".stayFlipped");

  if(winner.length == 20) {
    alert("Winner winner chicken dinner!");
  }
}
 function clear() {
   $( ".pieceContainer").removeClass( "stayFlipped" );
   $( ".pieceBack" ).removeAttr("data-id");
   randomCounter();
   setSquare();
 }

// When all squares are on .flip, player won the game
    // Have svgs pop out and spin?
