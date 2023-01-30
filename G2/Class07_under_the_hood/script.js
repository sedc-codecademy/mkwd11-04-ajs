

//random number 1 do 1000 deka ima na kraj + 1 inace ke bese 0-999
const randomNumber = Math.floor(Math.random() * 1000) + 1;

//50% chance true ili false da se napravi asign
const randomChance = Math.random() < 0.5;

//funkcija koja sto vraka 50/50 true ili false
function randomChanceFunction() {
    return Math.random() < 0.5;
}

//body tagot
const doc = document.getElementsByTagName('body')[0];

//niza so boi, 
// #00ffff vo prevod 0 crvena, 255 zelena, 255 sina

const arrayWithColors = ['red', 'blue', '#00ffff', 'rgb(255,255,255)'];

//funkcija sto ke ni vrati random broj od 0-255
function r() {
    return Math.floor(Math.random() * 256)
}

//funkcija sto ke ni vrati random string so boja za CSS format
function randomColor() {
    return `rgb(${r()}, ${r()}, ${r()})`
}

//hexadecimalna vrednost konverzija od broj
const number = 255;
const hex = number.toString(16);


//random element od niza
const randomArrayElementIndex = Math.floor(Math.random() * arrayWithColors.length)

//sekoj reload na page ova ke ni dava random boja na pozadina i random boja na text
doc.style.backgroundColor = randomColor();
doc.style.color = randomColor();
