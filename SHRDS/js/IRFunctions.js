var numMin = 0;
var numMax = 20;

function add(param) {
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMax || num > numMax) {
        num = numMax;
    } else {
        document.getElementById("num" + param).innerHTML++;
    }
}

function minus(param) {
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMin || num < numMin) {
        num = numMin;
    } else {
        document.getElementById("num" + param).innerHTML--;
    }
}
