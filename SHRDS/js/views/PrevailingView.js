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

            "<p>Nearest Tides</p>" +
            "<div id='nearestTideBox>" +
            "<ul id='tidesListBox'><li>Time 1</li>" + //I think there is the time of the 2 nearest tides??
            "<li>Time 2</li>" +
            "<li>Height 1</li>" +
            "<li>Height 2</li></ul>" +
            "</div>" +

            "<div id='windDirBox'><p>Wind Direction</p>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio1' class='radio'/>" +
            "<label for='radio1'>North</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio2' class='radio'/>" +
            "<label for='radio2'>North East</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio3' class='radio'/>" +
            "<label for='radio3'>East</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio4' class='radio'/>" +
            "<label for='radio4'>South East</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio5' class='radio'/>" +
            "<label for='radio5'>South</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio6' class='radio'/>" +
            "<label for='radio6'>South West</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio7' class='radio'/>" +
            "<label for='radio7'>West</label></div>" +

            "<div class='radBut'><input type='radio' name='radio' id='radio8' class='radio'/>" +
            "<label for='radio8'>North West</label></div>" +

            "</div>";


        //DONT KNOW WHAT THESE INPUT BOXES ARE FOR, MAY NOT NEED THEM WITH AUTFILL DATA FROM BOM"<input type='text' name='text3'/>" +
        //"<input type='text' name='text3'/>" +

        $(".body").html(body);

        var footer =
            "<form action = 'index.html?#WHR' method='' onClick=''>" +
            "<button type='submit' class='blueButtons'>NEXT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>" +
            "</form>";

        $(".footer").html(footer);

    }

}
