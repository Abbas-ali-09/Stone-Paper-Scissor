let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

// draw game function
const drawGame = () => {
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "grey";
};

// show winner function
const showWinner = (userWin, userchoice, computerchoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win ! Your ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You Lost ! ${computerchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

// generate computer choice functoon
const generateComputerChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return option[randomindex];
};

// play game function
const playGame = (userchoice) => {
  const computerchoice = generateComputerChoice();

  if (userchoice === computerchoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userchoice === "rock") {
      // scissors , paper
      userWin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock , scissors
      userWin = computerchoice === "scissors" ? false : true;
    } else {
      // paper , rock
      userWin = computerchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, computerchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    playGame(userchoice);
  });
});

let modebtn = document.querySelector("#btn");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currmode);
});
