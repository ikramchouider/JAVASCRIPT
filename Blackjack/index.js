let cards =[]
let sum =0
let hasblackjack = false 
let isalive = true 
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum")
let sumEl = document.querySelector("#sum")
let cardEl = document.querySelector("#card")
let user ={
    name: "ikram",
    cash :"$220"
}
let userEl = document.getElementById("user")
function getRandomCard(){
    let random =Math.floor( Math.random()*13)+1 
    if (random>10) {
        return (10)
    } else if (random == 1){
        return(11)
    }else {
        return ( random )
    }

}

 function startgame(){
    userEl.textContent = user.name + " " + user.cash
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards.push(firstcard) 
    cards.push(secondcard)
    sum = firstcard + secondcard
     rendergame()
 }
function rendergame() {
    sumEl.innerText = "Sum : " + sum
    cardEl.innerText =  "Cards : " 
    for ( let i=0;i<cards.length;i++){
        cardEl.innerText += " " + cards[i]

    }
    if (sum <= 20){
        message="Do you want to draw a new card?"
    }else if (sum == 21){
        message="Wohoo! you've got Blackjack!"
        hasblackjack = true
    } else {
        message= "you're out of the game !"
        isalive = false
    }
    messageEl.innerText = message 
}
  function newcard(){
    if (isalive === true && hasblackjack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card 
        rendergame()
    }
    else {
        if (isalive === false) {
            document.getElementById("error").innerText="You can't add new card you're dead "
        } else {
            document.getElementById("error").innerText="You can't add new card you have a blackjack "
        }
        
    }

  
  }
  