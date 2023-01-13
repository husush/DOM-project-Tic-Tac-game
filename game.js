let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);

let currentPlayer = 'X';
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  winningCombination.forEach(function (combination) {
    let check = combination.every(
      (index) => cells[index].innerText.trim() == currentPlayer
    );
    if (check) {
      highlightCells(combination);
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (index) {
    cells[index].classList.add('highlight');
  });
}

cells.forEach(function (cell) {
  cell.addEventListener('click', function () {
    if (cell.innerText.trim() != '') return;
    checkWinner();
    cell.innerText = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  });
  console.log(cell);
});

console.log(cells);
