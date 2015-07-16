var timeKeeper;

var cards = document.querySelectorAll( ".pieceBack" );

var randomTracker = [];
// please remove empty lines and whitespace before submitting in the future.

// Create a onclick event to rotate the squares
$(".pieceContainer" ).on( "click" , function() {
  $( this ).addClass( "flip" ); //awesome use of classes here!!
});

$( ".pieceContainer" ).on( "click" , time );

$( "button" ).on( "click" , clear );


function time() {
  timeKeeper = setTimeout( compareFlipped , 500 );
}


// using Math, chooses randomly how to set up board


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
  cards[i].setAttribute( "data-id" , counter); // awesome use of data attributes!
} //remember to indent nested code blocks accordingly to increase readability
} // end setSquare

setSquare(); // puts background-image in squares

function compareFlipped() {
clearTimeout(timeKeeper);

var flipped = $( ".flip" );

if(flipped.length == 2) {
  var flipOne = $( ".flip .pieceBack" ).eq(0).attr( "data-id" );

  var flipTwo = $( ".flip .pieceBack" ).eq(1).attr( "data-id" );

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
  $( ".pieceContainer" ).addClass( "winner" );
  $( "#gameboard" ).prepend( "<h2>WINNER!!!!!!</h2>" );
  }
}

function clear() {
 $( ".pieceContainer").removeClass( "stayFlipped" );
 // you have uses this selecter a few times. Saving this to a variable will DRY up your code
 // and increase performance!
 $( ".pieceContainer").removeClass( "winner" );
 $( ".pieceBack" ).removeAttr( "data-id" );
 $( "h2" ).remove();
 randomCounter();
 setSquare();
}

// I really like how you structured your code for this game. You are now just a few steps away from 
// allowing users to choose how many cards they want and/or adding in a time limit for the game play.
