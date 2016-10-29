var LogonView = function () {

    this.render = function () {
        var header = "SLSA SHRDS";

        var body =
            "<div class='radBut'>" +
            "<div class='formSelRad'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio1' class='radio' value='checked' >" +
            "<label for='radio1'>TSO</label></div>" +
            "</div>" +

            "<div class='radBut'>" +
            "<div class='formSelRad'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio2' class='radio' value='checked'/>" +
            "<label for='radio2'>Incident Report</label></div>" +
            "</div>" +

            "<div class='radBut'>" +
            "<div class='formSelRad'>" +
            "<input onClick='selected()' type='radio' name='radio' id='radio3' class='radio' value='checked'/>" +
            "<label for='radio3'>Admin</label></div>" +
            "</div>" +
            "<div id='forming'></div>" +
            "<div id='logonmessage'></div>" +
            "<div class ='error'></div>";




        $(".heading").text(header);
        $(".body").html(body);

    }
}

function selected() {
    if ($('#radio1').is(":checked")) {
        var forming = "<form action = '' id='submitForm1' method=''>" +
            "<div class='loginText'>TSO Reference Number: </div><br>" +
            "<input type='text' name='' id='username'><br>" +
            "<div class='loginText'>Password: </div><br>" +
            "<input type='password' name='' id='password'><br>" +
            "</form>";
        $("#forming").html(forming);
    } else if ($('#radio2').is(":checked")) {
        var forming = "<form action = '' method='' id='submitForm1'>" +
            "<div class='loginText'>Supervisors Reference Number: </div><br>" +
            "<input type='text' name='' id='username'><br>" +
            "<div class='loginText'>First Name: </div><br>" +
            "<input type='text' name='' id='fname'><br>" +
            "<div class='loginText'>Last Name: </div><br>" +
            "<input type='text' name='' id='lname'><br>" +
            "<div class='loginText'>Contact Email: </div><br>" +
            "<input type='text' name='' id='email'>";

        $("#forming").html(forming);
    } else if ($('#radio3').is(":checked")) {
        var forming = "<form action = '' method='' id='submitForm1'>" +
            "<div class='loginText'>Admin User Name </div><br>" +
            "<input type='text' name='' id='username'><br>" +
            "<div class='loginText'>Password: </div><br>" +
            "<input type='password' name='' id='password'><br>" +
            "</form>";
        $("#forming").html(forming);
    }
    var footer =
        "<button type='submit' class='blueButtons' id='loginBut' onclick='verify_user()'>LOGIN</button>";
    $(".footer").html(footer);
}
