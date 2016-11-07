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

            "<div class='irTitles'>Age:</div>" +
            "<select name='ESAge'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='Under 13'>Under 13</option>" +
            "<option value='Under 14'>Under 14</option>" +
            "<option value='Under 15'>Under 15</option>" +
            "<option value='Under 17'>Under 17</option>" +
            "<option value='Under 19'>Under 19</option>" +
            "<option value='30-34'>30-34</option>" +
            "<option value='35-39'>35-39</option>" +
            "<option value='40-44'>40-44</option>" +
            "<option value='45-49'>45-49</option>" +
            "<option value='50-54'>50-54</option>" +
            "<option value='55-59'>55-59</option>" +
            "<option value='60-64'>60-64</option>" +
            "<option value='65-69'>65-69</option>" +
            "<option value='70+'>70+</option>" +
            "<option value='open'>Open</option>" +
            "</select>" +


            "<div class='irTitles'>Final:</div>" +
            "<select name='ESFinalType' onChange='updateForm()'>" +
            "<option value='-1'selected>Select one</option>" +
            "<option value='Qualifier'>Qualifier</option>" +
            "<option value='Quarter Final'>Quarter Final</option>" +
            "<option value='Semi Final'>Semi Final</option>" +
            "<option value='Grand Final'>Grand Final</option>" +
            "</select>" +
            "<div class='disapear'>" +
            "<div class='irTitles '>Heat:</div>" +
            "<input type = 'text' name='ESHeat'>" +

            "<div class='irTitles'>Round:</div>" +
            "<input type = 'text' name='ESRound'>" +
            "</div>" +
            "</div>" +
            "<div class='irTitles'>Craft Type:</div>" +
            "<select name='ESCraftType'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='Ski'>Ski</option>" +
            "<option value='Double Ski'>Double Ski</option>" +
            "<option value='Board'>Board</option>" +
            "<option value='Boat'>Boat</option>" +
            "<option value='N/A'>N/A</option>" +
            "</select>" +

            "<div class='irTitles'>Gender:</div>" +
            "<select name='ESGender'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='M'>Male</option>" +
            "<option value='F'>Female</option>" +
            "</select>" +

            "<div class='check'><div class='irTitles'>In/Out:</div></div>" +
            "<div class='inlineOutIn'></div>" +
            "<div>" +
            "<br>Beach:" +
            "<input type='text' name='ESBeach' id='autocomplete' >" +
            "<datalist id='json-beachList' ></datalist>" +
            "</div>" +
            "<div class='error'></div>";


        if (app.SHRFlag == 2) {
            var footer =
                "<button type='submit' class='blueButtons' onclick='getESValues()'>NEXT</button> " +
                "<button type='button' onclick='window.location.replace(\"index.html#formSelect\")' class='exitButton'>EXIT</button>";
        } else {
            var footer =
                "<button type='submit' class='blueButtons' onclick='getESValues()'>NEXT</button> " +
                "<button type='button' onclick='window.location.replace(\"index.html#irHome\")' class='exitButton'>EXIT</button>";
        }


        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
        autoFillBeach("ESBeach");

        if (app.SHRFlag == 2) {

            $(".inlineOutIn").html("<input type ='radio' name='ESInOut' id='in' ><label for='in'>IN</label>" +

                "<input type ='radio' name='ESInOut' id='out' ><label for='out'>OUT</label>");
        } else {
            $(".check").text("");
        }
    }
}

function routeIS() {
    if (app.SHRFlag == 0) {
        window.location.hash = "#incident1";
    } else {
        window.location.hash = "#WHR";
    }
}
