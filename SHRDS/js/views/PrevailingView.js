var PrevailingView = function () {


    this.render = function () {


        $(".heading").text("Prevailing Conditions");

        var body =
            "<div id='beachBox'><p>Beach<p>" +
            "<select name='prevailingBeach'>" +
            "<option value='1'>Select One</option>" +
            "<option value='2'>Beach1</option>" +
            "<option value='3'>Beach2</option>" +
            "<option value='4'>Beach3</option>" +
            "<option value='5'>Beach4</option>" +
            "</select>" +
            "</div><br>" +
            "<div id='windSpeedBox><p>Wind Speed</p>" +
            "<p>We will fill this windspeed from BOM later</p>" +
            "</div>" +
			
			"<div id='windDirBox'><p>Wind Direction<p>" +
            "<select name='prevailingBeach'>" +
            "<option value='6'>Select One</option>" +
            "<option value='7'>North</option>" +
            "<option value='8'>North East</option>" +
            "<option value='9'>East</option>" +
            "<option value='10'>South East</option>" +
			"<option value='11'>South</option>" +
			"<option value='12'>South West</option>" +
			"<option value='13'>West</option>" +
			"<option value='14'>North West</option>" +
            "</select>" +
            "</div><br>" +
            "<div id='windSpeedBox><p>Wind Speed</p>" +
            "<p>We will fill this windspeed from BOM later</p>" +
            "</div>" +

            "<p>Nearest Tides</p>" +
            "<div id='nearestTideBox>" +
            "<ul id='tidesListBox'><li>Low tide time</li>" +
			"<li><input type='text' name=''placeholder='hr:mi:se'></li>"+			//I think there is the time of the 2 nearest tides??
            "<li>High tide time</li>" +
			"<li><input type='text' name=''placeholder='hr:mi:se'></li>"+
            "<li>Low tide Height</li>" +
			"<li><input type='text' name=''placeholder='Height'></li>"+
            "<li>High tide Height</li>" +
			"<li><input type='text' name=''placeholder='Height'></li></ul>"+
            "</div>";


        //DONT KNOW WHAT THESE INPUT BOXES ARE FOR, MAY NOT NEED THEM WITH AUTFILL DATA FROM BOM"<input type='text' name='text3'/>" +
        //"<input type='text' name='text3'/>" +

        $(".body").html(body);

        var footer =
            "<form action = 'index.html?#WHR' method='' onClick=''>" +
            "<button action = 'index.html?#WHR' type='submit' onClick='prevailingBeachValue()' class='blueButtons'>NEXT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>" +
            "</form>";

        $(".footer").html(footer);

    }

}
