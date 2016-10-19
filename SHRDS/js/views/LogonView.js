var LogonView = function () {

    this.render = function () {
        var header = "SLSA SHRDS";

        var body =		
            "<div class='radBut'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio1' class='radio' value='checked' >" +
            "<label for='radio1'>TSO</label>" +
            "</div>" +

            "<div class='radBut'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio2' class='radio' value='checked'/>" +
            "<label for='radio2'>Incident Report</label>" +
            "</div>" +

            "<div class='radBut'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio3' class='radio' value='checked'/>" +
            "<label for='radio3'>Admin</label>" +
            "</div>" +
            "<div id='forming'></div>" +
			"<div id='logonmessage'></div>" +
            "<div class ='error'></div>" ;
		
		


        $(".heading").text(header);
        $(".body").html(body);

    }		
}

function selected() {
    if ($('#radio1').is(":checked")) {
        var forming = "<form action = '' id='submitForm1' method=''>" +
            "TSO Reference Number: <br>" +
            "<input type='text' name='' id='username'><br>" +
            "Password: <br>" +
            "<input type='password' name='' id='password'><br>" +
            "</form>";
        $("#forming").html(forming);
    } else if ($('#radio2').is(":checked")) {
        var forming = "<form action = '' method='' id='submitForm1'>" +
            "Supervisors Reference Number: <br>" +
            "<input type='text' name='' id='username'><br>";
        $("#forming").html(forming);
    } else if ($('#radio3').is(":checked")) {
        var forming = "<form action = '' method='' id='submitForm1'>" +
            "Admin User Name <br>" +
            "<input type='text' name='' id='username'><br>" +
            "Password: <br>" +
            "<input type='password' name='' id='password'><br>" +
            "</form>";
        $("#forming").html(forming);
    }
    var footer =
        "<button type='submit' class='blueButtons' id='loginBut' onclick='verify_user()'>LOGIN</button>";
    $(".footer").html(footer);	
}
