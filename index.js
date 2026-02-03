let firstcard = null
let secondcard = null
let hasBlackJack = null
let isAlive = null
let cards = []
let  msg = ""
let gamestarted = false
let sum = 0
let warn = 0


let alert_el = document.getElementById("alert")
let msg_el = document.getElementById("message")
let cards_el = document.getElementById("cards")
let sum_el = document.getElementById("sum")


let player = {
  name : "Thiru",
  chips : 1000
}


let player_el = document.getElementById("player")
let chips_el = document.getElementById("chips")


player_el.textContent = "Player : " + player.name
chips_el.textContent = "Balance : " + player.chips


function getrandomcard() {
  let randomnumber = Math.floor( Math.random() * 13 ) + 1
  if (randomnumber > 10) {
    return chooseace()
  } else if (randomnumber === 1) {
    return 11
  } else {
    return randomnumber
  }
}


function chooseace() {
  let acevalue = prompt("You got an Ace! Choose its value: 1 or 11")
  if (acevalue === "1") {
    return 1
  } else if (acevalue === "11") {
    return 11
  } else {
    alert("Invalid input! Defaulting to 11.")
    return 11
  }
}


function startgame() {
  if(warn === 0 && hasBlackJack === true) {
    alert_el.textContent = "You already won!, Do you wanna start a new game ?"
    warn=1
    return
  }
 
  warn=0
  gamestarted = true
  isAlive = true
  hasBlackJack = false

  firstcard = getrandomcard()
  secondcard = getrandomcard()
  cards = [firstcard, secondcard]
  sum = firstcard + secondcard

  alert_el.textContent = ""
  rendergame()
}


function printcards() {
  cards_el.textContent = "Cards: "
  for(let i=0; i<cards.length; i++){
    cards_el.textContent += cards[i] + " "
  }
}


function rendergame() {
  printcards()
  sum_el.textContent = "Sum: " + sum
    if (sum <= 20) {
      msg = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
      msg = "Wohoo! You've got Blackjack! 🥳"
      hasBlackJack = true
    } else {
      msg = "You're out of the game! 😞"
      isAlive = false
   }
   msg_el.textContent = msg
}


function newcard() {
  if(gamestarted===false){
    alert_el.textContent = "Start the game first!"
  } else if(isAlive === true && hasBlackJack === false){
    alert_el.textContent = ""
    let card = getrandomcard()
    sum += card
    cards.push(card)
    rendergame()
  } else if(isAlive === false) {
    alert_el.textContent = "Game over! Please start a new game!."
  }else if(hasBlackJack === true){
    alert_el.textContent = "Yayy, you won!"
  }
}