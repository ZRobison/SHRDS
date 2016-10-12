
function getWHRvalue(){
		var score = -1;
		if (app.SHRFlag){
			app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
			score = app.prevalingSHRData.SHR.pWHR
		} else {
			//eventspercific
		}
		if (score != -1){
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
			app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
			score = app.prevalingSHRData.SHR.pWHR
		} else {
			//eventspercific
		}
		if (score != -1){
					window.location.hash ="#WPR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return score;
}
