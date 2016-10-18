var EventSpecificView = function () {

    this.render = function () {
        var header = "";
        if (app.SHRFlag == 2) {
            header = "Event specific SHR";
        } else {
            header = "Event specific Incident Report";
        }



        var body =

            "<div class='irTitles'>Arena:</div>" +
            "<div class='eventSpecificBlock'>" +
            "<select class='eventSpecificSelects'>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Arena 1</option>" +
            "<option value=''>Arena 2</option>" +
            "<option value=''>Arena 3</option>" +
            "<option value=''>Arena 4</option>" +
            "</select>" +

            "<div class='irTitles'>Age:</div>" +
            "<select class='eventSpecificSelects'>" +
            "<option value='' selected>Under 13</option>" +
            "<option value=''>Under 14</option>" +
            "<option value=''>Under 15</option>" +
            "<option value=''>Under 17</option>" +
            "<option value=''>Under 19</option>" +
            "<option value=''>open</option>" +
            "<option value=''>30-34</option>" +
            "<option value=''>35-39</option>" +
            "<option value=''>40-44</option>" +
            "<option value=''>45-49</option>" +
            "<option value=''>50-54</option>" +
            "<option value=''>55-59</option>" +
            "<option value=''>60-64</option>" +
            "<option value=''>65-69</option>" +
            "<option value=''>70+</option>" +
            "</select>" +
            "<div class='irTitles'>Heat:</div>" +
            "<select class='eventSpecificSelects'>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +
            "<div class='irTitles'>Round:</div>" +
            "<select class='eventSpecificSelects'>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +

            "<div class='eventRadios'>" +
            "<input type ='radio' name='' id=''/>" +
            "Quater Final" +
            "</div>" +

            "<div class='eventRadios'>" +
            " <input type ='radio' name='' id=''/>" +
            "Semi Final" +
            "</div>" +

            "<div class='eventRadios'>" +
            " <input type ='radio' name='' id=''/>" +
            " Grand Final" +
            " Craft type:" +
            "</div>" +

            "<select class='eventSpecificSelects'>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Ski</option>" +
            "<option value=''>Double Ski</option>" +
            "<option value=''>Board</option>" +
            "<option value=''>Boat</option>" +
            "</select>" +
            "<div class='irTitles'>Time:</div>" +
            //put time here

            "<div class='eventRadios'>" +
            "<div class='irTitles'>In/Out:</div>" +
            "<input type ='radio' name='inOut' id='in'/>" +
            "Out" +
            "<input type ='radio' name='' id='out'/>" +
            "In" +
            "</div>" +


            "beach/location:<input type = 'text' name='bl'>";

        var footer =
            //THIS IS A BROKEN WAY OF DOING THIS, IF AN IR USES THIS FORM THEY START FILLING OUT AN SHR. 
            "<form action= '' >" +
            "<button type='submit' class='blueButtons' onclick='routeIS()'>Next</button> " +
            "</form>" +
            "</div>";

        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }
}


function routeIS() {
    if (app.SHRFlag == 0) {
        location.href = 'index.html?#incident1';
    } else {
        location.href = 'index.html?#WHR';
    }
}
