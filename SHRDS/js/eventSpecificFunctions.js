// event specific functions 

function updateForm() {
    var score = $("select[name=ESFinalType]").val();
    if (score == 'Grand Final') {
        $(".disapear").html(" ");
        if (app.SHRFlag == 2) {
            app.esSHRData.heat = 'N/A';
            app.esSHRData.round = 'N/A';
        } else {
            app.esIRData.heat = 'N/A';
            app.esIRData.round = 'N/A';
        }
    } else {
        $(".disapear").html(
             "<div class='irTitles '>Heat:</div>" +
            "<input type = 'text' name='ESHeat'>" +
            "<div class='irTitles'>Round:</div>" +
            "<input type = 'text' name='ESRound'>" +
            "</div>")
        if (app.SHRFlag == 2) {
            app.esSHRData.heat = '-1';
            app.esSHRData.round = '-1';
        } else {
            app.esIRData.heat = '-1';
            app.esIRData.round = '-1';
        }
    }
}


function getESValues() {
    var check = true;
    var heat = $("input[name=ESHeat]").val();
    var round = $("input[name=ESRound]").val();
    check = check && arenaES();
    check = check && ageES();
    check = check && finalES();
    var score = $("select[name=ESFinalType]").val();
    if (score != 'Grand Final') {
        check = check && heatES();
        check = check && roundES();
    }
    check = check && craftTypeES();
    check = check && inOutES();
    check = check && genderES();
    check = check && beachLocationES();
    if (check) {
        getFormDate();
        getFormTime();
        routeIS();
    } else if (!verifyNonNumericCharacters(heat) || !verifyNonNumericCharacters(round)) {
        $(".error").text("Only numerical digits can be placed in heat and round");
    } else {
        $(".error").text("Please fill in all fields.");
    }
}

function arenaES() {
    var score = $("select[name=ESArena]").val();
    if (score == '-1') {
        return false;
    } else if (app.SHRFlag == 2) {
        console.log("Setting arean = " + score);
        app.esSHRData.arena = score;
        return true;
    } else {
        console.log("Setting arean = " + score);
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
        console.log("Setting ES IR Age Group");
        app.esIRData.age = score;
        return true;
    }
}

function heatES() {
    var score = $("input[name=ESHeat]").val();
    if (score == '-1') {
        return false;
    } else if (!verifyNonNumericCharacters(score)) {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.heat = score;
        return true;
    } else {
        console.log("Setting ES IR HEat");
        app.esIRData.heat = score;
        return true;
    }
}

function roundES() {
    var score = $("input[name=ESRound]").val();
    if (score == '-1') {
        return false;
    } else if (!verifyNonNumericCharacters(score)) {
        return false;
    } else if (app.SHRFlag == 2) {
        app.esSHRData.round = score;
        return true;
    } else {
        console.log("Setting ES IR round");
        app.esIRData.round = score;
        return true;
    }
}

function finalES() {
    var score = $("select[name=ESFinalType]").val();
    console.log(score);
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
        console.log("Setting ES IR Round");
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
    } else if (app.SHRFlag == 2) {
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
