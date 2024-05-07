
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');


let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

const increaseWidth = () => {
  itemOne.style.width = '450px'
};
itemOne.addEventListener('mouseover' , increaseWidth);
function changeBackground() {
  itemTwo.style.backgroundColor = 'green'
};
itemTwo.addEventListener('mouseup' ,changeBackground);

const changeText = function() {
  itemThree.innerHTML='The mouse has left the element';
}

itemThree.onmouseout=changeText;

const showItem = () => {
  itemFive.style.display = 'block';
};

itemFour.addEventListener('mousedown',showItem);
