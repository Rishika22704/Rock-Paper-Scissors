let options=document.querySelectorAll(".option");
let msg=document.querySelector("#msg");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#computer-score");
let emojis=document.querySelectorAll(".emoji");
let userScore=0;
let compScore=0;

emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        emojis.forEach((e) =>
            e.classList.remove("active")
        );
        emoji.classList.add("active");
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        let userChoice=option.getAttribute("id");
        playGame(userChoice);
    })
})

let playGame =(userChoice) =>{
    // Generate computer choice
    let compChoice = genComputerChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === "paper"){
            // scissors,rock
            userWin = compChoice === "scissors" ? false : true; 
        }
        else if( userChoice == "rock"){
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else{
            // rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You are the Winner, Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        cScore.innerText = compScore; 
        msg.innerText = `You lose the game, ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }

}

let drawGame = () =>{
    msg.innerText = "The Game was Draw, Play again";
    msg.style.backgroundColor = "#264653"; 
    msg.style.color ="white";
}

let genComputerChoice = () =>{
    let choices=["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

