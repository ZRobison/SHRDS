var FormSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio1' class='radio' value='checked' >" +
            "<label for='shrRadio1'>Prevailing Surf Hazard Rating</label></div>" +
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio2' class='radio' value='checked' >" +
            "<label for='shrRadio2'>Event Specific Surf Hazard Rating</label></div>";

        var footer = "<button type='submit' class='blueButtons' onclick='shrFormSelect()'>NEXT</button>" +
        "<button type='button' class='exitButton'>EXIT</button>" ;

        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }
}