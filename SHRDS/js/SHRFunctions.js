
function getWHRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
			score = app.prevalingSHRData.SHR.pWHR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#WTR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getWHRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getWTRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pWTR = $("select[name=WTRForm]").val();
			score = app.prevalingSHRData.SHR.pWTR
		} else {
			//eventspecific
		}
		if (score !== -1){
					window.location.hash ="#WTR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getWTRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("Common wave types experienced on Australian beaches include: Surging, Spilling, Plunging and Plunging with back-blasting. Determine wave type from the MOST significant break, where the wave energy is most concentrated.");
	}
}


function getWPRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pWPR = $("select[name=WPRForm]").val();
			score = app.prevalingSHRData.SHR.pWPR
		} else {
			//eventspecific
		}
		if (score !== -1){
					window.location.hash ="#WPR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getWPRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The time between two successive breaking waves in the surf zone effects how quickly a competitor can recover stability from one wave to the next. This is especially critical for large craft such as surf boats or skis. Take several measurements and average them.");
	}
}

function getZWRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pZWR = $("select[name=ZWRForm]").val();
			score = app.prevalingSHRData.SHR.pZWR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#ZWR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getZWRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getSTRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pSTR = $("select[name=STRForm]").val();
			score = app.prevalingSHRData.SHR.pSTR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#STR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getSTRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getLDRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pLDR = $("select[name=LDRForm]").val();
			score = app.prevalingSHRData.SHR.pLDR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#LDR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getLDRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getRCRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pRCR = $("select[name=RCRForm]").val();
			score = app.prevalingSHRData.SHR.pRCR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#RCR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getRCRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getOHRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pOHR = $("select[name=OHRForm]").val();
			score = app.prevalingSHRData.SHR.pOHR
		} else {
			//eventspecific
		}
		if(score !== -1) {
					window.location.hash ="#OHR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}

function getOHRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}
