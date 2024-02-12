let firstCard = 5
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum <= 20){
    message = "Do you want to draw a new card?"
}
else if (sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackjack = true
}
else{
    message = "You're out of the game!"
    isAlive = false
}