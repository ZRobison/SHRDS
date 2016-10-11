
function getWHRvalue(){
		app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
		if (app.prevalingSHRData.SHR.pWHR != -1){
					window.location.hash ="#WTR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return app.prevalingSHRData.SHR.pWHR;
}

function getWHRInfo(){
	if ($(".info").text()){
		$(".info").text("");
	} else {
		$(".info").text("The height of the wave is the verticle distance between the front trough and the crest of the wave that is about to break.");
	}
}

function getWTRvalue(){
		app.prevalingSHRData.SHR.pWTR = $("select[name=WTRForm]").val();
		if (app.prevalingSHRData.SHR.pWTR != -1){
					window.location.hash ="#WPR";
					$(".error").text("");
		} else {
					$(".error").text("Please select a value.");
		}
		return app.prevalingSHRData.SHR.pWTR;
}
