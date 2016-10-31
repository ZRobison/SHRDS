// event specific functions 

function updateForm() {
    var score = $("select[name=ESFinalType]").val();
    if (score == 'Grand Final') {
        $(".removal").html(" ");
        if (app.SHRFlag == 2) {
            app.esSHRData.heat = 'N/A';
            app.esSHRData.round = 'N/A';
        } else {
            app.esIRData.heat = 'N/A';
            app.esIRData.round = 'N/A';
        }
    } else {
        $(".removal").html(
            "<div class='irTitles'>Heat:</div>" +
            "<select name='ESHeat'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='1'>Heat 1</option>" +
            "<option value='2'>Heat 2</option>" +
            "<option value='3'>Heat 3</option>" +
            "<option value='4'>Heat 4</option>" +
            "<option value='5'>Heat 5</option>" +
            "</select>" +

            "<div class='irTitles'>Round:</div>" +
            "<select name='ESRound'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='1'>Round 1</option>" +
            "<option value='2'>Round 2</option>" +
            "<option value='3'>Round 3</option>" +
            "<option value='4'>Round 4</option>" +
            "<option value='5'>Round 5</option>" +
            "</select>");
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
    } else {
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
        console.log("Setting ES IR Age Group");
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
        console.log("Setting ES IR HEat");
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
