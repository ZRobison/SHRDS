var FormSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<div class='error'></div><div class='good'></div>" +
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio1' class='radio' value='checked' >" +
            "<label for='shrRadio1'>Prevailing Surf Hazard Rating</label></div>" +
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio2' class='radio' value='checked' >" +
            "<label for='shrRadio2'>Event Specific Surf Hazard Rating</label></div>";

        var footer = "<button type='submit' class='blueButtons' onclick='shrFormSelect()'>NEXT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>";


        console.log(app.prevSHRArrayUnfinished);



        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
        checkData();

    }
}


function checkData() {
    if (app.prevSHRArray.length == 0 && app.esSHRArray.length == 0) {
        //Think of something good to do	
    } else if (app.prevSHRArrayUnfinished.length == 0 && app.esSHRArrayUnfinished.length == 0) {
        $(".good").text("All data has been successfully sent to the server.");
    } else {
        $(".error").text("Some data you have collected is in the process of or could not be sent to the server. If this is disaplyed for more then 30 seconds check internet connection and press the sync button.");
    }
}
