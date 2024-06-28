// 1. print all even number from 0 to 100 

// for (let num = 0; num <= 100; num++){
//     if (num % 2 == 0){
//         console.log("num = ", num);
//     }
// }

// 2. create a game you start with any random game number. ask the user to keep guessing the game number untill the user enters correct value.

let gameNum = 25;
let userNum = prompt("guess the game number : ");

while (userNum !== gameNum){
    userNum = prompt("you entered wrong number , guess again : ");
}

console.log("congratulation, you entered the right number");