var PrevailingView = function(){

 
	this.render = function() {

		
		$(".heading").text("Prevailing Conditions");

  var body=
    "<div id='beachBox'><p>Beach<p>" +
      "<select name='select' id='myList'>" +
      "<option value='1'>Select One</option>" +
      "<option value='2'>Beach1</option>" +
      "<option value='3'>Beach2</option>" +
      "<option value='4'>Beach3</option>" +
      "<option value='5'>Beach4</option>" +
    "</select>"+
    "</div>"+
      "<div id='windSpeedBox><p>Wind Speed</p>" +
		"<p>We will fill this windspeed from BOM later</p>" +
      "</div>"+

		"<div id='nearestTideBox>"+
            "<p>Nearest Tides</p>" +   
            "<ul><li>Time1</li>" +    //I think there is the time of the 2 nearest tides??
            "<li>Time2</li>" + 
            "<li>Height1</li>" +
			"<li>Height2</li></ul>" +
            "</div>"+
      "<div id='windDirBox'><p>Wind Direction</p>" +
            "<input type='radio' name='radio' id='radio1' class='radio'/>" +
            "<label for='radio1'>North</label>" +
            "<input type='radio' name='radio' id='radio2' class='radio'/>" +
            "<label for='radio2'>North East</label>" +
            "<input type='radio' name='radio' id='radio3' class='radio'/>" +
            "<label for='radio3'>East</label>" +
            "<input type='radio' name='radio' id='radio4' class='radio'/>" +
            "<label for='radio4'>South East</label>" +
            "<input type='radio' name='radio' id='radio5' class='radio'/>" +
            "<label for='radio5'>South</label>" +
            "<input type='radio' name='radio' id='radio6' class='radio'/>" +
            "<label for='radio6'>South West</label>" +
            "<input type='radio' name='radio' id='radio7' class='radio'/>" +
            "<label for='radio7'>West</label>" +
            "<input type='radio' name='radio' id='radio8' class='radio'/>" +
            "<label for='radio8'>North West</label>" +
            "</div>";
        
            
            //DONT KNOW WHAT THESE INPUT BOXES ARE FOR, MAY NOT NEED THEM WITH AUTFILL DATA FROM BOM"<input type='text' name='text3'/>" +
            //"<input type='text' name='text3'/>" +
		
		$(".body").html(body);
		
		var footer = 
			"<form action = 'index.html?#WHR' method='' onClick=''>" +
			"<button type='submit' class='blueButtons'>Next</button>" +
			"</form>";
			
			$(".footer").html(footer);
			
	}

}

