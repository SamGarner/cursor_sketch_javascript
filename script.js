const sketchPad = document.querySelector(".sketch-pad");

// let gridCell = document.createElement(".div");
// gridCell.setAttribute('class', '.grid-cell')

// sketchPad.appendChild(gridCell)

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
}

generateGrid(16);