
  var concentration = {

  timeKeeper: undefined,

  cards: document.querySelectorAll(".pieceBack"),

  randomTracker: [],

  listen: function() {

  $(".pieceContainer" ).on( "click" , concentration.functions.addFlip );

  $( ".pieceContainer" ).on( "click" , concentration.functions.timer );

  $( "button" ).on( "click" , concentration.functions.clearBoard );
},  // End of listeners

  functions: {

  addFlip: function() {
    $( ".pieceContainer" ).addClass( "flip" );
  }, // End addFlip

  timer: function() {
    concentration.timeKeeper = setTimeout(concentration.functions.compareFlipped, 500 );
  }, // End addTimer

  // using Math, chooses randomly how to set up board
  randomCounter: function() {

    while(concentration.randomTracker.length < 10) {
      var randomNum = Math.floor((Math.random() * 10) + 1);
      var found = false;

      for(var i = 0; i < concentration.randomTracker.length; i++) {
        if (concentration.randomTracker[i] == randomNum) {
          found=true;
          break
        }
      }
      if (!found) {
        concentration.randomTracker[concentration.randomTracker.length] = randomNum;
      }
    }  // End while
  }, // end of randomCounter

// Sets squares to random number choosen in randomCounter
  setSquare: function() {

    for(var i = 0; i < concentration.cards.length; i++ ) {
    var counter = 0;
      if (concentration.randomTracker.length == 0) {
        concentration.functions.randomCounter();
      }

      counter = concentration.randomTracker.pop();
      concentration.cards[i].setAttribute( "data-id", counter);
    }
  }, // end setSquare

  compareFlipped: function() {
    clearTimeout(concentration.timeKeeper);

    var flipped = $( ".flip" );

    if(flipped.length == 2) {
      var flipOne = $( ".flip .pieceBack" ).eq(0).attr("data-id");

      var flipTwo = $( ".flip .pieceBack" ).eq(1).attr("data-id");

      if(flipOne == flipTwo) {
        $( ".flip" ).addClass( "stayFlipped" );
        $( ".pieceContainer" ).removeClass( "flip" );
        concentration.functions.winner();
      } else if (flipOne != flipTwo ) {
        $( ".pieceContainer" ).removeClass( "flip" );
      }
    }

  }, // end compareFlipped;

winner: function() {
  var winner = $( ".stayFlipped");

  if(winner.length == 20) {
    alert("Winner winner chicken dinner!");
  }
},  // End winner

 clearBoard: function () {
   $( ".pieceContainer").removeClass( "stayFlipped" );
   $( ".pieceBack" ).removeAttr("data-id");
   concentration.functions.randomCounter();
   concentration.functions.setSquare();
 } // END clearBoard


}  // End of functions object

}; // End of concentration object


concentration.functions.randomCounter();
concentration.functions.setSquare();
concentration.listen();
