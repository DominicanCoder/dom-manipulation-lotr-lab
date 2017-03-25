console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise', 'Sam', 'Gamgee',
  'Meriadoc', 'Merry','Brandybuck',
  'Peregrin','Pippin', 'Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
// This is the makeMiddleEarth function 
  
function makeMiddleEarth() {
      // create a section tag with an id of middle-earth
      var middleEarth = document.createElement('section');
      for(var i = 0; i < lands.length; i++){
        // add each land as an article tag
        var land = document.createElement('article');
        // inside each article tag include an h1 with the name of the land
        land.innerHTML = '<h1>' + lands[i] + '</h1>';
        middleEarth.appendChild(land);
      }
        // append middle-earth to your document body
      body.appendChild(middleEarth);
}


makeMiddleEarth();

// Part 2
makeHobbits();
function makeHobbits() {

    /*
    1. create a ul of the hobbits
    2. place this ul in the shire element
    */
    var hobbitList = document.createElement('ul');

    for(var i = 0; i < hobbits.length; i++){
      // give each hobbit a class of hobbit
      var hobbit = document.createElement('li');
      hobbit.innerText = hobbits[i];
      //console.log("ths is the current hobbit" + hobbits[i] + " with the current value of i being: " + i)
      hobbitList.appendChild(hobbit);
  }

    var theShire = document.getElementsByTagName('article')[0];
    theShire.appendChild(hobbitList);
}


keepItSecretKeepItSafe();

// Part 3
function keepItSecretKeepItSafe() {
  // create a div (html element)
  var theRing = document.createElement("div");
  //with an id of 'the-ring'
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  theRing.addEventListener("click", nazgulScreech);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var frodo = document.getElementsByTagName("li")[0];
  frodo.appendChild(theRing);

}



// Part 4

makeBuddies();
function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0, len = buddies.length; i < len; i++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // attach an unordered list of the 'buddies' in the aside
  aside.appendChild(buddyList);
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(aside);
}


// Part 5

beautifulStranger();

function beautifulStranger() {
  // get the 'Strider'
  var secondList = document.querySelectorAll("ul")[1];
  var strider = secondList.querySelectorAll("li")[3];
  strider.innerHTML = "Aragorn";
  // set his textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
