var FormSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<button type='submit'>Surf Hazard Rating Prevailing</button>" +
            "<button type='submit'>Surf Hazard Rating Event Specific</button>";


        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }
}
