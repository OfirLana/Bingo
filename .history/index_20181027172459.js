var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי

function fill_cell() {
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var random_number = getRandomInt(10);
        cell.innerHTML = random_number;

    }
}
fill_cell