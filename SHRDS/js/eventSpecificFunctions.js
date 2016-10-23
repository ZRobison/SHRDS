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
    check = check && beachLocationES();
    if (check) {
        app.esSHRData.time = getDateTime();
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
        } else {
            app.esSHRData.arena = score;
            return true;
        }
    }

    function ageES() {
        var score = $("select[name=ESAge]").val();
        if (score == '-1') {
            console.log("age error");
            return false;
        } else {
            app.esSHRData.age = score;
            return true;
        }
    }

    function heatES() {
        var score = $("select[name=ESHeat]").val();
        if (score == '-1') {
            return false;
        } else {
            app.esSHRData.heat = score;
            return true;
        }
    }

    function roundES() {
        var score = $("select[name=ESRound]").val();
        if (score == '-1') {
            return false;
        } else {
            app.esSHRData.round = score;
            return true;
        }
    }

    function finalES() {
        var score = $("select[name=ESFinalType]").val();
        if (score == '-1') {
            return false;
        } else {
            app.esSHRData.finalType = score;
            return true;
        }
    }

    function craftTypeES() {
        var score = $("select[name=ESCraftType]").val();
        if (score == '-1') {
            return false;
        } else {
            app.esSHRData.craftType = score;
            return true;
        }
    }

    function inOutES() {
        var score = $("input[name=ESInOut]").val();
        if (score == "") {
            return false;
        } else {
            app.esSHRData.inOrOut = score;
            return true;
        }
    }


    function beachLocationES() {
        var score = $("input[name=ESBeach]").val();
        if (score == "") {
            return false;
        } else {
            app.esSHRData.beach = score;
            return true;
        }
    }
