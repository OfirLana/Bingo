var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי

function fill_cell() {
    for (var i = 1; i < cells.length; i++) {
        var cell = cells[i]
        cell.innerHTML = random_number;
    }
}
fill_cell()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

