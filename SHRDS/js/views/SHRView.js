var SHRView = function() {


	this.render = function (type) {

		if (app.SHRFlag) {
			this.dataStore = app.prevalingSHRData.SHR;
		} else {
			//Add code for IS SHR
		}

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
			"WHR in Meters<br><select id='myList'>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>0(Knee High)</option>" +
			"<option value='3'>up to 0.5 (Knee High)</option>" +
			"<option value='4'>up to 1.0 (waist High)</option>" +
			"<option value='5'>up to 1.5 (Head high)</option>" +
			"<option value='6'>up to 2.0 (Head High)</option>" +
			"<option value='7'>up to 2.5 (Overhead)</option>" +
			"<option value='8'>up to 3.0 (Overhead)</option>" +
			"<option value='9'>up to 3.5 (Double Overhead)</option>" +
			"<option value='10'>up to 4.0 (Double Overhead)</option>" +
			"<option value='11'>up to 4.5</option>" +
			"</select>";

		var footer =
			//footer
			"<form action = 'index.html?#WTR' method=''>" +
			"<button type='submit' class='blueButtons'>Next</button> " +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	};

	function getWTR() {

		var header = "Wave Type Rating";

		var body =
			//delete?
			"<p>Common wave types experienced on Australian beached include: " +
			"Surging, Spilling, Plunging and Plunging with back-blasting.</p>" +
			"<p>Determine wave type from the MOST significant break, where the" +
			"wave energy is most concentrated.</p><br>" +
			"WTR<br><select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>Surging</option>" +
			"<option value='3'>Spilling</option>" +
			"<option value='4'>Plunging</option>" +
			"<option value='5'>Plunging with Back-Blasting</option>" +
			"</select>";

		var footer =
			"<form action = '#WPR' method=''>" +
			"<button type='submit' class='blueButtons' >Next</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}

	function getWPR() {
		var header = "Wave Period Rating";

		var body =
			//?
			"<p>The time between two successive breaking waves in the surf zone effects how quickly a competitor can recover stability from one wave to the next.</p>" +

			"<p>This is especially critical for large craft such as surf boats or skis. Take several measurements and average them.</p><br>" +

			"WPR<br><select id='myList' onChange=''>" +
			"<option value='1' selected>select one</option>" +
			"<option value='2'>Long Period(>14sec)</option>" +
			"<option value='3'>Moderate Period(9-14secs)</option>" +
			"<option value='4'>Short Period(6-8 secs)</option>" +
			"<option value='5'>Extremely Short Period(<6 secs)</option>" +
			"</select>";

		var footer =
			"<form action = '#ZWR' method=''>" +
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
			"<p>A surf zone is defined as any region of surf fronts between knee deep water and the outermost breaking waves.</p>" +
			"<p>Consequently, if there exists, a deep channel of water near the shore separated by two rolling turbulent surf fronts, there will be two separate contributions to the ZWR, one for the outer break and one for the inner break.</p><br>" +

			"ZWR<br><select id='myList' onChange=''>" +
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
			"<p>Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction.</p><br>" +
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
//？
		var body =
			"<p>Measures the sideways movement of water over a large distance.</p><br>" +

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
			"<p>Rip Current Rating measures the severity of rips present on the beach.</p><br>" +

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
			"</li>" +

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
			"<div id='rating'>10</div>" ;

		var footer =

			"<form action = 'index.html' method=''>" +
			"<button type='submit' class='blueButtons'>Log Out</button>" +
			"</form>";

		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}
}


