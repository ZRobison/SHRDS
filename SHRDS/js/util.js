//Date and Tim Utilities

function getFormTime() {
    var date = new Date()
    if (app.SHRFlag == 2) {
        app.esSHRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
        console.log("setting time equal to: " + app.esSHRData.time);
    } else if (app.SHRFlag == 1) {
        app.prevalingSHRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

    } else {
        app.esIRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
    }
}

function getFormDate() {
    var d = new Date();
    if (app.SHRFlag == 2) {
        app.esSHRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    } else {
        app.esIRData.time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
