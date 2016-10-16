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
        "WHR in Meters" +
        "<select id='myList' name='WHRForm'>" +
        "<option value='-1'>select one</option>" +
        "<option value='0'>0(Knee High)</option>" +
        "<option value='1'>up to 0.5 (Knee High)</option>" +
        "<option value='2'>up to 1.0 (waist High)</option>" +
        "<option value='3'>up to 1.5 (Head high)</option>" +
        "<option value='4'>up to 2.0 (Head High)</option>" +
        "<option value='5'>up to 2.5 (Overhead)</option>" +
        "<option value='6'>up to 3.0 (Overhead)</option>" +
        "<option value='8'>up to 3.5 (Double Overhead)</option>" +
        "<option value='10'>up to 4.0 (Double Overhead)</option>" +
        "<option value='12'>up to 4.5</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getWHRInfo()'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";

    var footer =
        //footer
        "<button type='submit' class='blueButtons' onClick='console.log(getWHRvalue())'>NEXT</button> ";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);


    if (app.SHRFlag) {
        $("select[name=WHRForm]").val(app.prevalingSHRData.SHR.pWHR);
    } else {
        //Add code for IS SHR
    }
};



function getWTR() {

    var header = "Wave Type Rating";

    var body =
        "WTR" +
        "<select id='myList' name='WTRForm'>" +
        "<option value='-1' selected>select one</option>" +
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
        "<button type='submit' class='blueButtons' onClick='console.log(getWTRvalue())'>NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

    if (app.SHRFlag) {
        $("select[name=WTRForm]").val(app.prevalingSHRData.SHR.pWTR);
    } else {
        //Add code for IS SHR
    }
}

function getWPR() {
    var header = "Wave Period Rating";

    var body =

        "WPR" +
        "<select id='myList' name='WPRForm'>" +
        "<option value='-1' selected>select one</option>" +
        "<option value='0'>Long Period(>14sec)</option>" +
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

        "<button type='submit' class='blueButtons' onClick='console.log(getWPRvalue())' >NEXT</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getZWR() {

    var header = "Zone Width Rating";

    var body =

        "ZWR<select id='myList' name='ZWRForm'>" +
        "<option value='-1' selected>select one</option>" +
        "<option value='0'>0</option>" +
        "<option value='1'>up to 20</option>" +
        "<option value='2'>up to 40</option>" +
        "<option value='3'>up to 60</option>" +
        "<option value='4'>up to 80</option>" +
        "<option value='5'>up to 100</option>" +
        "<option value='6'>up to 120</option>" +
        "<option value='7'>up to 140</option>" +
        "<option value='8'>up to 160</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getZWRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";

    var footer =

        "<button type='submit' class='blueButtons' onClick='console.log(getZWRvalue())' >NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getSTR() {
    var header = "Surface Turbulence Rating";

    var body =

        "<select id='myList' name='STRForm'>" +
        "<option value='-1' selected>Select one</option>" +
        "<option value='0'>No chop (glassy)</option>" +
        "<option value='1'>Light Chop (5-11 kts)</option>" +
        "<option value='2'>Moderate Chop (12-21 kts)</option>" +
        "<option value='3'>Excessive Chop (22-27 kts)</option>" +
        "<option value='4'>Extreme Chop (>27kts)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getSTRInfo()')></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
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

        " <button type='submit' class='blueButtons' onClick='console.log(getSTRvalue())' >NEXT</button> ";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getLDR() {
    var header = "Littoral Drift Rating";

    var body =

        "<select id='myList' name='LDRForm'>" +
        "<option value='-1' selected>select one</option>" +
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

        "<button type='submit' class='blueButtons' onClick='console.log(getLDRvalue())' >NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getRCR() {
    var header = "Rip Current Rating";

    var body =

        "<br><select id='myList' name='RCRForm'>" +
        "<option value='-1' selected>select one</option>" +
        "<option value='0'>No Rips</option>" +
        "<option value='1'>Mild Rips (swim against)</option>" +
        "<option value='2'>Mild to strong Rips (ONLY walk waist deep against)</option>" +
        "<option value='3'>Strong Rips (Cannot walk against)</option>" +
        "</select>" +
        "<button type='button' class='questionMark' onclick='getRCRInfo()')'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =

        "<button type='submit' class='blueButtons' onClick='console.log(getRCRvalue())' >NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getOHR() {
    var header = "Other Hazards Rating";

    var body =


        "OHR: one for each extra hazard present<br><br><select id='myList' name='OHRForm'>" +
        "<option value='-1' selected>select one</option>" +
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
        "<button type='button' class='questionMark' onclick='getOHRInfo()')'></button>" +
        "<div class='error'></div>" +
        "<br>" +
        "<br>" +
        "<div class='info'></div>";


    var footer =

        "<button type='submit' class='blueButtons' onClick='console.log(getOHRvalue())' >NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getREV() {
    var header = "Review SHR";

    if (app.SHRFlag) {
        var shr = app.prevalingSHRData.SHR;
        console.log(shr.pWHR);
    } else {
        //eventspecific
    }

    var body =
        "<l>" +
        "<ul>" +
        "WHR  " + retreiveDescription("WHR", shr.pWHR) +
        "</ul><ul>" +
        "WTR  " + retreiveDescription("WTR", shr.pWTR) +
        "</ul><ul>" +
        "WPR  " + retreiveDescription("WPR", shr.pWPR) +
        "</ul><ul>" +
        "ZWR  " + retreiveDescription("ZWR", shr.pZWR) +
        "</ul><ul>" +
        "STR  " + retreiveDescription("STR", shr.pSTR) +
        "</ul><ul>" +
        "LDR  " + retreiveDescription("LDR", shr.pLDR) +
        "</ul><ul>" +
        "RCR  " + retreiveDescription("RCR", shr.pRCR) +
        "</ul><ul>" +
        "OHR  " + retreiveDescription("OHR", shr.pOHR) +
        "</ul>"
    "</l>";

    var footer =
        "<form action = '#SHR' method=''>" +
        "<button type='submit' class='blueButtons'>SUBMIT</button>" +
        "</form>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getSHR() {

    var header = "Surf Hazard Rating";

    var body =

        "<p><div class='titles'>The Surf Hazard Rating is:</div></p><br>" +
        "<div class= 'rating'></div>";

    var footer =

        "<form action = 'index.html' method=''>" +
        "<button type='submit' class='blueButtons'>LOG OUT</button>" +
        "</form>";

    var shr = -1;
    if (app.SHRFlag) {
        shr = app.prevalingSHRData.SHR.calculate();
        console.log(shr);
    } else {
        //eventspecific
    }
    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
    $(".rating").text(shr);

}
