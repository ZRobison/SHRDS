var FormSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<div id='radBut'>" +
            "<input type='radio' name='shrRadio' id='shrRadio1' class='radio' value='checked' >" +
            "<label for='shrRadio1'>Prevailing Surf Hazard Rating</label></div>" +
            "<div id='radBut'>" +
            "<input type='radio' name='shrRadio' id='shrRadio2' class='radio' value='checked' >" +
            "<label for='shrRadio2'>Event Specific Surf Hazard Rating</label></div>" ;      

        var footer = "<button type='submit' class='blueButtons' id='submitBut' onclick='shrFormSelect()'>NEXT</button>";


        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }
}
