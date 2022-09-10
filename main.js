const random1 = Math.floor(Math.random() *6) + 1
// images/dice1.png up to images/dice6.png
const Diceimage = 'images/dice' + random1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', Diceimage)


const random2 = Math.floor(Math.random() *6) + 1
// images/dice1.png up to images/dice6.png
const Diceimage2 = 'images/dice' + random2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', Diceimage2)

// logic for winner
if (random1 > random2) {
    document.querySelector('h1').innerHTML='The Winner is user 1';
}

else if (random1 < random2) {
    document.querySelector('h1').innerHTML='The Winner is user 2';
}

else {
    document.querySelector('h1').innerHTML="Drow";
}

