// prevailing functions

function getPrevailingValues(){
	var check = true;
	check = check && beachValue();
	check = check && windDirection();
	check = check && windSpeed();
	check = check && tideTimes();
	check = check && tideHeights();
	if (check) {
		 app.prevalingSHRData.time = getDateTime();
		window.location.hash = "#WHR";
	} else {
		console.log("error");
		$(".error").text("Please fill in all fields.");
	}
}



function beachValue() {
	  var score = $("select[name=prevailingBeach]").val();
	  if (score == '-1') {
		  return false;
	  } else {
		  app.prevalingSHRData.beach = score;
		  return true;
	  }
}

function windDirection() {
	  var score = $("select[name=windDirection]").val();
	  if (score == '-1') {
		  return false;
	  } else {
		  app.prevalingSHRData.windDirection = score;
		  return true;
	  }
}

function windSpeed() {
	  var score = $("input[name=windSpeed]").val();
	  if (score == "") {
		  return false;
	  } else {
		  app.prevalingSHRData.windSpeed  = score;
		  return true;
	  }	   
}

function tideTimes() {
	  var check = true;
	  var score1 = $("input[name=tideTimeLow]").val();
	  if (score1 == "") {
		  check = check && false;
	  } else {
		  app.prevalingSHRData.tideTimeLow = score1;
		  check = check && true;
	  }
	  
	  var score2 = $("input[name=tideTimeHigh]").val();
	  if (score2 == "") {
		  check = check && false;
	  } else {
		  app.prevalingSHRData.tideTimeHigh = score2;
		  check = check && true;
	  }	  
	  return check;
}

function tideHeights() {
	  var check = true;
	  var score1 = $("input[name=tideHieghtHigh]").val();
	  if (score1 == "") {
		  check = check && false;
	  } else {
		  app.prevalingSHRData.tideHieghtHigh  = score1;
		  check = check && true;
	  }
	  
	  var score2 = $("input[name=tideHieghtLow]").val();
	  if (score2 == "") {
		  check = check && false;
	  } else {
		   app.prevalingSHRData.tideHieghtLow  = score2;
		  check = check && true;
	  }	 
	  return check;
}