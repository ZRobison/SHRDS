var SHRView = function(){
	
 
	this.render = function(type) {
		
		var html =  "<link rel='stylesheet' type='text/css' href='css/main.css'>";
		switch(type){
			case 'WHR':
					html += getWHR();
				break;
			case 'WTR':
					html += getWTR();
				break;
			case 'WPR':
					html += getWPR();
				break;
			case 'ZWR':
					html += getZWR();
				break;
			case 'STR':
					html += getSTR();
				break;
			case 'LDR':
					html += getLDR();
				break;
			case 'RCR':
					html += getRCR();
				break;
			case 'OHR':
					html += getOHR();
				break;
			case 'REV':
					html += getREV();
				break;
			case 'SHR':
					html += getSHR();
				break;
		}
}

function getWHR(){
	
	//tittle
	
	
	var html =  
	
	//body
	"<body onLoad=''>WHR in Meters.<select id='myList'>"+
	"<option value='1' selected>select one</option>"+
	"<option value='2'>0(Knee High)</option>"+
	"<option value='3'>up to 0.5(Knee High)</option>"+
	"<option value='4'>up to 1.0(waist High)</option>"+
	"<option value='5'>up to 1.5(Head high)</option>"+
	"<option value='6'>up to 2.0(Head High)</option>"+
	"<option value='7'>up to 2.5(Overhead)</option>"+
	"<option value='8'>up to 3.0(Overhead)</option>"+
	"<option value='9'>up to 3.5(Double Overhead)</option>"+
	"<option value='10'>up to 4.0(Double Overhead)</option>"+
	"<option value='11'>up to 4.5</option>"+
	"</select>"+
	
	//footer
	"<form action = 'index.html?#WTR' method=''> <br>"+
	"<button type='submit' class='blueButtons'>Next</button> "+
	"</form>" +


	
	return html;
};

function getWTR(){
	var html =
	"<header>"+
	"<img src='images/logo.png'>"+
	"<Center><H1><br>Wave Type Rating</H1></Center></header>"+
	"<br>"+
	"<Center><p>Common wave types experienced on Australian beached include: <br>"+
	"Surging, Spilling, Plunging and Plunging with back-blasting.</p></center>"+
	"<br>"+
	"<Center><p>Determine wave type from the MOST Sinificant break, where the"+
	"<br> wave energy is most concentrated.</p></Center>"+
	"<body onLoad='GETcookie()'>"+
	"<Center><b>WTR</b><br><br><select id='myList' onChange=''>"+
	"<option value='1' selected>select one</option>"+
	"<option value='2'>Surging</option>"+
	"<option value='3'>Spilling</option>"+
	"<option value='4'>Plunging</option>"+
	"<option value='5'>Plunging with Back-Blasting</option>"+
	"</select>"+ 
	"</Center>"+
	"<form action = '#WPR' method=''>"+
	"<div class='bottomYellow'><center>"+
	"<button type='button' class='blueButtons'>Back</button>"+
	"<button type='submit' class='blueButtons'>Next</button>"+
	"</Center>"+
	"</div>"+
	"</form>"
	
	return html;
}

function getWPR(){
	var html =
	"<header>"+
	"<img src='images/logo.png'>"+
"<br><Center><H1>Wave Period Rating</H1></Center></header><br>"+
"<Center><p>The time between two successive breaking waves in the surf zone effects how quickly a competitor can recover stability from one wave to the next.</p></center>"+
"<br>"+
"<Center><p>This is especially critical for large craft such as surf boats or skis. Take several measurements and average them.</p></Center>"+
 
 "<br"+
 "<body onLoad='GETcookie()'>"+
 "<center><b>WPR</b><br><br><select id='myList' onChange='SETcookie()'>"+
  "<option value='1' selected>select one</option>"+
  "<option value='2'>Long Period(>14sec)</option>"+
  "<option value='3'>Moderate Period(9-14secs)</option>"+
  "<option value='4'>Short Period(6-8 secs)</option>"+
  "<option value='5'>Extremely Short Period(<6 secs)</option>"+
	"</select>"+ 
	"<br>"+
	"<form action = '#ZWR' method=''>"+
	"<div class='bottomYellow'>"+
 "<button type='button' class='blueButtons'>Back</button>"+ 
 "<button type='submit' class='blueButtons'>Next</button>"+ 
	"</div>"+
	"</form>"+
	"</center>"
	
	return html;
}

function getZWR(){
	var html =
	"<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Zone Width Rating</H1></Center>"+
"</header><br>"+
"<Center><p>A surf zone is defined as any region of surf fronts between knee deep water and the outermost breaking waves.</p></center>"+
"<br>"+
"<Center><p>Consequently, if there exists, a deep channel of water near the shore separated by two rolling turbulent surf fronts, there will be two separate contributions to the ZWR, one for the outer break and one for the inner break.</p></Center>"+
 "<body onLoad='GETcookie()'>"+
 "<br><br><Center><b>ZWR</b><br><br><select id='myList' onChange='SETcookie()'>"+

  "<option value='1' selected>select one</option>"+
  "<option value='2'>0</option>"+
  "<option value='3'>up to 20</option>"+
  "<option value='4'>up to 40</option>"+
  "<option value='5'>up to 60</option>"+
  "<option value='6'>up to 80</option>"+
  "<option value='7'>up to 100</option>"+
  "<option value='8'>up to 120</option>"+
  "<option value='9'>up to 140</option>"+
  "<option value='10'>up to 160</option>"+
   
	"</select>"+
	"<form action = '#STR' method=''>"+
	"<div class='bottomYellow'>"+
	"<button type='button' class='blueButtons'>Back</button>"+
	"<button type='submit' class='blueButtons'>Next</button>"+
	"</Center>"+
	"</div>"+
	"</form>"+
	"</Center>"
	
	return html;
}

function getSTR(){
	var html =
	"<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Surface Turbulance Rating</H1></Center>"+
"</header>"+
"<br>"+
"<body onLoad='GETcookie()'>"+
"<Center><p>Wind Chops are small wavelets or localised roughing-up of the water surface due to the combined effects of wind speed and wind direction</p></Center>"+
 "<br><Center><select id='myList' onChange='SETcookie()'>"+
  "<option value='1' selected>select one</option>"+
  "<option value='2'>No chop(glassy)</option>"+
  "<option value='3'>Light Chop(5-11 kts)</option>"+
  "<option value='4'>Moderate Chop(12-21 kts)</option>"+
  "<option value='5'>Excessive Chop (22-27 kts)</option>"+
  "<option value='6'>Extreme Chop (>27kts)</option>"+
"</select>"+
"</Center>"+
"<Center><p><br>"+
"Cross Waves: form at random angles to the primary swell direction due to local storms or reflection of the primary swell</p><Center>"+
"<Center><p>Select minor or moderate if Cross Waves are present</p></Center>"+
"<Center>"+
"<form action='#LDR'>"+

"<div id='centerSTFradio'>"+
"<table col=2>"+
"<tr>"+
	"<td><input type ='radio' name='radio' id='radio9' class='radio' /><br>"+
	"<label for='radio9'>Minor</label></td>"+
"</tr>"+
	"<td><input type='radio' name='radio' id='radio10' class='radio'/><br>"+
	"<label for='radio10'>Moderate</label></td>"+
"</tr>"+
"</table>"+
"</div>"+
"<div class='bottomYellow'>"+
 "<button type='button' class='blueButtons'>Back</button>"+
 " <button type='submit' class='blueButtons'>Next</button> "+
 "</div>"+
"</Center>"+
"</form>"+
 "</body>"
	
	return html;
}

function getLDR(){
	var html =
	"<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Littoral Drift Rating</H1></Center>"+
"</header><br>"+
"<Center><p>Measures the sideways movement of water over a large distance</p></center>"+
"<br>"+
"<body onLoad='GETcookie()'>"+
 "<Center><b>LDR</b><br><br></p><br><select id='myList' onChange='SETcookie()'>"+
  "<option value='1' selected>select one</option>"+
  "<option value='3'>No Drag(0)</option>"+
  "<option value='4'>Low Drag(>40 secs)</option>"+
  "<option value='5'>Moderate Drag(20-40 secs)</option>"+
  "<option value='6'>Stong Drag(13-19 secs)</option>"+
  "<option value='7'>Very Strong Drag(<13 secs)</option>"+
	"</select>"+ 
	"<form action = '#RCR' method=''>"+
	"<br>"+
	"<div class='bottomYellow'>"+
	"<button type='button' class='blueButtons'>back</button>"+ 
	"<button type='submit' class='blueButtons'>Next</button>"+ 
	"</div>"+
	"</Center>"+
	"</form>"
	
	return html;
}

function getRCR(){
	var html =
	"<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Rip Current Rating</H1></Center>"+
"</header><br>"+
"<Center><p>Rip Current Rating measures the severity of rips present on the beach</p></center>"+
"<br>"+
"<body onLoad='GETcookie()'>"+
 "<Center><b>RCR</b><br><br><select id='myList' onChange='SETcookie()'>"+
  "<option value='1' selected>select one</option>"+
  "<option value='2'>No Rips</option>"+
  "<option value='3'>Mild Rips (swim against)</option>"+
  "<option value='4'>Mild to strong Rips(ONLY walk waist deep against)</option>"+
  "<option value='5'>Strong Rips(Cannot walk against)</option>"+
   
"</select>"+ 
"<form action = '#OHR' method=''>"+
"<div class='bottomYellow'>"+
 "<button type='button' class='blueButtons'>Back</button>"+ 
 "<button type='submit' class='blueButtons'>Next</button>"+ 
"</Center>"+
"</div>"+
"</form>"
	
	return html;
}

function getOHR(){
	var html = "<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Other Hazards Rating</H1></Center>"+
"</header><br>"+
"<Center><p class='titles'>Other Significant hazard may include:</p></center>"+
"<Center>"+
"<ul>"+
"<li>Man-made or natural obstructions (rocks, reefs, jetties, outflow pipes, wrecks, uncontrolled craft:"+
"</li>"+
"<li>Uncontrolled surf craft (1 for ski, 6 for boats)"+
"</li>"+
"<li>"+
"Floating logs, swaweed and other flotsam."+
"</li>"+
"<li>"+
"Water temperature(low water temperaruture increases harzard)."+ 
"</li>"+
"<li>"+
"Pollution, marine stinger etc."+
"</li>"+
"<li>"+
"Visual impairment: for example, the sun setting over the ocean"+
"</li>"+
"</Center>"+
"<br>"+
"<body onLoad='GETcookie()'>"+
 "<Center>OHR: one for each extra hazard present<br><select id='myList' onChange='SETcookie()'>"+
  "<option value='1' selected>select one</option>"+
  "<option value='2'>0</option>"+
  "<option value='3'>1</option>"+
  "<option value='4'>2</option>"+
  "<option value='5'>3</option>"+
  "<option value='6'>4</option>"+
  "<option value='7'>5</option>"+
  "<option value='8'>6</option>"+
  "<option value='9'>7</option>"+
  "<option value='10'>8</option>"+
  "<option value='11'>9</option>"+ 
"</select>"+ 
"<form action = '#REV' method=''>"+
"<div class='bottomYellow'>"+
 "<button type='button' class='blueButtons'>Back</button>"+ 
 "<button type='submit' class='blueButtons'>Next</button>"+ 
"</Center>"+
"</div>"+
"</form>"
	
	
	return html;
}

function getREV(){
	var html = "<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Review SHR</H1></Center>"+
"</header><br>"+
"<Center>"+
"<Table width='594' border='0'>"+
"<tr><td>"+
"WHR"+
"</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"WTR"+
"</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"WPR"+
"</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"ZWR"+
"</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"STR</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"LDR</td><td>"+
"Value</td></tr><tr><td>"+
"RCR</td><td>"+
"Value"+
"</td></tr><tr><td>"+
"OHR"+
"</td><td>"+
"Value"+
"</td></tr></Table>"+
"<br>"+
"<form action = '#SHR' method=''>"+
"<div class='bottomYellow'>"+ 
 "<button type='submit' class='blueButtons'>Submit</button>"+ 
"</Center>"+
"</div>"+
"</form>"+
"</body>"
	
	
	return html;
}

function getSHR(){
	var html = "<header>"+
"<img src='images/logo.png'>"+
"<Center><H1><br>Surf Hazard Rating</span></H1></Center></header><br>"+
"<Center><p><span class='titles'>The Surf Hazard Rating is:</span></p></Center><br>"+
"<br>"+
"<br>"+
"<br>"+
"<Center>"+
"<Table width='20' border='2'>"+
"<tr>"+
"<td>"+
"<b><span style='font-size: 300%; padding:15px;'>67%</span></b>"+
"</td>"+
"</tr>"+
"</Table>"+
"<br>"+
"<br>"+
"<br>"+
"<br>"+
"<br>"+
"<br>"+
"<div class='bottomYellow'>"+
"<form action = 'index.html' method=''>"+
"<button type='submit' class='blueButtons'>Log Out</button>"+
 "</form>"+
 "</div>"+
"</Center>"
	
	
	return html;
}