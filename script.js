const sketchPad = document.querySelector(".sketch-pad");

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

// let colorCell = () => {
//   // this.style.backgroundColor = 'blue';
//   this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
// }

function colorCell() {  // DOES NOT WORK WITH ARROW NOTATION: undefined 'this'
  this.style.backgroundColor = 'blue' // `hsl(${Math.random() * 360}, 100%, 50%)`;
}

generateGrid(16);