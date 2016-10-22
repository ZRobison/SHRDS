var EventSpecificView = function () {

    this.render = function () {
        var header = "";
        if (app.SHRFlag == 2) {
            header = "Event specific SHR";
        } else {
            header = "Event specific Incident Report";
        }


        var body =

            "<div id='bigBlock'>" +
            "<div class='irTitles'>Arena:</div>" +
            "<select name='ESArena'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value=''>Arena 1</option>" +
            "<option value=''>Arena 2</option>" +
            "<option value=''>Arena 3</option>" +
            "<option value=''>Arena 4</option>" +
			"<option value=''>Arena 5</option>" +
			"<option value=''>Arena 6</option>" +
			"<option value=''>Arena 7</option>" +
			"<option value=''>Arena 8</option>" +
		    "<option value=''>Arena 9</option>" +
		    "<option value=''>Arena 10</option>" +
            "</select>" +

            "<div class='irTitles'>Age:</div>" +
            "<select name='ESAge'>" +
            "<option value='-1' selected>Under 13</option>" +
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
            "<select name='ESHeat'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +

            "<div class='irTitles'>Round:</div>" +
            "<select name='ESRound'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value=''>Round 1</option>" +
            "<option value=''>Round 2</option>" +
            "<option value=''>Round 3</option>" +
            "<option value=''>Round 4</option>" +
            "<option value=''>Round 5</option>" +
            "</select>" +

            "<div class='irTitles'>Final:</div>" +
			"<select name='ESFinalType'>" +
            "<option value='-1'selected>Select one</option>" +
            "<option value=''>Quater Final</option>" +
            "<option value=''>Semi Final</option>" +
            "<option value=''>Grand Final</option>" +
            "</select>" +
            
            "<div class='irTitles'>Craft Type:</div>" +
            "<select name='ESCraftType'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value=''>Ski</option>" +
            "<option value=''>Double Ski</option>" +
            "<option value=''>Board</option>" +
            "<option value=''>Boat</option>" +
            "</select>" +
			
			"<div class='irTitles'>In/Out:</div>" +
            "<div id='inlineOutIn'>" +
            "<input type ='radio' name='ESInOut' id='in'/>" +
            "Out" +
            "<input type ='radio' name='ESInOut' id='out'/>" +
            "In" +
            "<div>" +
            "<br>Beach/location:<input type = 'text' name='ESBeach'>" +
            "</div>";
			

           


        var footer =
            //THIS IS A BROKEN WAY OF DOING THIS, IF AN IR USES THIS FORM THEY START FILLING OUT AN SHR. Is this an old issue? 22/10/2016 
            "<form action= '' >" +
            "<button type='submit' class='blueButtons' onclick='getESValues()'>Next</button> " +
            "<button type='button' class='exitButton'>EXIT</button>" +
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

//routeIS();
