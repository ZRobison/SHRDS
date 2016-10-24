var SHRView = function () {


    this.render = function (type) {
        var self = this;

        switch (type) {
            case 'WHR':
                getWHR();
                break;
            case 'WTR':
                getWTR();
                break;
            case 'WPR':
                getWPR();
                break;
            case 'ZWR':
                getZWR();
                break;
            case 'STR':
                getSTR();
                break;
            case 'LDR':
                getLDR();
                break;
            case 'RCR':
                getRCR();
                break;
            case 'OHR':
                getOHR();
                break;
            case 'REV':
                getREV();
                break;
            case 'SHR':
                getSHR();
                break;
        }
    }
}

function getWHR() {

    //title
    var header = "Wave Height Rating";

    var body =
        //body        
        "<div class='hazard'>WHR in Meters</div>" +
        "<select class='allRatingsPos' name='WHRForm'>" +
        "<option value='-1'>Select one</option>" +
        "<option value='0'>0 (Knee High)</option>" +
        "<option value='1'>Up to 0.5 (Knee High)</option>" +
        "<option value='2'>Up to 1.0 (Waist High)</option>" +
        "<option value='3'>Up to 1.5 (Head High)</option>" +
        "<option value='4'>Up to 2.0 (Head High)</option>" +
        "<option value='5'>Up to 2.5 (Overhead)</option>" +
        "<option value='6'>Up to 3.0 (Overhead)</option>" +
        "<option value='8'>Up to 3.5 (Double Overhead)</option>" +
        "<option value='10'>Up to 4.0 (Double Overhead)</option>" +
        "<option value='12'>Up to 4.5</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getWHRInfo()'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";
    console.log(app.loginData.pID);



    var footer =
        //footer
        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"WHR"' + ", " + getWHRvalue + ")'>NEXT</button> " +
        "<button type='button' class='exitButton'>EXIT</button>";



    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
    console.log("SHRFlag is " + app.SHRFlag);

    if (app.SHRFlag == 1) {
        $("select[name=WHRForm]").val(app.prevalingSHRData.SHR.pWTR);
    } else {
        $("select[name=WHRForm]").val(app.esSHRData.SHR.pWTR);
    }
};



function getWTR() {

    var header = "Wave Type Rating";

    var body =
        "<div class='hazard'>WTR</div>" +
        "<select class='allRatingsPos' name='WTRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>Surging</option>" +
        "<option value='1'>Spilling</option>" +
        "<option value='2'>Plunging</option>" +
        "<option value='4'>Plunging with Back-Blasting</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getWTRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =
        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"WTR"' + ", " + getWTRvalue + ")'>NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";



    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=WTRForm]").val(app.prevalingSHRData.SHR.pWTR);
    } else {
        $("select[name=WTRForm]").val(app.esSHRData.SHR.pWTR);
    }
}

function getWPR() {
    var header = "Wave Period Rating";

    var body =

        "<div class='hazard'>WPR</div>" +
        "<select class='allRatingsPos' name='WPRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>Long Period(>14secs)</option>" +
        "<option value='1'>Moderate Period(9-14secs)</option>" +
        "<option value='2'>Short Period(6-8 secs)</option>" +
        "<option value='3'>Extremely Short Period(<6 secs)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getWPRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";

    var footer =
        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"WPR"' + ", " + getWPRvalue + ")' >NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
    console.log(app.loginData.pID);
    console.log(app.SHRFlag);

    if (app.SHRFlag == 1) {
        $("select[name=WPRForm]").val(app.prevalingSHRData.SHR.pWPR);
    } else {
        $("select[name=WPRForm]").val(app.esSHRData.SHR.pWPR);
    }
}

function getZWR() {

    var header = "Zone Width Rating";

    var body =

        "<div class='hazard'>ZWR</div><select class='allRatingsPos' name='ZWRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>0</option>" +
        "<option value='1'>Up to 20</option>" +
        "<option value='2'>Up to 40</option>" +
        "<option value='3'>Up to 60</option>" +
        "<option value='4'>Up to 80</option>" +
        "<option value='5'>Up to 100</option>" +
        "<option value='6'>Up to 120</option>" +
        "<option value='7'>Up to 140</option>" +
        "<option value='8'>Up to 160</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getZWRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";

    var footer =
        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"ZWR"' + ", " + getZWRvalue + ")' >NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=ZWRForm]").val(app.prevalingSHRData.SHR.pZWR);
    } else {
        $("select[name=ZWRForm]").val(app.esSHRData.SHR.pZWR);
    }
}

function getSTR() {
    var header = "Surface Turbulence Rating";

    var body =

        "<select class='allRatingsPos' name='STRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>No chop (Glassy)</option>" +
        "<option value='1'>Light Chop (5-11 kts)</option>" +
        "<option value='2'>Moderate Chop (12-21 kts)</option>" +
        "<option value='3'>Excessive Chop (22-27 kts)</option>" +
        "<option value='4'>Extreme Chop (>27kts)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getSTRInfo()')></button>" +
        "<select class='allRatingsPos' name='STRCrossWavesForm'>" +
        "<option value='0' selected>No Cross Waves</option>" +
        "<option value='1'>Minor Cross Waves</option>" +
        "<option value='2'>Moderate Cross Waves</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getSTRCrossWavesInfo()')></button>" +
        "<div class='error'></div>" +
        "<div class='info'></div>";

    var footer =

        " <button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"STR"' + ", " + getSTRvalue + ")' >NEXT</button> " +
        "<button type='button' class='exitButton'>EXIT</button>";



    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=STRForm]").val(app.prevalingSHRData.SHR.pSTR);
        $("select[name=STRCrossWavesForm]").val(app.prevalingSHRData.SHR.pCrossWaves);
    } else {
        $("select[name=STRForm]").val(app.esSHRData.SHR.pSTR);
        $("select[name=STRCrossWavesForm]").val(app.esSHRData.SHR.pCrossWaves);
    }
}

function getLDR() {
    var header = "Littoral Drift Rating";

    var body =

        "<select class='allRatingsPos' name='LDRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>No Drag (0)</option>" +
        "<option value='1'>Low Drag (>40 secs)</option>" +
        "<option value='2'>Moderate Drag (20-40 secs)</option>" +
        "<option value='3'>Strong Drag (13-19 secs)</option>" +
        "<option value='4'>Very Strong Drag (<13 secs)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getLDRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =

        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"LDR"' + ", " + getLDRvalue + ")' >NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";



    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=LDRForm]").val(app.prevalingSHRData.SHR.pLDR);
    } else {
        $("select[name=LDRForm]").val(app.esSHRData.SHR.pLDR);
    }
}

function getRCR() {
    var header = "Rip Current Rating";

    var body =

        "<select class='allRatingsPos' name='RCRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>No Rips</option>" +
        "<option value='1'>Mild Rips (Swim against)</option>" +
        "<option value='2'>Mild to strong Rips (ONLY walk waist deep against)</option>" +
        "<option value='3'>Strong Rips (Cannot walk against)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getRCRInfo()')'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =

        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"RCR"' + ", " + getRCRvalue + ")' >NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=RCRForm]").val(app.prevalingSHRData.SHR.pRCR);
    } else {
        $("select[name=RCRForm]").val(app.esSHRData.SHR.pRCR);
    }
}

function getOHR() {
    var header = "Other Hazards Rating";

    var body =


        "<div class='hazard'>OHR: one for each extra hazard present</div><select class='allRatingsPos' name='OHRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>0</option>" +
        "<option value='1'>1</option>" +
        "<option value='2'>2</option>" +
        "<option value='3'>3</option>" +
        "<option value='4'>4</option>" +
        "<option value='5'>5</option>" +
        "<option value='6'>6</option>" +
        "<option value='7'>7</option>" +
        "<option value='8'>8</option>" +
        "<option value='9'>9</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getOHRInfo()'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =

        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"OHR"' + ", " + getOHRvalue + ")' >NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>";



    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=OHRForm]").val(app.prevalingSHRData.SHR.pOHR);
    } else {
        $("select[name=OHRForm]").val(app.esSHRData.SHR.pOHR);
    }
}

function getREV() {
    var header = "Review SHR";

    if (app.SHRFlag == 1) {
        var pWHR = app.prevalingSHRData.SHR.pWHR;
        var pWTR = app.prevalingSHRData.SHR.pWTR;
        var pWPR = app.prevalingSHRData.SHR.pWPR;
        var pZWR = app.prevalingSHRData.SHR.pZWR;
        var pSTR = app.prevalingSHRData.SHR.pSTR;
        var pCrossWaves = app.prevalingSHRData.SHR.pCrossWaves;
        var pLDR = app.prevalingSHRData.SHR.pLDR;
        var pRCR = app.prevalingSHRData.SHR.pRCR;
        var pOHR = app.prevalingSHRData.SHR.pOHR;
    } else {
        var pWHR = app.esSHRData.SHR.pWHR;
        var pWTR = app.esSHRData.SHR.pWTR;
        var pWPR = app.esSHRData.SHR.pWPR;
        var pZWR = app.esSHRData.SHR.pZWR;
        var pSTR = app.esSHRData.SHR.pSTR;
        var pCrossWaves = app.esSHRData.SHR.pCrossWaves;
        var pLDR = app.esSHRData.SHR.pLDR;
        var pRCR = app.esSHRData.SHR.pRCR;
        var pOHR = app.esSHRData.SHR.pOHR;
    }

    var body =

        "<div id='ratingsList'>" +
        "<ul>" +
        "<li>" +
        "WHR  " + WHRDescription(pWHR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getWHR()
        } + "," + getWHRvalue + ")'>Change</button>" +
        "</li><li>" +
        "WTR  " + WTRDescription(pWTR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getWTR()
        } + "," + getWTRvalue + ")'>Change</button>" +
        "</li><li>" +
        "WPR  " + WPRDescription(pWPR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getWPR()
        } + "," + getWPRvalue + ")'>Change</button>" +
        "</li><li>" +
        "ZWR  " + ZWRDescription(pZWR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getZWR()
        } + "," + getZWRvalue + ")'>Change</button>" +
        "</li><li>" +
        "STR  " + STRDescription(pSTR) + "  with " + STRCrossWaveDescription(pCrossWaves) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getSTR()
        } + "," + getSTRvalue + ")'>Change</button>" +
        "</li><li>" +
        "LDR  " + LDRDescription(pLDR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getLDR()
        } + "," + getLDRvalue + ")'>Change</button>" +
        "</li><li>" +
        "RCR  " + RCRDescription(pRCR) + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getRCR()
        } + "," + getRCRvalue + ")'>Change</button>" +
        "</li><li>" +
        "OHR  " + pOHR + " <button name='next' type='submit' class='blueButtons' onClick='nextRouteChange(" + function () {
            getOHR()
        } + "," + getOHRvalue + ")'>Change</button>" +
        "</li>"
    "</ul>" +
    "</div>";

    var footer =
        "<button name='next' type='submit' class='blueButtons' onClick='getSHR()'>SUBMIT</button>";
    "<button type='button' class='exitButton'>EXIT</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
    console.log(app.loginData.pID);
}

function getSHR() {

    var header = "Surf Hazard Rating";

    var body =

        "<p><div class='hazard'>The Surf Hazard Rating is:</div></p><br>" +
        "<div class= 'rating'></div>" +
		"<div class='history'>"+getSHRHistory()+"</div>";

    var footer =
        "<button type='submit' class='blueButtons' id='logoutButton' onclick = 'insertSHR()'>LOG OUT</button>";


    var shr = -1;
    if (app.SHRFlag == 1) {
        shr = app.prevalingSHRData.SHR.calculate();
    } else {
        shr = app.esSHRData.SHR.calculate();
    }
    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
    $(".rating").text(shr);

}
