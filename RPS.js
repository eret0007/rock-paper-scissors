// random computer choice
//make one round
// make 5 rounds
let userScore = 0
let compScore = 0



let userChoice = ""
let compChoice = null
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors= document.querySelector("#scissors")
const btn = document.querySelector("#btn")


const text = document.querySelector("#text")
const winnerText = document.querySelector("#u")    
    
     const checkWinner = () => {
          if (userScore >= 5) {winnerText.textContent = "YOU WONNNN!!!! WITH FIVE POINTS"
               rock.removeEventListener("click", userRock )
               paper.removeEventListener("click",userPaper )
               scissors.removeEventListener("click", userScissors )
          }
          else if (compScore >= 5) {winnerText.textContent = "YOU LOST :((( AGAINST THE COMPUTER WHO HAS 5 POINTS"
               rock.removeEventListener("click", userRock )
               paper.removeEventListener("click",userPaper )
               scissors.removeEventListener("click", userScissors )
          }

     }
       
     
     
     const userRock = function () {
          userChoice = "rock"
          
          a = Math.random( ) * 3
               if (a <= 1) comp = "rock"
               else if (a <= 2) comp = "paper"
               else comp = "scissors"
               
               if (comp == "scissors") {text.textContent = "The computer picked scissors, you WON!!!!!" 
                    userScore++
                    console.log(userScore, compScore) 
                   
               }
               else if (comp == "rock") {text.textContent = "You both picked rock, its a draw"
                    console.log(userScore, compScore)  
                    
               }
             else if (comp == "paper") {text.textContent = "The computer picked a paper, lost :( "
               compScore++
               
               console.log(userScore, compScore)
               
          }

          checkWinner()
     }
     const userPaper = function () {
          userChoice = "paper"
          
          a = Math.random( ) * 3
               if (a <= 1) comp = "rock"
               else if (a <= 2) comp = "paper"
               else comp = "scissors"
          

               if (comp == "scissors") {text.textContent = "The computer picked scissors, you lost :("
                    compScore++ 
                    console.log(userScore, compScore)
               }
               else if (comp == "rock") {text.textContent = "The computer picked a rock, you WON!!!!"
                    userScore++ 
                    console.log(userScore, compScore)
               }
             else if (comp == "paper") {text.textContent = "You both picked paper, its a tie"
               
               console.log(userScore, compScore)
             }
                                 
             checkWinner()
     }
     const userScissors = function () {
          userChoice = "scissors"
          
          a = Math.random( ) * 3
               if (a <= 1) comp = "rock"
               else if (a <= 2) comp = "paper"
               else comp = "scissors"
              
              
               if (comp == "scissors") {text.textContent = "You both picked scissors, its a draw"
                    console.log(userScore, compScore)
                    checkWinner()
               }
               else if (comp == "rock") {text.textContent = "The computer picked a rock, you LOST :( "
                    compScore++
                    console.log(userScore, compScore)
                    checkWinner()
               }

             else if (comp == "paper") {text.textContent = "The computer picked a paper, you WON!!!!!"
               userScore++
               console.log(userScore, compScore)
               checkWinner()
             }

               
             checkWinner()
               
     
     }
     
     
     
     rock.addEventListener("click", userRock )
     paper.addEventListener("click",userPaper )
     scissors.addEventListener("click", userScissors )




   
 

































/*let a = null
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

*/