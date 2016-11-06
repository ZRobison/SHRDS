/**
 *
 * This methods gets all the data and checks that something has been filled in it.
 * If nothing has been filled in it return error, else continue onto SHR
 *
 */
function getPrevailingValues() {
    var check = true;
    check = check && beachValue();
    windDirection();
    windSpeed();
    tideTimes();
    tideHeights();
    if (check) {
        getFormTime();
        getFormDate();
        window.location.hash = "#WHR";
    } else {
        console.log("error");
        $(".error").text("Please fill beach and arena.");
    }
}


/**
 * Retrives the beach value and checks if has been filled. 
 *
 */
function beachValue() {
    var score = $("input[name=beachName]").val();
    if (score == '') {
        return false;
    } else {
        app.prevalingSHRData.beach = score;
        return true;
    }
}

/**
 * Retrives the wind direction value and checks if has been filled. 
 *
 */
function windDirection() {
    var score = $("select[name=windDirection]").val();
    if (score == '-1') {
        return false;
    } else {
        app.prevalingSHRData.windDirection = score;
        return true;
    }
}

/**
 * Retrives the wind speed value and checks if has been filled. 
 *
 */
function windSpeed() {
    var score = $("input[name=windSpeed]").val();
    if (score == "") {
        return false;
    } else {
        app.prevalingSHRData.windSpeed = score;
        return true;
    }
}

/**
 * Retrives the tide times value and checks if has been filled. 
 *
 */
function tideTimes() {
    var check = true;
    var score1 = $("input[name=tideTimeLow]").val();
    if (score1 == "") {
        check = check && false;
    } else {
        app.prevalingSHRData.tideTimeLow = score1;
        check = check && true;
    }

    var score2 = $("input[name=tideTimeHigh]").val();
    if (score2 == "") {
        check = check && false;
    } else {
        app.prevalingSHRData.tideTimeHigh = score2;
        check = check && true;
    }
    return check;
}

/**
 * Retrives the tide heights value and checks if has been filled. 
 *
 */
function tideHeights() {
    var check = true;
    var score1 = $("input[name=tideHieghtHigh]").val();
    if (score1 == "") {
        check = check && false;
    } else {
        app.prevalingSHRData.tideHieghtHigh = score1;
        check = check && true;
    }

    var score2 = $("input[name=tideHieghtLow]").val();
    if (score2 == "") {
        check = check && false;
    } else {
        app.prevalingSHRData.tideHieghtLow = score2;
        check = check && true;
    }
	
    return check;
}

function getFormTime() {
    var date = new Date()
    app.prevalingSHRData.time = date.getHours() + ":" + date.getMinutes();
}

function getFormDate() {
    var d = new Date();
    app.prevalingSHRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

}
