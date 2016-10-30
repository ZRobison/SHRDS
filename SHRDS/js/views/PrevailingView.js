var PrevailingView = function () {


    this.render = function () {


        $(".heading").text("Prevailing Conditions");

        var body =

            "<div id='prevailingWrapper'> " +

            "<div id='windBox'>" +

            "<div class='textPrev'>Beach</div>" +
            "<div>" +
            "<input type='text' name='beachName' placeholder = 'Beach'>" +
            "</div>" +

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

            "</div>" + //wrapper

            "<div class='error'></div>";

        $(".body").html(body);

        addColon("tideTimeLow");
        addColon("tideTimeHigh");


        var footer =
            "<button onClick='getPrevailingValues()' class='blueButtons'>NEXT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>";

        $(".footer").html(footer);

    }

}
