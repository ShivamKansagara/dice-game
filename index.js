let randomNumber = Math.floor(Math.random() * 6) + 1;
let one = "./images/dice" + randomNumber + ".png";
document.getElementById("one").setAttribute("src", one);

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let two = "./images/dice" + randomNumber1 + ".png";
document.getElementById("two").setAttribute("src", two);

if (randomNumber > randomNumber1) {
  document.getElementsByTagName("h1")[0].textContent = "Player 1 wins";
} else if (randomNumber < randomNumber1) {
  document.getElementsByTagName("h1")[0].textContent = "Player 2 wins";
} else if (randomNumber === randomNumber1) {
  document.getElementsByTagName("h1")[0].textContent = "OOPS there is a Tie";
}
