var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי


function fill_cells() {
    for (var i = 0; i < cells.length; i++) {
        var random_number = getRandomInt(10);
        var cell = cells[i];
        cell.innerHTML = random_number;
    }
}
fill_cells()

functionget(max) {

}

