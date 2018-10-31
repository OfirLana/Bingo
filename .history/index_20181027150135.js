var cells = document.querySelectorAll('.currSquare');
//לוקח את כל התאים בטבלה
var game_button = document.querySelector('.game-button');
//כפתור שמייצר מספר רנדומלי
var game_view = document.querySelector('.game-view');
// המיקום שמוצג המספר הרנדומלי



function fill_cells() {
    // לופ שרץ עד סוף אורך התאים
    for (var i = 0; i < cells.length; i++) {
        // משתנה בשם מספר רנדומלי אשר שווה ל
        // getrandomint
        var random_number = getRandomInt(10);
        // משתנה בשם תא אשר שווה לאורך כל המספרים בתאים
        var cell = cells[i];
        // כל המספרים בתאים בתוך הדף שווים למספר רנדומלי (max)
        cell.innerHTML = random_number;

    }


}
// הפעלת הפונקציה
fill_cells()
/*
פונקציה עם פרמטר בשם max 
כאשר היא מחזירה מספר שלם בתוך ה max*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// הוספת קליק לכפתור שמייצר מספרים
// ובתוכו פונקציה בשם הראה מספר
game_button.addEventListener('click', show_number);

// מטרת הפונקציה שהכפתור בעזרת לחיצה עליו יראה מספר רנדומלי בתוך הדף
// אותו אנחנו מגדירים בעזרת הפונקציה הקודמת של 
// getrandomint
function show_number() {
    game_view.innerHTML = getRandomInt(10);

    // לופ שרץ עד סוף אורך התאים בתוך הפונקציה של הראה מספר
    for (var i = 0; i < cells.length; i++) {
        // הכנסת כל מספר בלופ בתוך משתנה בשם תא
        var cell = cells[i];
        /*
        משפט תנאי שאומר
        ברגע שהמספר המוצג בתוך הדף שווה למספר שנמצא בתא
        תצבע לי את התא בצבע לבן ורקע כחול
*/
        if (game_view.innerHTML === cell.innerHTML) {
            cell.style.color = "white";
            cell.style.backgroundColor = "blue";

        }

    }
}



