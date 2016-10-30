/*
 * This function is use the supplied function fun to retreive the score
 * as specified by the user on their current page, then displays an error
 * if no value is specified or re routes to the next page in the SHR form. 
 *
 */
function nextPage(SHR, fun) {
    var score = fun();
    if (score == -1) {
        $(".error").text("Please select a value.");
    } else {
        switch (SHR) {
            case ("WHR"):
                window.location.hash = "#WTR";
                $(".error").text("");
                break;
            case ("WTR"):
                window.location.hash = "#WPR";
                $(".error").text("");
                break;
            case ("WPR"):
                window.location.hash = "#ZWR";
                $(".error").text("");
                break;
            case ("ZWR"):
                window.location.hash = "#STR";
                $(".error").text("");
                break;
            case ("STR"):
                window.location.hash = "#LDR";
                $(".error").text("");
                break;
            case ("LDR"):
                window.location.hash = "#RCR";
                $(".error").text("");
                break;
            case ("RCR"):
                window.location.hash = "#OHR";
                $(".error").text("");
                break;
            case ("OHR"):
                window.location.hash = "#REV";
                $(".error").text("");
                break;
            default:
                $(".error").text("Something went wrong");
        }
    }
}

/*
 *
 * Retries the value slected by the user for WHR and returns it
 *
 */
function getWHRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
        score = app.prevalingSHRData.SHR.pWHR;
    } else {
        app.esSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
        score = app.esSHRData.SHR.pWHR;
    }
    return score;
}


/*
 *
 * Retries the describing information for WHR
 *
 */
function getWHRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("The height of the wave is the vertical distance between the front trough and the crest of the wave that is about to break.");
    }
}

/*
 *
 * Retries the value slected by the user for WTR and returns it
 *
 */
function getWTRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pWTR = $("select[name=WTRForm]").val();
        score = app.prevalingSHRData.SHR.pWTR;
    } else {
        app.esSHRData.SHR.pWTR = $("select[name=WTRForm]").val();
        score = app.esSHRData.SHR.pWTR;
    }
    return score;
}

/*
 *
 * Retries the describing information for WTR
 *
 */
function getWTRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Common wave types experienced on Australian beaches include: Surging, Spilling, Plunging and Plunging with back-blasting. Determine wave type from the MOST significant break, where the wave energy is most concentrated.");
    }
}

/*
 *
 * Retries the value slected by the user for WPR and returns it
 *
 */
function getWPRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pWPR = $("select[name=WPRForm]").val();
        score = app.prevalingSHRData.SHR.pWPR;
    } else {
        app.esSHRData.SHR.pWPR = $("select[name=WPRForm]").val();
        score = app.esSHRData.SHR.pWPR;
    }
    return score;
}

/*
 *
 * Retries the describing information for WPR
 *
 */
function getWPRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("The time between two successive breaking waves in the surf zone effects how quickly a competitor can recover stability from one wave to the next. This is especially critical for large craft such as surf boats or skis. Take several measurements and average them.");
    }
}

/*
 *
 * Retries the value slected by the user for ZWR and returns it
 *
 */
function getZWRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pZWR = $("select[name=ZWRForm]").val();
        score = app.prevalingSHRData.SHR.pZWR;
    } else {
        app.esSHRData.SHR.pZWR = $("select[name=ZWRForm]").val();
        score = app.esSHRData.SHR.pZWR;
    }
    return score;
}

/*
 *
 * Retries the describing information for Zwr
 *
 */
function getZWRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("A surf zone is defined as any region of surf fronts between knee deep water and the outermost breaking waves. Consequently, if there exists, a deep channel of water near the shore separated by two rolling turbulent surf fronts, there will be two separate contributions to the ZWR, one for the outer break and one for the inner break.");
    }
}

/*
 *
 * Retries the value slected by the user for STR and returns it
 *
 */
function getSTRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pSTR = $("select[name=STRForm]").val();
        app.prevalingSHRData.SHR.pCrossWaves = $("select[name=STRCrossWavesForm]").val();
        score = app.prevalingSHRData.SHR.pSTR;
    } else {
        app.esSHRData.SHR.pSTR = $("select[name=STRForm]").val();
        app.esSHRData.SHR.pCrossWaves = $("select[name=STRCrossWavesForm]").val();
        score = app.esSHRData.SHR.pSTR;
    }
    return score;
}

/*
 *
 * Retries the describing information for STR
 *
 */
function getSTRInfo() {
    if ($(".info").text() == "Cross Waves form at random angles to the primary swell direction due to local storms or reflection of the primary swell.") {
        $(".info").text("Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction.");
    } else if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction.");
    }
}


/*
 *
 * Retries the describing information for cross waves in STR
 *
 */
function getSTRCrossWavesInfo() {
    if ($(".info").text() == "Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction.") {
        $(".info").text("Cross Waves form at random angles to the primary swell direction due to local storms or reflection of the primary swell.");
    } else if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Cross Waves form at random angles to the primary swell direction due to local storms or reflection of the primary swell.");
    }
}

/*
 *
 * Retries the value slected by the user for LDR and returns it
 *
 */
function getLDRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pLDR = $("select[name=LDRForm]").val();
        score = app.prevalingSHRData.SHR.pLDR;
    } else {
        app.esSHRData.SHR.pLDR = $("select[name=LDRForm]").val();
        score = app.esSHRData.SHR.pLDR;
    }
    return score;
}


/*
 *
 * Retries the describing information for LDR
 *
 */
function getLDRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Measures the sideways movement of water over a large distance.");
    }
}

/*
 *
 * Retries the value slected by the user for RCR and returns it
 *
 */
function getRCRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pRCR = $("select[name=RCRForm]").val();
        score = app.prevalingSHRData.SHR.pRCR;
    } else {
        app.esSHRData.SHR.pRCR = $("select[name=RCRForm]").val();
        score = app.esSHRData.SHR.pRCR;
    }
    return score;
}

/*
 *
 * Retries the describing information for RCR
 *
 */
function getRCRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Rip Current Rating measures the severity of rips present on the beach.");
    }
}

/*
 *
 * Retries the value slected by the user for OHR and returns it
 *
 */
function getOHRvalue() {
    var score = -1;
    if (app.SHRFlag == 1) {
        app.prevalingSHRData.SHR.pOHR = $("select[name=OHRForm]").val();
        score = app.prevalingSHRData.SHR.pOHR;
    } else {
        app.esSHRData.SHR.pOHR = $("select[name=OHRForm]").val();
        score = app.esSHRData.SHR.pOHR;
    }
    return score;
}

/*
 *
 * Retries the describing information for OHR
 *
 */
function getOHRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Other Significant hazard may include: Man-made or natural obstructions (rocks, reefs, jetties, outflow pipes, wrecks, uncontrolled craft). Uncontrolled surf craft (1 for ski, 6 for boats). Floating logs, seaweed and other flotsam. Water temperature(low water temperature increases hazard). Pollution, marine stinger etc. Visual impairment: for example, the sun setting over the ocean.");
    }
}

/*
 * Retreive the description of WHR from a given value
 *
 */
function WHRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "0(Knee High)";
            break;
        case (1):
            texte = "up to 0.5 (Knee High)";
            break;
        case (2):
            texte = "up to 1.0 (waist High)";
            break;
        case (3):
            texte = "up to 1.5 (Head high)";
            break;
        case (4):
            texte = "up to 2.0 (Head High)";
            break;
        case (5):
            texte = "up to 2.5 (Overhead)";
            break;
        case (6):
            texte = "up to 3.0 (Overhead)";
            break;
        case (8):
            texte = "up to 3.5 (Double Overhead)";
            break;
        case (10):
            texte = "up to 4.0 (Double Overhead)";
            break;
        case (12):
            texte = "up to 4.5";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of WTR from a given value
 *
 */
function WTRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "Surging";
            break;
        case (1):
            texte = "Spilling";
            break;
        case (2):
            texte = "Plunging";
            break;
        case (4):
            texte = "Plunging with Back-Blasting";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of WPR from a given value
 *
 */
function WPRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "Long Period(>14sec)";
            break;
        case (1):
            texte = "Moderate Period(9-14secs)";
            break;
        case (2):
            texte = "Short Period(6-8 secs)";
            break;
        case (3):
            texte = "Extremely Short Period(<6 secs)";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of ZWR from a given value
 *
 */
function ZWRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "0";
            break;
        case (1):
            texte = "up to 20";
            break;
        case (2):
            texte = "up to 40";
            break;
        case (3):
            texte = "up to 60";
            break;
        case (4):
            texte = "up to 80";
            break;
        case (5):
            texte = "up to 100";
            break;
        case (6):
            texte = "up to 120";
            break;
        case (7):
            texte = "up to 140";
            break;
        case (8):
            texte = "up to 160";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of STR from a given value
 *
 */
function STRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "No chop (glassy)";
            break;
        case (1):
            texte = "Light Chop (5-11 kts)";
            break;
        case (2):
            texte = "Moderate Chop (12-21 kts)";
            break;
        case (3):
            texte = "Excessive Chop (22-27 kts)";
            break;
        case (4):
            texte = "Extreme Chop (>27kts)";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of STR from a given value
 *
 */
function STRCrossWaveDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "No Cross Waves";
            break;
        case (1):
            texte = "Minor Cross Waves";
            break;
        case (2):
            texte = "Moderate Cross Waves";
            break;
    }

    return texte;
}

/*
 * Retreive the description of LDR from a given value
 *
 */
function LDRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "No Drag (0)";
            break;
        case (1):
            texte = "Low Drag (>40 secs)";
            break;
        case (2):
            texte = "Moderate Drag (20-40 secs)";
            break;
        case (3):
            texte = "Strong Drag (13-19 secs)";
            break;
        case (4):
            texte = "Very Strong Drag (<13 secs)";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 * Retreive the description of RCR from a given value
 *
 */
function RCRDescription(value) {
    var texte = "ERROR";
    switch (value * 1) {
        case (0):
            texte = "No Rips";
            break;
        case (1):
            texte = "Mild Rips (swim against)";
            break;
        case (2):
            texte = "Mild to strong Rips (ONLY walk waist deep against)";
            break;
        case (3):
            texte = "Strong Rips (Cannot walk against)";
            break;
        default:
            description = "Dan is gay.";
    }

    return texte;
}

/*
 *This function is used on the revision page. 
 *If a person wants to change a value, 
 *The page is rendered by the get function 
 *The calculation is retreived the the fun function.
 *
 */
function nextRouteChange(get, fun) {
    get();
    window.location.hash = "#TRANS";
    var footer =
        "<button name='next' type='submit' class='blueButtons' onClick='nextPage(" + '"OHR"' + ", " + fun + ")'>Done</button>";

    $(".footer").html(footer);
}

/*
 *
 * This function determines what button is selected in the for selection screen
 *
 */
function shrFormSelect() {
    if ($('#shrRadio1').is(":checked")) {
        app.SHRFlag = 1;
        window.location.hash = "#prevailing1";
    } else if ($('#shrRadio2').is(":checked")) {
        app.SHRFlag = 2;
        window.location.hash = "#eventSpecific";
    }
}

/**
*
*
*
*/
function getSHRHistory(){
	var plength =  app.prevSHRArray.length;
	var eslength =  app.esSHRArray.length;
	var his = "";
	if (plength != 0){
		his = "<p>Prevailing SHR History</p><ul>";
		for (var i = 0; i < plength && i < 2; i ++ ){
			his += "<li> Date Filled:" + app.prevSHRArray[i].time +  ", SHR: " + app.prevSHRArray[i].SHR.totalSHR  + "</li>";
		}
		his += "</ul>";
	}
	if (eslength != 0){
		his += "<p>Event Specific SHR History</p><ul>";
		for (var i = 0; i < eslength && i < 2; i ++ ){
			his += "<li>Date Filled:" + app.esSHRArray[i].time + ", SHR: " + app.esSHRArray[i].SHR.totalSHR  + "</li>";
		}
		his += "</ul>";
	}
	return his;
}
