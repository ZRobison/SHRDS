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


    var footer =
        //footer
        "<button type='submit' class='blueButtons' onClick='getWHRvalue()'>NEXT</button> " +
        "<button type='button' class='exitButton'>EXIT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

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
        "<button type='submit' class='blueButtons' onClick='getWTRvalue()'>NEXT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;


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

        "<button type='submit' class='blueButtons' onClick='getWPRvalue()' >NEXT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

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

        "<button type='submit' class='blueButtons' onClick='getZWRvalue()' >NEXT</button>"+
		"<button type='button' class='exitButton'>EXIT</button>" ;


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
        "<div class='error'></div>" +
        "<div class='info'></div>" +

        "<br>" +
        "<br>" +
        "<br>" +

        "<p>Cross Waves: form at random angles to the primary swell direction due to local storms or reflection of the primary swell.</p>" +
        "<p>Select minor or moderate if Cross Waves are present.</p>" +
        "<div class='radBut'>" +
        "<input type ='radio' name='radio' id='radio9' class='radio' /><br>" +
        "<label for='radio9'>Minor</label>" +
        "</div>" +
        "<div class='radBut' id='radBut2'>" +
        "<input type='radio' name='radio' id='radio10' class='radio'/><br>" +
        "<label for='radio10'>Moderate</label>" +
        "</div>";

    var footer =

        " <button type='submit' class='blueButtons' onClick='getSTRvalue()' >NEXT</button> " +
		"<button type='button' class='exitButton'>EXIT</button>" ;


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag == 1) {
        $("select[name=STRForm]").val(app.prevalingSHRData.SHR.pSTR);
    } else {
        $("select[name=STRForm]").val(app.esSHRData.SHR.pSTR);
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

        "<button type='submit' class='blueButtons' onClick='getLDRvalue()' >NEXT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;


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

        "<button type='submit' class='blueButtons' onClick='getRCRvalue()' >NEXT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;


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

        "<button type='submit' class='blueButtons' onClick='getOHRvalue(); getREV();' >NEXT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;


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
        var pLDR = app.prevalingSHRData.SHR.pLDR;
        var pRCR = app.prevalingSHRData.SHR.pRCR;
        var pOHR = app.prevalingSHRData.SHR.pOHR;
    } else {
        var pWHR = app.esSHRData.SHR.pWHR;
        var pWTR = app.esSHRData.SHR.pWTR;
        var pWPR = app.esSHRData.SHR.pWPR;
        var pZWR = app.esSHRData.SHR.pZWR;
        var pSTR = app.esSHRData.SHR.pSTR;
        var pLDR = app.esSHRData.SHR.pLDR;
        var pRCR = app.esSHRData.SHR.pRCR;
        var pOHR = app.esSHRData.SHR.pOHR;
    }

    var body =

        "<div id='ratingsList'>" +
        "<ul>" +
        "<li>" +
        "WHR  " + retreiveDescription("WHR", pWHR) + "<button type='submit' class='blueButtons' onClick='getWHR(); nextRouteChange();'>WHR</button>" +
        "</li><li>" +
        "WTR  " + retreiveDescription("WTR", pWTR) + "<button type='submit' class='blueButtons' onClick='getWTR(); nextRouteChange();'>WTR</button>" +
        "</li><li>" +
        "WPR  " + retreiveDescription("WPR", pWPR) + "<button type='submit' class='blueButtons' onClick='getWPR(); nextRouteChange();'>WPR</button>" +
        "</li><li>" +
        "ZWR  " + retreiveDescription("ZWR", pZWR) + "<button type='submit' class='blueButtons' onClick='getZWR(); nextRouteChange();'>ZWR</button>" +
        "</li><li>" +
        "STR  " + retreiveDescription("STR", pSTR) + "<button type='submit' class='blueButtons' onClick='getSTR(); nextRouteChange();'>STR</button>" +
        "</li><li>" +
        "LDR  " + retreiveDescription("LDR", pLDR) + "<button type='submit' class='blueButtons' onClick='getLDR(); nextRouteChange();'>LDR</button>" +
        "</li><li>" +
        "RCR  " + retreiveDescription("RCR", pRCR) + "<button type='submit' class='blueButtons' onClick='getRCR(); nextRouteChange();'>RCR</button>" +
        "</li><li>" +
        "OHR  " + retreiveDescription("OHR", pOHR) + "<button type='submit' class='blueButtons' onClick='getOHR(); nextRouteChange();'>OHR</button>" +
        "</li>"
    "</ul>" +
    "</div>";

    var footer =
        "<button type='submit' class='blueButtons' onClick='getSHR()'>SUBMIT</button>" +
		"<button type='button' class='exitButton'>EXIT</button>" ;

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getSHR() {

    var header = "Surf Hazard Rating";

    var body =

        "<p><div class='hazard'>The Surf Hazard Rating is:</div></p><br>" +
        "<div class= 'rating'></div>";

    var footer =

        "<form action = 'index.html' method=''>" +
        "<button type='submit' class='blueButtons' onclick = 'insertSHR()'>LOG OUT</button>" +
        "</form>";

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
