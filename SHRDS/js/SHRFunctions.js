function getWHRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
        score = app.prevalingSHRData.SHR.pWHR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#WTR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getWHRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
    }
}

function getWTRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pWTR = $("select[name=WTRForm]").val();
        score = app.prevalingSHRData.SHR.pWTR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#WPR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getWTRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Common wave types experienced on Australian beaches include: Surging, Spilling, Plunging and Plunging with back-blasting. Determine wave type from the MOST significant break, where the wave energy is most concentrated.");
    }
}


function getWPRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pWPR = $("select[name=WPRForm]").val();
        score = app.prevalingSHRData.SHR.pWPR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#ZWR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getWPRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("The time between two successive breaking waves in the surf zone effects how quickly a competitor can recover stability from one wave to the next. This is especially critical for large craft such as surf boats or skis. Take several measurements and average them.");
    }
}

function getZWRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pZWR = $("select[name=ZWRForm]").val();
        score = app.prevalingSHRData.SHR.pZWR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#STR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getZWRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("A surf zone is defined as any region of surf fronts between knee deep water and the outermost breaking waves. Consequently, if there exists, a deep channel of water near the shore separated by two rolling turbulent surf fronts, there will be two separate contributions to the ZWR, one for the outer break and one for the inner break.");
    }
}

function getSTRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pSTR = $("select[name=STRForm]").val();
        score = app.prevalingSHRData.SHR.pSTR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#LDR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getSTRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction.");
    }
}

function getLDRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pLDR = $("select[name=LDRForm]").val();
        score = app.prevalingSHRData.SHR.pLDR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#RCR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getLDRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Measures the sideways movement of water over a large distance.");
    }
}

function getRCRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pRCR = $("select[name=RCRForm]").val();
        score = app.prevalingSHRData.SHR.pRCR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#OHR";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getRCRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Rip Current Rating measures the severity of rips present on the beach.");
    }
}

function getOHRvalue() {
    var score = -1;
    if (app.SHRFlag) {
        app.prevalingSHRData.SHR.pOHR = $("select[name=OHRForm]").val();
        score = app.prevalingSHRData.SHR.pOHR
    } else {
        //eventspecific
    }
    if (score != -1) {
        window.location.hash = "#REV";
        $(".error").text("");
    } else {
        $(".error").text("Please select a value.");
    }
    return score;
}

function getOHRInfo() {
    if ($(".info").text()) {
        $(".info").text("");
    } else {
        $(".info").text("Other Significant hazard may include: Man-made or natural obstructions (rocks, reefs, jetties, outflow pipes, wrecks, uncontrolled craft). Uncontrolled surf craft (1 for ski, 6 for boats). Floating logs, seaweed and other flotsam. Water temperature(low water temperature increases hazard). Pollution, marine stinger etc. Visual impairment: for example, the sun setting over the ocean.");
    }
}



<<<<<<< HEAD
function WHRDescription(value){
	var texte = "ERROR";
	switch(value){
		case(0) :
			texte = "0(Knee High)";
		break;
		case(1) :
			texte = "up to 0.5 (Knee High)";
		break;
		case(2) :
			texte = "up to 1.0 (waist High)";
		break;
		case(3) :
			texte = "up to 1.5 (Head high)";
		break;
		case(4) :
			texte = "up to 2.0 (Head High)";
		break;
		case(5) :
			texte = "up to 2.5 (Overhead)";
		break;
		case(6) :
			texte = "up to 3.0 (Overhead)";
		break;
		case(8) :
			texte = "up to 3.5 (Double Overhead)";
		break;
		case(10) :
			texte = "up to 4.0 (Double Overhead)";
		break;
		case(12) :
			texte = "up to 4.5";
		break;
		default: 
		description = "Dan is gay.";
	}
	
	return texte;
}
			
function WTRDescription(value){
	var texte = "ERROR";
	switch(value){
			case (0) :  
			texte = "Surging";
			break; 
			case (1) :  
			texte = "Spilling";
			break; 
			case (2) :  
			texte = "Plunging";
			break; 
			case (4) :  
			texte = "Plunging with Back-Blasting";
			break;
			default: 
			description = "Dan is gay.";
	}
	
	return texte;
}

function WPRDescription(value){
	var texte = "ERROR";
	switch(value){
			case (0) :  
			texte = "Long Period(>14sec)";  
			break;
			case (1) :  
			texte = "Moderate Period(9-14secs)"; 
			break;
			case (2) : 
			texte = "Short Period(6-8 secs)";  
			break;
			case (3) :  
			texte = "Extremely Short Period(<6 secs)";  
			break;
			default: 
			description = "Dan is gay.";
	}
	
	return texte;
}

function ZWRDescription(value){
	var texte = "ERROR";
	switch(value){
	        case (0)  :  
			texte = "0";  
			break;
			case (1)  :  
			texte = "up to 20";  
			break;
			case (2)  :  
			texte = "up to 40";  
			break;
			case (3)  :  
			texte = "up to 60";  
			break;
			case (4)  :  
			texte = "up to 80"; 
			break;
			case (5)  :  
			texte = "up to 100";  
			break;
			case (6)  : 
			texte = "up to 120"; 
			break;
			case (7)  :  
			texte = "up to 140";
			break;
			case (8)  :  
			texte = "up to 160"; 
			break;
            default: 
			description = "Dan is gay.";			
	}
	
	return texte;
}

function STRDescription(value){
	var texte = "ERROR";
	switch(value){
	            case (0)  :  
				texte = "No chop (glassy)";  
				break;
	            case (1)  :  
				texte = "Light Chop (5-11 kts)";  
				break;
				case (2)  :  
				texte = "Moderate Chop (12-21 kts)";  
				break;
				case (3)  :  
				texte = "Excessive Chop (22-27 kts)";  
				break;
				case (4)  :  
				texte = "Extreme Chop (>27kts)";  
				break;
				default: 
			    description = "Dan is gay.";
	}
	
	return texte;
}

function LDRDescription(value){
	var texte = "ERROR";
	switch(value){
	        case (0)  :  
			texte = "No Drag (0)" ;  
			break;
			case (1)  :  
			texte = "Low Drag (>40 secs)";  
			break;
			case (2)  :  
			texte = "Moderate Drag (20-40 secs)";  
			break;
			case (3)  :  
			texte = "Strong Drag (13-19 secs)";  
			break;
			case (4)  :  
			texte = "Very Strong Drag (<13 secs)";  
			break;
            default: 
			description = "Dan is gay.";			
	}
	
	return texte;
}

function RCRDescription(value){
	var texte = "ERROR";
	switch(value){
	        case (0)  :  
			texte = "No Rips";  
			break;
			case (1)  :  
			texte = "Mild Rips (swim against)";  
			break;
			case (2)  :  
			texte = "Mild to strong Rips (ONLY walk waist deep against)";  
			break;
			case (3)  :  
			texte = "Strong Rips (Cannot walk against)";  
			break;	
			default: 
			description = "Dan is gay.";
	}
	
	return texte;
}

function OHRDescription(value){
	var texte = "ERROR";
	switch(value){
	        case (0)  :  
			texte = "0";  
			break;
			case (1)  :  
			texte = "1";  
			break;
			case (2)  :  
			texte = "2";  
			break;
			case (3)  :  
			texte = "3";  
			break;
			case (4)  :  
			texte = "4"; 
			break;
			case (5)  :  
			texte = "5";  
			break;
			case (6)  : 
			texte = "6"; 
			break;
			case (7)  :  
			texte = "7";
			break;
			case (8)  :  
			texte = "8"; 
			break;	
            case (9)  :  
			texte = "9"; 
			break;	
            default: 
			description = "Dan is gay.";			
	}
	
	return texte;
=======
function WHRDescription(value) {
    var texte = "ERROR";
    switch (value) {
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
    }

    return texte;
}

function WTRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function WPRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function ZWRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function STRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function LDRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function RCRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function OHRDescription(value) {
    var texte = "";
    switch (value) {

    }

    return texte;
}

function retreiveDescription(type, value) {
    var description = "ERROR"
    switch (type) {
        case ("WHR"):
            description = WHRDescription(value);
            break;
        case ("WTR"):
            description = WTRDescription(value);
            break;
        case ("WPR"):
            description = WPRDescription(value);
            break;
        case ("ZWR"):
            description = ZWRDescription(value);
            break;
        case ("STR"):
            description = STRDescription(value);
            break;
        case ("LDR"):
            description = LDRDescription(value);
            break;
        case ("RCR"):
            description = RCRDescription(value);
            break;
        case ("OHR"):
            description = OHRDescription(value);
            break;
        default:
            description = "Dan is gay.";
    }

    return description;
>>>>>>> Mobile-Master
}

function shrFormSelect() {
    if ($('#shrRadio1').is(":checked")) {
        window.location.hash = "#prevailing1";
    } else if ($('#shrRadio2').is(":checked")) {
        window.location.hash = "#eventSpecific";
    }
}
