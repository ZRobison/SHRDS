var PrevailingView = function () {


    this.render = function () {


        $(".heading").text("Prevailing Conditions");

        var body =
            "<div id='beachBox'><p>Beach<p>" +
            "<select name='prevailingBeach'>" +
            "<option value='-1'>Select One</option>" +
            "<option value='Beach1'>Beach1</option>" +
            "<option value='Beach2'>Beach2</option>" +
            "<option value='Beach3'>Beach3</option>" +
            "<option value='Beach4'>Beach4</option>" +
            "</select>" +
            "</div>" +

			"<div id='windDirBox'><p>Wind Direction<p>" +
            "<select name='windDirection'>" +
            "<option value='-1'>Select One</option>" +
            "<option value='North'>North</option>" +
            "<option value='North East'>North East</option>" +
            "<option value='East'>East</option>" +
            "<option value='South East'>South East</option>" +
			"<option value='South'>South</option>" +
			"<option value='South West'>South West</option>" +
			"<option value='West'>West</option>" +
			"<option value='North West'>North West</option>" +
            "</select>" +
            "</div>" +
			
            "<div id='windDirBox'><p>Wind Speed</p>" +
			"<input type='text' name='windSpeed' placeholder='10 Knotts'>"+
            "</div>" +

            
            "<div id='nearestTideBox'>" +
			"<p>Nearest Tides</p>" +
            "<ul id='tidesListBox'><li>Low tide time</li>" +
			"<li><input type='text' name='tideTimeLow' placeholder='hr:mi:se'></li>"+			//I think there is the time of the 2 nearest tides??
            "<li>High tide time</li>" +
			"<li><input type='text' name='tideTimeHigh' placeholder='hr:mi:se'></li>"+
            "<li>Low tide Height</li>" +
			"<li><input type='text' name='tideHieghtLow' placeholder='Height'></li>"+
            "<li>High tide Height</li>" +
			"<li><input type='text' name='tideHieghtHigh' placeholder='Height'></li></ul>"+
            "</div>"+
			
			"<div class='error'></div>";


        //DONT KNOW WHAT THESE INPUT BOXES ARE FOR, MAY NOT NEED THEM WITH AUTFILL DATA FROM BOM"<input type='text' name='text3'/>" +
        //"<input type='text' name='text3'/>" +

        $(".body").html(body);

        var footer =
            "<form action = '' method='' onClick=''>" +
            "<button action = 'index.html?#WHR' type='submit' onClick='getPrevailingValues()' class='blueButtons'>NEXT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>" +
            "</form>";

        $(".footer").html(footer);

    }

}
