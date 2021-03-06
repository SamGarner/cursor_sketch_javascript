const sketchPad = document.querySelector(".sketch-pad");
const resetButton = document.querySelector('.reset-button');
const sizeButtons = document.querySelectorAll('.size-button');
var gridSize = 20;

let generateGrid = gridWidth => { // not function
  let gridArea = gridWidth * gridWidth;
  // 1fr and 100fr produce the same thing since it's the ratio between them that matters
  sketchPad.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
  for (let cellCount = 1; cellCount <= gridArea; cellCount++) {  //semi colons
    let gridCell = document.createElement('div');
    // 1fr and 100fr produce the same thing since it's the ratio between them that matters
    // sketchPad.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    // sketchPad.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
    sketchPad.insertAdjacentElement('beforeend', gridCell);
  }
  
  addGridCellEventListeners();
}

let addGridCellEventListeners = () => {
  let gridCells = sketchPad.querySelectorAll('div');
  gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', colorCell));
}

let resetGrid = () => {
  let gridCells = sketchPad.querySelectorAll('div');
  gridCells.forEach(gridCell => {
    gridCell.style.backgroundColor = '#e6eaf0';
    gridCell.style.borderStyle = 'solid'; //style
  });
}

// let colorCell = () => {
//   // this.style.backgroundColor = 'blue';
//   this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
// }

function colorCell() {  // DOES NOT WORK WITH ARROW NOTATION: undefined 'this'
  this.style.backgroundColor = 'blue'; // `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.style.borderStyle = 'none';
}

function clearGrid() {
  let gridArray = Array.from(sketchPad.childNodes); //.forEach((node) => node.remove()); IE support forEach nodelist
  gridArray.forEach(node => node.remove());
}

let resizeGrid = (event) => {  // can be => function
  switch(event.target.dataset.size)
  {
    case '20': // must be strings
      gridSize = 20;
      break;
    case '30':
      gridSize = 30;
      break;
    case '50':
      gridSize = 50;
      break;
  };
  clearGrid();
  generateGrid(gridSize);
};
// event.target.dataset.size
// gridSize

generateGrid(gridSize);
resetButton.addEventListener('click', resetGrid); // no () on resetGrid
sizeButtons.forEach(sizeButton => sizeButton.addEventListener('click', resizeGrid));// resizeGrid))