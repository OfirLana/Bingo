var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי

var match = [];
var array = [];

function fill_cell() {
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var random_number = getRandomInt(10);

        array.push(random_number);
        console.log(array)

        if(array[random_number] !== true) {
            cell.textContent = random_number;
        }

    }
}
fill_cell()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
game_button.addEventListener('click', show_number);
function show_number() {
    game_view.innerHTML = getRandomInt(100);

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];

        // var cell_style = window.getComputedStyle(cell);
        // if the numbers are Equal!!!!!! 
        if (game_view.innerHTML === cell.textContent) {
            // color the cell in blue
            cell.style.backgroundColor = "blue";
            // and color the font of the number in red;
            cell.style.color = "red";
            // push the correct number to the array
            match.push(game_view.textContent);
            // creating a variable name res (result)
            // take the array match and filter 
            // 
            var res = match.filter((num, i) => match.indexOf(num) == i);
            if(res.length === 9) {
                alert('you won!!!!!!')
            }
        }
    }
    console.log(res)

}


