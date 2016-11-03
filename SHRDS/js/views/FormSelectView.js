var FormSelectView = function () {
    this.render = function () {
        var header = "Form Select";
        var body =
            "<div class='error'></div><div class='sync'></div><div class='good'></div>" +
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio1' class='radio' value='checked' >" +
            "<label for='shrRadio1'>Prevailing Surf Hazard Rating</label></div>" +
            "<div class='formSelRad'>" +
            "<input type='radio' name='shrRadio' id='shrRadio2' class='radio' value='checked' >" +
            "<label for='shrRadio2'>Event Specific Surf Hazard Rating</label></div>";

        var footer = "<button type='submit' id='moveRight' class='blueButtons' onclick='shrFormSelect()'>NEXT</button>" +
            "<button type='button' onclick='window.location.replace(\"index.html\")' class='exitButton'>EXIT</button>";

		


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
		$(".sync").text("");
    } else {
       $(".good").text("");
		var count =  (app.prevSHRArrayUnfinished.length + app.esSHRArrayUnfinished.length)
        $(".error").text("You have "+ count +" form/s that could not be sent to the server. Please check internet connection and press the sync button.");
		$(".sync").html("<button type='button' onclick='sync();' class='syncButton'>SYNC</button>");
 }
}
