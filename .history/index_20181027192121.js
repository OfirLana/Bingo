var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי

function fill_cell() {
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var random_number = getRandomInt(100);
        cell.innerHTML = random_number;

    }
}
fill_cell()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
game_button.addEventListener('click', show_number);
function show_number() {
    var counter=0;
    game_view.innerHTML = getRandomInt(100);

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];

        var cell_style = window.getComputedStyle(cell);
        
        if (game_view.innerHTML === cell.innerHTML) {
            cell.style.backgroundColor = "blue";
            cell.style.color = "red";
            counter++;
        }

        console.dir(cell_style)
        var blue = "rgb(0, 0, 255)";
        if (cell_style.backgroundColor === blue) {
            alert("allah akbar");
        }
    }
}


