let choices = ['snake', 'water', 'gun']
do{

let pcChoice = choices[Math.floor(Math.random() * 3)]
let userInput = prompt("Enter 'snake' 'water' or 'gun'")
if (userInput === pcChoice) {
    window.confirm("You won!")
}
else if (userInput === 'snake') {
    if (pcChoice === 'water' || pcChoice === 'gun') {
        window.confirm("Computer won!")
    }
}

else if (userInput === 'water') {
    if (pcChoice === 'snake' || pcChoice === 'gun') {
        window.confirm("Computer won!")
    }
}

else if (userInput === 'gun') {
    if (pcChoice === 'snake' || pcChoice === 'water') {
        window.confirm("Computer won!")
    }
}
let playAgain = confirm("Do you want to play again")
if(!playAgain){
    break;
}
} while(true)