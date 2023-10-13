
var computer_choice = "";
var user_choice = "";
document.getElementById("submit-btn").addEventListener("click", function(event){
    user_choice = document.getElementById("user-input").value;
    if(user_choice == "heads"){
        document.querySelectorAll(".coin")[0].setAttribute("src", "./images/head.png");
    
    }
    else{
        document.querySelectorAll(".coin")[0].setAttribute("src", "./images/tail.png");
    }
    
    var computer_choice = Math.random();
    computer_choice *=2 ;
    computer_choice = Math.ceil(computer_choice);
    
    var coin_choice = "";
    
    if(computer_choice == 1){
        coin_choice = "heads";
        document.querySelectorAll(".coin")[1].setAttribute("src", "./images/head.png");
    }
    
    else{
        coin_choice = "tails";
        document.querySelectorAll(".coin")[1].setAttribute("src", "./images/tail.png");
    }
    if(user_choice == coin_choice){
        document.getElementById("result").innerText = "You Win!!";
    }
    else{
        document.getElementById("result").innerText = "You Loose!!";
    }
});
// if(user_choice == "heads"){
//     document.querySelectorAll(".coin")[0].setAttribute("src", "./images/head.png");

// }
// else{
//     document.querySelectorAll(".coin")[0].setAttribute("src", "./images/tail.png");
// }

// var computer_choice = Math.random();
// computer_choice *=2 ;
// computer_choice = Math.ceil(computer_choice);

// var coin_choice = "";

// if(computer_choice == 1){
//     coin_choice = "heads";
//     document.querySelectorAll(".coin")[1].setAttribute("src", "./images/head.png");
// }

// else{
//     coin_choice = "tails";
//     document.querySelectorAll(".coin")[1].setAttribute("src", "./images/tail.png");
// }









































// var user_choice = prompt("Enter your choice heads/tails");
// var user_choice = "";
// var computer_coin = "";
// document.getElementById("submit-btn").addEventListener("click", function(event){
//     user_choice = document.getElementById("user-input").value;
// }
// );
// if(user_choice == "heads"  || user_choice == "tails"){
//     var computer_choice = Math.random();
//     computer_choice *= 2;
//     computer_choice = Math.ceil(computer_choice);
//     if(computer_choice === 1){
//         computer_coin = "heads";
//     }
//     else{
//         computer_coin = "tails";
//     }
// }
// else{
//     console.log(user_choice);
//     console.log("Invalid input!");
// }


// var computer_choice = Math.random();
// computer_choice *= 2;
// computer_choice = Math.ceil(computer_choice);
// computer_choice 1 -> heads and computer_choice 2 -> tails

// console.log(computer_choice === user_choice);
// if(user_choice.toLowerCase() === computer_choice){
//     console.log("win!!");
// }
// else{
//     console.log("loose!!");
// }
// if(computer_choice == 1){
//     document.getElementById("coin").setAttribute("src", "./images/head.png");
// }

// else{
//     document.getElementById("coin").setAttribute("src", "./images/tail.png");
// }
// document.getElementById("user-choice").innerText = "Your choice " + user_choice;

// if(computer_choice == 1 && user_choice == 'heads' ){

//     document.getElementById("result").innerText = "You won!!";
// }
// else if(computer_choice == 2 && user_choice == 'tails'){
//     document.getElementById("result").innerText = "You won!!";
// }
// else{
//     document.getElementById("result").innerText = "You Loose!!";
// }
