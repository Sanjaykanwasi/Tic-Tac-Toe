// Button Selection
let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-game");
let mesContainer = document.querySelector(".msg-box");
let mess = document.querySelector(".win-msg");
// for chance of players x and o;
let chance_X = true;

//Winning Pattern in 2D array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//DRAW CONDITION
let count = 0;
let check = false;

const drawMsg = () => {
  mess.innerText = "Its a Draw!";
  mesContainer.classList.remove("hide");
  disBtns();
};

//Logic
btns.forEach((val) => {
  val.addEventListener("click", () => {
    if (chance_X === true) {
      val.innerText = "X";
      chance_X = false;
      count++;
    } else {
      val.innerText = "O";
      chance_X = true;
      count++;
    }
    val.disabled = true;
    checkWinner();
  });
});

//Function to disable buttons if someone wins
const disBtns = () => {
  for (let box of btns) {
    box.disabled = true;
  }
};

//Winning Alert
const winMsg = (winner) => {
  mess.innerText = `Congralutation, Player ${winner} Won the game`;
  mesContainer.classList.remove("hide");
  disBtns();
};

//Function to Enable buttons for new Game
const enableBtns = () => {
  for (let box of btns) {
    box.disabled = false;
    box.innerText = "";
  }
};

// FUnction for Game Reset
const resetGame = () => {
  chance_X = true;
  enableBtns();
  count == 0;
  check = false;
  mesContainer.classList.add("hide");
};

//Function to Check Winner
const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1 = btns[patterns[0]].innerText;
    let pos2 = btns[patterns[1]].innerText;
    let pos3 = btns[patterns[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winMsg(pos1);
        check = true;
      } else if (count == 9 && check === false) {
        drawMsg();
      }
    }
  }
};

//Restart Game
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
