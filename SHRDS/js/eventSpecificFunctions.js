// event specific functions 

function getESValues() {
    var check = true;
    check = check && arenaES();
    check = check && ageES();
    check = check && heatES();
    check = check && roundES();
    check = check && finalES();
    check = check && craftTypeES();
    check = check && inOutES();
	check = check && genderES();
    check = check && beachLocationES();
    if (check) {
        getFormDate();
        getFormTime();
        routeIS();
    } else {
        console.log("error");
        $(".error").text("Please fill in all fields.");
    }
}

function arenaES() {
    var score = $("select[name=ESArena]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.arena = score;
        return true;
	} else {
        app.esIRData.arena = score;
        return true;
    }
} //added IR funtionality 

function ageES() {
    var score = $("select[name=ESAge]").val();
    if (score == '-1') {
        console.log("age error");
        return false;
        //if we have ES SHR
    } else if (app.SHRFlag == 2) {

        app.esSHRData.age = score;
        return true;
    }
    //Otherwise we have an ES IR
    else {
        app.esIRData.age = score;
        return true;
    }
}

function heatES() {
    var score = $("select[name=ESHeat]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.heat = score;
        return true;
    } else {
        app.esIRData.heat = score;
        return true;
    }
}

function roundES() {
    var score = $("select[name=ESRound]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.round = score;
        return true;
    } else {
        app.esIRData.round = score;
        return true;
    }
}

function finalES() {
    var score = $("select[name=ESFinalType]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.finalType = score;
        return true;
    } else {
        app.esIRData.finalType = score;
        return true;
    }
}

function craftTypeES() {
    var score = $("select[name=ESCraftType]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.craftType = score;
        return true;
    } else {
        app.esIRData.craftType = score;
        return true;
    }
}

function genderES() {
    var score = $("select[name=ESGender]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.gender = score;
		console.log(app.esSHRData.gender);
        return true;
    } else {
        app.esIRData.gender = score;
		console.log(app.esIRData.gender);
        return true;
    }
}

function inOutES() {
    var score = $("input[name=ESInOut]").val();
    if (score == "") {
        return false;
    }  else if (app.SHRFlag == 2) {
        app.esSHRData.inOrOut = score;
        return true;
	} else {
        app.esIRData.inOrOut = score;
        return true;
    }
} //added IR funtionality 

function beachLocationES() {
    var score = $("input[name=ESBeach]").val();
    if (score == "") {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.beach = score;
        return true;
    } else {
        app.esIRData.beach = score;
        return true;
    }
}

function getFormTime() {
    var date = new Date()
    if (app.SHRFlag == 2) {
        app.prevalingSHRData.time = date.getHours() + ":" + date.getMinutes();
    } else {
        app.esIRData.time = date.getHours() + ":" + date.getMinutes();
    }
}

function getFormDate() {
    var d = new Date();
    if (app.SHRFlag == 2) {
        app.prevalingSHRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    } else {
        app.esIRData.time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

}
