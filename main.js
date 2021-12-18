let content = document.querySelector(".content");
let gs1 = document.querySelector(".gs1");
let gs2 = document.querySelector(".gs2");
let gs3 = document.querySelector(".gs3");
let game = document.querySelector(".game");
let btn = document.querySelectorAll("button");
let [btn1, btn2, btn3] = btn;
let gameh1 = document.getElementById("game-h1");
let title = document.querySelector(".title");

let yourChoseShow = document.querySelector(".gs1 .chosen div");
let showResult = document.querySelector(".gs2 .chosen div span");
let AIChoseShow = document.querySelector(".gs3 .chosen div");

let yourScoreDisplay = document.querySelector(".gs1 .sec-title span");
let tiescoreDisplay = document.querySelector(".gs2 .sec-title span");
let AIScoreDisplay = document.querySelector(".gs3 .sec-title span");

let roundCounter = document.querySelector(".title p span");

// let choices = ["rock", "paper", "scissors"];
// let rn = Math.floor(Math.random() * 3);
// let computerChoice = choices[rn];

let gameResult = "";

let won = "you won!";
let lost = "you lost!";
let tie = "tie";

let counter = 0;
let yourScore = 0;
let AIScore = 0;
let tieScore = 0;
let roundNumber = 0;

roundCounter.innerHTML = roundNumber;
yourScoreDisplay.innerText = yourScore;
AIScoreDisplay.innerText = AIScore;
tiescoreDisplay.innerText = tieScore;

game.addEventListener("click", start);
function start(e) {
  let choices = ["rock", "paper", "scissors"];
  let rn = Math.floor(Math.random() * 3);
  let computerChoice = choices[rn];
  let times = [2000, 1000, 400, 560, 700, 1200, 200, 800];
  let timePick = Math.floor(Math.random() * times.length);
  if (e.target.classList.contains("paper-b")) {
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
    btn3.setAttribute("disabled", "");
    roundNumber++;
    showResult.innerHTML = ``;
    yourchose = "paper";
    yourChoseShow.innerHTML = `<i class="fas fa-hand-paper">`;
    let load = setInterval(() => {
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${
        choices[Math.floor(Math.random() * 3)]
      }">`;
    }, 50);
    setTimeout(() => {
      clearInterval(load);
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${computerChoice}">`;
    }, times[timePick]);
    ifWon();
    addScore();
    setTimeout(() => {
      if (gameResult === won) {
        showResult.style.color = "green";
      }
      if (gameResult === lost) {
        showResult.style.color = "red";
      }
      if (gameResult === tie) {
        showResult.style.color = "#ccc";
      }
      showResult.innerText = gameResult;
      update();
      btn1.removeAttribute("disabled");
      btn2.removeAttribute("disabled");
      btn3.removeAttribute("disabled");
      ifGameWon();
    }, times[timePick] + 200);

    //   end
  }

  if (e.target.classList.contains("rock-b")) {
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
    btn3.setAttribute("disabled", "");
    roundNumber++;
    showResult.innerHTML = ``;
    yourchose = "rock";
    yourChoseShow.innerHTML = `<i class="fas fa-hand-rock">`;
    let load = setInterval(() => {
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${
        choices[Math.floor(Math.random() * 3)]
      }">`;
    }, 50);
    setTimeout(() => {
      clearInterval(load);
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${computerChoice}">`;
    }, times[timePick]);
    ifWon();
    addScore();
    setTimeout(() => {
      if (gameResult === won) {
        showResult.style.color = "green";
      }
      if (gameResult === lost) {
        showResult.style.color = "red";
      }
      if (gameResult === tie) {
        showResult.style.color = "#ccc";
      }
      showResult.innerText = gameResult;
      update();
      btn1.removeAttribute("disabled");
      btn2.removeAttribute("disabled");
      btn3.removeAttribute("disabled");
      ifGameWon();
    }, times[timePick] + 200);
  }

  if (e.target.classList.contains("scissors-b")) {
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
    btn3.setAttribute("disabled", "");
    roundNumber++;
    showResult.innerHTML = ``;
    yourchose = "scissors";
    yourChoseShow.innerHTML = `<i class="fas fa-hand-scissors">`;
    let load = setInterval(() => {
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${
        choices[Math.floor(Math.random() * 3)]
      }">`;
    }, 50);
    setTimeout(() => {
      clearInterval(load);
      AIChoseShow.innerHTML = `<i class="fas fa-hand-${computerChoice}">`;
    }, times[timePick]);
    ifWon();
    addScore();
    setTimeout(() => {
      if (gameResult === won) {
        showResult.style.color = "green";
      }
      if (gameResult === lost) {
        showResult.style.color = "red";
      }
      if (gameResult === tie) {
        showResult.style.color = "#ccc";
      }
      showResult.innerText = gameResult;
      update();
      btn1.removeAttribute("disabled");
      btn2.removeAttribute("disabled");
      btn3.removeAttribute("disabled");
      ifGameWon();
    }, times[timePick] + 200);
  }

  // check win or lose
  function ifWon() {
    if (computerChoice === yourchose) {
      gameResult = tie;
    }
    if (yourchose === "paper") {
      if (computerChoice === "rock") {
        gameResult = won;
      }
      if (computerChoice === "scissors") {
        gameResult = lost;
      }
    }
    if (yourchose === "scissors") {
      if (computerChoice === "paper") {
        gameResult = won;
      }
      if (computerChoice === "rock") {
        gameResult = lost;
      }
    }
    if (yourchose === "rock") {
      if (computerChoice === "scissors") {
        gameResult = won;
      }
      if (computerChoice === "paper") {
        gameResult = lost;
      }
    }
  }
  //

  // if whole game won
  function ifGameWon() {
    if (yourScore === 3) {
      btn1.setAttribute("disabled", "");
      btn2.setAttribute("disabled", "");
      btn3.setAttribute("disabled", "");
      setTimeout(() => {
        gs1.classList.add("opacity");
        gs3.classList.add("opacity");
        gs2.innerHTML = `<h1 class:"now">You won !</h1>`;
        gs2.style.fontSize = "8rem";
        gs2.style.color = "green";
        gs2.style.width = "100%";
        gs2.style.height = "100vh";
        gs2.style.position = "relative";
        gs2.style.bottom = "10rem";
        gs2.style.justifyContent = "center";
        content.style.cursor = "context-menu";
        title.classList.add("opacity");
      }, 1000);
      window.addEventListener("click", () => {
        location.reload();
      });
      setTimeout(() => {
        let p = document.createElement("p");
        p.innerText = "click to reset";
        p.style.fontSize = "1.5rem";
        p.style.color = "#ccc";
        gs2.appendChild(p);
      }, 1300);
    }
    if (AIScore === 3) {
      btn1.setAttribute("disabled", "");
      btn2.setAttribute("disabled", "");
      btn3.setAttribute("disabled", "");
      setTimeout(() => {
        gs1.classList.add("opacity");
        gs3.classList.add("opacity");
        gs2.innerHTML = `<h1 class:"now">You lost !</h1>`;
        gs2.style.fontSize = "8rem";
        gs2.style.color = "red";
        gs2.style.width = "100%";
        gs2.style.height = "100vh";
        gs2.style.position = "relative";
        gs2.style.bottom = "10rem";
        gs2.style.justifyContent = "center";

        content.style.cursor = "context-menu";

        title.classList.add("opacity");
      }, 1000);
      window.addEventListener("click", () => {
        location.reload();
      });
      setTimeout(() => {
        let p = document.createElement("p");
        p.innerText = "click to reset";
        p.style.fontSize = "1.5rem";
        p.style.color = "#ccc";
        gs2.appendChild(p);
      }, 1300);
    }
    if (tieScore === 5) {
      btn1.setAttribute("disabled", "");
      btn2.setAttribute("disabled", "");
      btn3.setAttribute("disabled", "");
      setTimeout(() => {
        gs1.classList.add("opacity");
        gs3.classList.add("opacity");
        gs2.innerHTML = `<h1 class:"now">Tie</h1>`;
        gs2.style.fontSize = "8rem";
        gs2.style.color = "#ccc";
        gs2.style.width = "100%";
        gs2.style.height = "100vh";
        gs2.style.position = "relative";
        gs2.style.bottom = "10rem";
        gs2.style.justifyContent = "center";

        content.style.cursor = "context-menu";

        title.classList.add("opacity");
      }, 1000);
      window.addEventListener("click", () => {
        location.reload();
      });
      setTimeout(() => {
        let p = document.createElement("p");
        p.innerText = "click to reset";
        p.style.fontSize = "1.5rem";
        p.style.color = "#ccc";
        gs2.appendChild(p);
      }, 1300);
    }
  }
  //

  // add to scores
  function addScore() {
    if (gameResult === won) {
      yourScore++;
    }
    if (gameResult === lost) {
      AIScore++;
    }
    if (gameResult === tie) {
      tieScore++;
    }
  }

  // update
  function update() {
    yourScoreDisplay.innerText = yourScore;
    AIScoreDisplay.innerText = AIScore;
    tiescoreDisplay.innerText = tieScore;
    roundCounter.innerHTML = roundNumber;
  }
}
