var PrevailingView = function () {


    this.render = function () {


        $(".heading").text("Prevailing Conditions");

        var body =

            "<div class='error'></div>" +
            "<div id='prevailingWrapper'> " +

            "<div id='windBox'>" +

            "<div class='textPrev' id='beachName'>Beach</div>" +
            "<div>" +

            "<input type='text' name='beaches' id='autocomplete' >" +
            "</div>" +


            "<div class='textPrev'>Arena:</div>" +
            "<select name='prevArena'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='1'>Arena 1</option>" +
            "<option value='2'>Arena 2</option>" +
            "<option value='3'>Arena 3</option>" +
            "<option value='4'>Arena 4</option>" +
            "<option value='5'>Arena 5</option>" +
            "<option value='6'>Arena 6</option>" +
            "<option value='7'>Arena 7</option>" +
            "<option value='8'>Arena 8</option>" +
            "<option value='9'>Arena 9</option>" +
            "<option value='10'>Arena 10</option>" +
            "</select>" +

            "<div class='textPrev'>Wind Direction</div>" +

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

            "<div class='textPrev'>Wind Speed</div><br><br>" +
            "<input type='text' name='windSpeed' placeholder=''>" +

            "</div>" + //wind

            "<div id='tideBox'>" +

            "<div class='textPrev'>Nearest Tides</div>" +
            "<div class='textPrev'>Low tide time</div>" +
            "<input type='text' name='tideTimeLow' placeholder='HHMM'>'" + //I think there is the time of the 2 nearest tides??
            "<div class='textPrev'>High tide time</div>" +
            "<input type='text' name='tideTimeHigh' placeholder='HHMM'>" +
            "<div class='textPrev'>Low tide Height</div>" +
            "<input type='text' name='tideHieghtLow' placeholder='Height'>" +
            "<div class='textPrev'>High tide Height</div>" +
            "<input type='text' name='tideHieghtHigh' placeholder='Height'>" +

            "</div>" + //tides

            "</div>"; //wrapper


        $(".body").html(body);

        addColon("tideTimeLow");
        addColon("tideTimeHigh");
        autoFillBeach("beaches");

        var footer =
            "<button onClick='getPrevailingValues()' class='blueButtons'>NEXT</button>" +
            "<button type='button' onclick='window.location.replace(\"index.html#formSelect\")' class='exitButton'>EXIT</button>";

        $(".footer").html(footer);

    }

}
