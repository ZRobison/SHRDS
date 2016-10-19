var EventSpecificView = function () {

    this.render = function () {
        var header = "";
        if (app.SHRFlag == 2) {
            header = "Event specific SHR";
        } else {
            header = "Event specific Incident Report";
        }


        var body =
<<<<<<< HEAD
            "<ul>" +
			"<li>" +
            "Arena:" +
=======

            "<div id='bigBlock'>" +
            "<div class='irTitles'>Arena:</div>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<select>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Arena 1</option>" +
            "<option value=''>Arena 2</option>" +
            "<option value=''>Arena 3</option>" +
            "<option value=''>Arena 4</option>" +
            "</select>" +
<<<<<<< HEAD
            "</li>" +
			"<li>" +
            "   Age: " +
=======

            "<div class='irTitles'>Age:</div>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<select>" +
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
<<<<<<< HEAD
			"</li>" +
			"<li>" +
            "Heat:" +
=======

            "<div class='irTitles'>Heat:</div>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<select>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +
<<<<<<< HEAD
			"</li>" +
			"<li>" +
            "Round:" +
=======

            "<div class='irTitles'>Round:</div>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<select>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +
<<<<<<< HEAD
			"</li>" +
			"<li>" +
            "<input type ='radio' name='' id=''/>" +
=======

            "<div class='eventRadios'>" +
            "<input type ='radio' name='raceTypeRadio' id=''/>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "Quater Final" +
            "</div>" +

            "<div class='eventRadios'>" +
            " <input type ='radio' name='raceTypeRadio' id=''/>" +
            "Semi Final" +
            "</div>" +

            "<div class='eventRadios'>" +
            " <input type ='radio' name='raceTypeRadio' id=''/>" +
            " Grand Final" +
<<<<<<< HEAD
			"</li>" +
			"<li>" +
            "Craft type:" +
=======
            " Craft Type:" +
            "</div>" +

>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<select>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Ski</option>" +
            "<option value=''>Double Ski</option>" +
            "<option value=''>Board</option>" +
            "<option value=''>Boat</option>" +
            "</select>" +
<<<<<<< HEAD
			"</li>" +
			"<li>" +
            "Time:" +
            //put time here
            "</li>" +
			"<li>" +
            "in/out:" +
=======
            "<div class='irTitles'>Time:</div><br>" +
            //put time here

            "<div class='irTitles'>In/Out:</div>" +
            "<div id='inlineOutIn'>" +
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812
            "<input type ='radio' name='inOut' id='in'/>" +
			"</li>" +
			"<li>" +
            "Out" +
            "<input type ='radio' name='' id='out'/>" +
			"</li>" +
			"<li>" +
            "In" +
<<<<<<< HEAD
            "beach/location:<input type = 'text' name='bl'>" +
			"</li>" +
			"</ul>";
=======
            "<div>" +


            "<br>Beach/location:<input type = 'text' name='bl'>" +
            "</div>";
>>>>>>> e1a3da6d781953c4f77bf01924b57472c24b4812

        var footer =
            //THIS IS A BROKEN WAY OF DOING THIS, IF AN IR USES THIS FORM THEY START FILLING OUT AN SHR. 
            "<form action= '' >" +
            "<button type='submit' class='blueButtons' onclick='routeIS()'>Next</button> " +
            "</form>";


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
