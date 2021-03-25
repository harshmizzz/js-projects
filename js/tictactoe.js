const X_class = "x";
const circle_Class = "circle";
const cellElements = document.querySelectorAll("[data-cell");
const winning_combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const board = document.getElementById("board");
const winningmessageelement = document.getElementById("winningMessage");
const winningmessagetextelement = document.querySelector(
  "[data-winning-message-text"
);
const restartbutton = document.getElementById("restartButton");
let circleturn;

startgame();

function handleclick(e) {
  const cell = e.target;
  const currentclass = circleturn ? circle_Class : X_class;

  placemark(cell, currentclass);
  if (checkwin(currentclass)) {
    endgame(false);
  } else if (isdraw()) {
    endgame(true);
  } else {
    swapturns();
    setboardhoverclass();
  }
  //placemark
  //chekforwin
  //checkfordraw
  //switch turns
}
function startgame() {
  circleturn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_class);
    cell.classList.remove(circle_Class);
    cell.removeEventListener("click", handleclick);
    cell.addEventListener("click", handleclick, { once: true });
  });
  setboardhoverclass();
  winningmessageelement.classList.remove("show");
}

function placemark(cell, currentclass) {
  cell.classList.add(currentclass);
}

function swapturns() {
  circleturn = !circleturn;
}

function setboardhoverclass() {
  board.classList.remove(X_class);
  board.classList.remove(circle_Class);
  if (circleturn) {
    board.classList.add(circle_Class);
  } else {
    board.classList.add(X_class);
  }
}

function checkwin(currentclass) {
  return winning_combination.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentclass);
    });
  });
}

function endgame(draw) {
  if (draw) {
    winningmessagetextelement.innerText = "Draw!";
  } else {
    winningmessagetextelement.innerText = `${circleturn ? "O's" : "X's"} Wins!`;
  }
  winningmessageelement.classList.add("show");
}

function isdraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_class) || cell.classList.contains(circle_Class)
    );
  });
}
restartbutton.addEventListener("click", startgame);
