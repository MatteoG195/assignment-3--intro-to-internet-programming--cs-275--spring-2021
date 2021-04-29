

let updateCells = (newCell) => {
    let curCell = document.querySelector(`.flipped`);
    if (newCell == curCell)
    {
        newCell.classList.add(`standard`);
        newCell.classList.remove(`flipped`);
    }else{
        if(curCell != null)
        {
            curCell.classList.add(`standard`);
            curCell.classList.remove(`flipped`);
        }
        newCell.classList.add(`flipped`);
        newCell.classList.remove(`standard`);

    }
};

window.onload = () => {
    let cells = document.getElementsByTagName(`td`);
    for(let i = 0; i < cells.length;i++){
        cells[i].addEventListener(`click`, () => {updateCells(cells[i])});
    }
}

let spin = (i) => {
    let cells = document.getElementsByTagName(`td`);
    console.log(cells.length);

    cells[i].classList.remove('undone');
    cells[i].classList.add('clicked');
};

let smartSpin = (i) => {
    console.log(i);
    let newCell = cells[i];
    let curCell = document.querySelector(`.flipped`);
    if (newCell == curCell)
    {
        newCell.classList.add(`standard`);
        newCell.classList.remove(`flipped`);
    }else{
        if(curCell != null)
        {
            curCell.classList.add(`standard`);
            curCell.classList.remove(`flipped`);
        }
        newCell.classList.add(`flipped`);
        newCell.classList.remove(`standard`);

    }
}

let unspin = () => {
    let cells = document.getElementsByTagName(`td`);
    console.log(cells.length);

    cells[i].classList.remove('clicked');
    cells[i].classList.add(`undone`);
};
