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

	function getWHR() {

		//title
		var header = "Wave Height Rating";

		var body =
			//body
			"WHR in Meters" + 
			"<button type='button' onclick='getWHRInfo()'>?</button>" +
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
			"<div class='info'></div>"+
			"<div class='error'></div>";

		var footer =
			//footer
			"<form class='WHRButton' onClick='console.log(getWHRvalue())'>" +
			"<button type='submit' class='blueButtons'>Next</button> " +
			"</form>";
			
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
			"<button type='button' onclick='getWTRInfo()')>?</button>" +			
			"<select id='myList' name='WTRForm'>" +
			"<option value='-1' selected>select one</option>" +
			"<option value='0'>Surging</option>" +
			"<option value='1'>Spilling</option>" +
			"<option value='2'>Plunging</option>" +
			"<option value='4'>Plunging with Back-Blasting</option>" +
			"</select>" +
			"<div class='info'></div>"+
			"<div class='error'></div>";

		var footer =
			"<form action = '' onClick='console.log(getWTRvalue())'>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

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
			//new button
			"<button type='button' onclick='alert('getWPRInfo()')>?</button>" +
			"WPR<select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>Long Period(>14sec)</option>" +
			"<option value='3'>Moderate Period(9-14secs)</option>" +
			"<option value='4'>Short Period(6-8 secs)</option>" +
			"<option value='5'>Extremely Short Period(<6 secs)</option>" +
			"</select>";

		var footer =
			"<form action = 'onClick='console.log(getWPRvalue())" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";
		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getZWR() {

		var header = "Zone Width Rating";

		var body =
//？
			//new button
            "<button type='button' onclick='alert('getZWRInfo()')>?</button>" +
			"ZWR<select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>0</option>" +
			"<option value='3'>up to 20</option>" +
			"<option value='4'>up to 40</option>" +
			"<option value='5'>up to 60</option>" +
			"<option value='6'>up to 80</option>" +
			"<option value='7'>up to 100</option>" +
			"<option value='8'>up to 120</option>" +
			"<option value='9'>up to 140</option>" +
			"<option value='10'>up to 160</option>" +
			"</select>";

		var footer =
			"<form action = '#STR' method=''>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getSTR() {
		var header = "Surface Turbulence Rating";

		var body =
		    //new button
			"<button type='button' onclick='alert('getSTRInfo()')>?</button>" +
			"<select id='myList' onChange=''>" +
				"<option value='1' selected>Select one</option>" +
				"<option value='2'>No chop (glassy)</option>" +
				"<option value='3'>Light Chop (5-11 kts)</option>" +
				"<option value='4'>Moderate Chop (12-21 kts)</option>" +
				"<option value='5'>Excessive Chop (22-27 kts)</option>" +
				"<option value='6'>Extreme Chop (>27kts)</option>" +
			"</select>"+

			"<p>Cross Waves: form at random angles to the primary swell direction due to local storms or reflection of the primary swell.</p>" +
			"<p>Select minor or moderate if Cross Waves are present.</p>"+
			"<div class='radBut'>"+
			"<input type ='radio' name='radio' id='radio9' class='radio' /><br>" +
			"<label for='radio9'>Minor</label>" +
			"</div>"+
			"<div class='radBut' id='radBut2'>"+
			"<input type='radio' name='radio' id='radio10' class='radio'/><br>" +
			"<label for='radio10'>Moderate</label>"+
			"</div>";

		var footer =
			"<form action='#LDR'>" +
				" <button type='submit' class='blueButtons' >Next</button> " +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getLDR() {
		var header = "Littoral Drift Rating";

		var body =
		    //new button
			"<button type='button' onclick='alert('getLDRInfo()')>?</button>" +
			"LDR<br><select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='3'>No Drag (0)</option>" +
			"<option value='4'>Low Drag (>40 secs)</option>" +
			"<option value='5'>Moderate Drag (20-40 secs)</option>" +
			"<option value='6'>Strong Drag (13-19 secs)</option>" +
			"<option value='7'>Very Strong Drag (<13 secs)</option>" +
			"</select>";

		var footer =
			"<form action = '#RCR' method=''>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getRCR() {
		var header = "Rip Current Rating";

		var body =
		    //new button
			"<button type='button' onclick='alert('getRCRInfo()')'>?</button>" +
			"RCR<br><select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>No Rips</option>" +
			"<option value='3'>Mild Rips (swim against)</option>" +
			"<option value='4'>Mild to strong Rips (ONLY walk waist deep against)</option>" +
			"<option value='5'>Strong Rips (Cannot walk against)</option>" +
			"</select>";

		var footer =
			"<form action = '#OHR' method=''>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getOHR() {
		var header = "Other Hazards Rating";

		var body =
		    /* 
			"<p class='titles'>Other Significant hazard may include:</p>" +
			"<ul>" +
			"<li>Man-made or natural obstructions (rocks, reefs, jetties, outflow pipes, wrecks, uncontrolled craft:" +
			"</li>" +
			"<li>Uncontrolled surf craft (1 for ski, 6 for boats)" +
			"</li>" +
			"<li>" +
			"Floating logs, seaweed and other flotsam." +
			"</li>" +
			"<li>" +
			"Water temperature(low water temperature increases hazard)." +
			"</li>" +
			"<li>" +
			"Pollution, marine stinger etc." +
			"</li>" +
			"<li>" +
			"Visual impairment: for example, the sun setting over the ocean.<br><br>" +
			"</li>" */ 
			"Other Hazards Rating" +
			"<button type='button' onclick='alert('getRCRInfo()')'>?</button>" +

			"OHR: one for each extra hazard present<br><br><select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>0</option>" +
			"<option value='3'>1</option>" +
			"<option value='4'>2</option>" +
			"<option value='5'>3</option>" +
			"<option value='6'>4</option>" +
			"<option value='7'>5</option>" +
			"<option value='8'>6</option>" +
			"<option value='9'>7</option>" +
			"<option value='10'>8</option>" +
			"<option value='11'>9</option>" +
			"</select>";

		var footer =
			"<form action = '#REV' method=''>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getREV() {
		var header = "Review SHR";

		var body =
			"<Table width='594' border='0' class='titles'>" +
			"<tr><td>" +
			"WHR" +
			"</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"WTR" +
			"</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"WPR" +
			"</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"ZWR" +
			"</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"STR</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"LDR</td><td>" +
			"Value</td></tr><tr><td>" +
			"RCR</td><td>" +
			"Value" +
			"</td></tr><tr><td>" +
			"OHR" +
			"</td><td>" +
			"Value" +
			"</td></tr></Table>";

		var footer =
			"<form action = '#SHR' method=''>" +
			"<button type='submit' class='blueButtons'>Submit</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getSHR() {

		var header = "Surf Hazard Rating";

		var body =

			"<p><div class='titles'>The Surf Hazard Rating is:</div></p><br>" +
			"<div id='rating'></div>" ;

		var footer =

			"<form action = 'index.html' method=''>" +
			"<button type='submit' class='blueButtons'>Log Out</button>" +
			"</form>";
		
		$("#rating").text(calculateSHR());
		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}
}
