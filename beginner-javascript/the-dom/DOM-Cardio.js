/* eslint-disable */
const pageBody = document.body;

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.className = 'wrapper';

// put it into the body
pageBody.prepend(myDiv);

/* **************************************** */

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
for (let i = 0; i < 3; i++) {
  const myLi = document.createElement('li');
  myUl.appendChild(myLi);
}

myUl.children[0].textContent = 'One';
myUl.children[1].textContent = 'Two';
myUl.children[2].textContent = 'Three';

myDiv.append(myUl);

/* **************************************** */

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://www.petmd.com/sites/default/files/petmd-puppy-weight.jpg';
// set the width to 250
img.width = '250';
// add a class of cute
img.className = 'cute';
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.append(img);

/* **************************************** */

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myDiv2 = `
    <div>
        <p>Para 1</p>
        <p>Para 2</p>
    </div>    
`;

myUl.insertAdjacentHTML('beforebegin', myDiv2);

// add a class to the second paragraph called warning
const pagePs = document.querySelectorAll('p');
pagePs[1].className = 'Hello';
// remove the first paragraph
pagePs[0].remove();

/* **************************************** */

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const htmlString = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be 
            ${Math.round(age / 7)}. That would be a tall dog!</p>
            <button class='remove'>Remove</button>
        </div>
 `;
  return htmlString;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.className = 'cards';
// Have that function make 4 cards
const card1 = generatePlayerCard('Joe', 22, 70);
const card2 = generatePlayerCard('Scott', 42, 72);
const card3 = generatePlayerCard('Glora', 43, 66);
const card4 = generatePlayerCard('Skylar', 40, 64);

// append those cards to the div
cardDiv.innerHTML = card1 + card2 + card3 + card4;
// put the div into the DOM just before the wrapper element
pageBody.prepend(cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.remove');
buttons.forEach(button => {
    button.addEventListener('click', () => { removeCard(button); });
});

function removeCard(button) {
    button.parentNode.remove();
}