var AdminSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<button type='submit'>Metadata Review</button>" +
            "<button type='submit'>Password Reset</button>";
        var footer = "";


        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);

    }
}
