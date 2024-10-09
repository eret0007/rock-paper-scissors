// random computer choice
//make one round
// make 5 rounds



     

let a = null
let comp = null



let compScore = 0
let userScore = 0


function round() {
     while (compScore  < 5 && userScore < 5){

          a = Math.random()* 3 
          if ( a <= 1 ) comp = "rock"
          else if (a <= 2) comp = "paper"
          else if (a <= 3) comp = "scis"

          let userChoice = prompt("Choose rock, paper or scis")
          if (userChoice != "rock" && userChoice != "paper" && userChoice != "scis") {
               console.log("You didnt pick  the right weapon")
               break
          }


          if ( comp == userChoice ) {
          console.log("its a tie!")
     }
     else if (comp == "scis" && userChoice == "rock" ) {
          console.log("computer wins, he picked scis you picked rock")
          compScore++
     }
     else if (comp == "paper" && userChoice == "rock" ) {
          console.log("user wins, you picked rock comp picked paper")
          userScore++
     }
     else if (comp == "scis" && userChoice == "paper" ) {
          console.log("computer wins he picked scis you picked paper")
          compScore++
         }
     else if (comp == "paper" && userChoice == "scis" ) {
          console.log("user wins you picked scis comp picked paper")
          userScore++
     }
     else if (comp == "rock" && userChoice == "paper" ) {
          console.log("user wins you picked paper comp picked rock")
          userScore++          
     }
     else if (comp == "rock" && userChoice == "scis" ) {
          console.log("computer wins he picked rock you picked scis")
          compScore++   
     }
     console.log(`the user score is ${userScore} and the computer score is  ${compScore}`)
  }
}

round()

