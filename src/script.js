const colors = ['black', 'red', 'green', 'blue'];
const colorPalette = document.querySelector('#color-palette');

//console.log(colorPalette);

const creatColorElement = (color) => {
    const newDiv = document.createElement('div')

    newDiv.className = 'color';
    newDiv.style.backgroundColor = color
    newDiv.addEventListener('click',(event) => {
        const previousSelectedColor = document.querySelector('.selected')
        previousSelectedColor.classList.toggle('selected'); // perde a classe selected

        event.target.classList.toggle('selected') // ganha a classe selected
    })
    
    return newDiv
}

// HOF -> higher order functions
const divColors = colors.map((color) => creatColorElement(color));
//console.log(divColors);
divColors.forEach(divColor => colorPalette.appendChild(divColor));
// appendChild

colorPalette.firstChild.classList.toggle('selected');

function createPixelElement() {
    const newDiv = document.createElement('div');

    newDiv.className = 'pixel';
    newDiv.addEventListener('click', (event) => {
        const selectedColor = document.querySelector('.selected')
        const color = selectedColor.style.backgroundColor;

        event.target.style.backgroundColor = color;
    })

    newDiv.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        event.target.style.backgroundColor = 'white'
    })

    return newDiv;
}

const createPixelRow = (size) => {
    const newRow = document.createElement('div');
    
    for(let i = 0; i < size; i += 1){
        newRow.appendChild(createPixelElement());
    }

    return newRow;
}

const createBoard = (size) => {
    const pixelBoard = document.getElementById('pixel-board');

    for(let i = 0; i < size; i += 1) {
        pixelBoard.appendChild(createPixelRow(size))
    }
}

createBoard(5);