var EventSpecificView = function () {

    this.render = function () {
        var header = "Event specific SHR";


        var body =

            "Arena:" +
            "<select>" +
            "<option value='' selected>select one</option>" +
            "<option value=''>Arena 1</option>" +
            "<option value=''>Arena 2</option>" +
            "<option value=''>Arena 3</option>" +
            "<option value=''>Arena 4</option>" +
            "</select>" +

            "   Age: " +
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
            "Heat:" +
            "<select>" +
            "<option value='' selected>select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +
            "Round:" +
            "<select>" +
            "<option value='' selected>select one</option>" +
            "<option value=''>Heat 1</option>" +
            "<option value=''>Heat 2</option>" +
            "<option value=''>Heat 3</option>" +
            "<option value=''>Heat 4</option>" +
            "<option value=''>Heat 5</option>" +
            "</select>" +
            "<input type ='radio' name='' id=''/>" +
            "Quater Final" +
            " <input type ='radio' name='' id=''/>" +
            "Semi Final" +
            " <input type ='radio' name='' id=''/>" +
            " Grand Final" +
            "       Craft type:" +
            "<select>" +
            "<option value='' selected>Select one</option>" +
            "<option value=''>Ski</option>" +
            "<option value=''>Double Ski</option>" +
            "<option value=''>Board</option>" +
            "<option value=''>Boat</option>" +
            "</select>" +
            "Time:" +
            //put time here

            "in/out:" +
            "<input type ='radio' name='inOut' id='in'/>" +
            "Out" +
            "<input type ='radio' name='' id='out'/>" +
            "In" +
            "beach/location:<input type = 'text' name='bl'>";
        var footer =
<<<<<<< HEAD
<<<<<<< HEAD
            "<form action="
        ">" +
        "beach/location:<input type = 'text' name='bl'>" +      
        "<button type='button' class='blueButtons'>NEXT</button> " +
        "</form>";
=======

>>>>>>> df711e87dbfc559d9fa322beef700e1f050e5394
=======

>>>>>>> 26861e0cc379f520dde0add5d02ce931c996f0bf

        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }
}
