import "./styles.css";

// HTML ELEMENTS ----------------------
const cardSuits = ["♦", "♥", "♠", "♣"];
const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const number = document.getElementById("number");
const suitDiv = document.getElementsByClassName("suit_symbol");
const button = document.getElementById("btn");

// VARIABLES ----------------------
let producedNumber = null;
let producedSuit = null;
let historyArray = [];

// FUNCIONES ----------------------

// Produce Random Array Item
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Función generar un nuevo palo en las cartas
function generateRandomCardSuit() {
  let randomSymbol = randomItem(cardSuits);
  const isRed = randomSymbol === "♦" || randomSymbol === "♥";

  for (let i = 0; i < suitDiv.length; i++) {
    suitDiv[i].classList.toggle("card_suit--red", isRed);
    suitDiv[i].textContent = randomSymbol;
  }

  producedSuit = randomSymbol;
}

// Función generar un nuevo numero en las cartas
function randomNum() {
  const randomNumber = randomItem(cardValues);
  number.innerText = randomNumber;
  producedNumber = randomNumber;
}

// Función Combinar Número Aleatorio + Palo Aleatorio
function cardCombination(number, symbol) {
  return `${number} ${symbol}`;
}

// Función nueva carta
button.addEventListener("click", () => {
  generateRandomCardSuit();
  randomNum();
  let combinedCardValue = cardCombination(producedNumber, producedSuit);
  historyArray = [...historyArray, combinedCardValue];
});

// Al cargar la página
window.addEventListener("load", () => {
  generateRandomCardSuit();
  randomNum();
});
// Función para generar una nueva carta automáticamente cada 10 segundos
function generarCartaAutomaticamente() {
  // Lógica para generar la carta automáticamente
  generateRandomCardSuit();
  randomNum();
  let combinedCardValue = cardCombination(producedNumber, producedSuit);
  historyArray = [...historyArray, combinedCardValue];

  // Log para mostrar que se generó una carta automáticamente (puedes eliminarlo)
  console.log("Nueva carta generada automáticamente.");
}
