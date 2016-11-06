var AdminSelectView = function () {


    this.render = function (type) {
        var self = this;

        switch (type) {
            case 'formSelect':
                getFormSelect();
                break;
            case 'resetPassword':
                getResetPassword();
                break;
            case 'metaData':
                getMetaData();
                break;
            case 'newUser':
                getCreateNewUser();
                break;
        }
    }
}


function getFormSelect() {

    var header = "Form Select";
    var body =

        "<div class='radBut'>" +
        "<input type='radio' name='adminRadio' id='adminRadio1' class='radio' value='checked' >" +
        "<label for='adminRadio1'>Password Reset</label></div>" +

        "<div class='radBut'>" +
        "<input type='radio' name='adminRadio' id='adminRadio2' class='radio' value='checked' >" +
        "<label for='adminRadio2'>Meta Data Review</label></div>" +

        "<div class='radBut'>" +
        "<input type='radio' name='adminRadio' id='adminRadio3' class='radio' value='checked' >" +
        "<label for='adminRadio3'>Add a New User</label></div>";

    var footer = "<button type='submit' class='blueButtons' id='submitBut' onclick='adminPageSelect()'>NEXT</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getResetPassword() {
    //To be filled later
    var header = "Password Reset";
    var body =
        "<div id='mainPassBlock'>" +
        "<p class='resetPassBlock'>User ID: </p><input type='text' name='fname' id = 'userID'><br>" +
        "<p class='resetPassBlock'>New Password: </p><input type='password' id='userPassword'><br>" +
        "<p class='resetPassBlock'>Confirm New Password: </p><input type='password' id='userPasswordConfirm'><br>" +
        "<div class ='message'></div>" +
        "<div class ='error'></div>" +
        "</div>";

    var footer = "<button type='submit' class='blueButtons' onclick='change_password()'>SUBMIT</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

}

function getMetaData() {
    //To be filled later
    var today = getDateTodayOrYesterday(0);
    var yesterday = getDateTodayOrYesterday(1);
    var header = "Completed Forms Meta Data";
    var body =
        "Date: <select name='dataReviewDate'>" +
        "<option value='" + today + "'>Today</option>" +
        "<option value='" + yesterday + "'>Yesterday</option></select>" +
        "Arena: <select name='arenaSelection'>" +
        "<option value='1, 2, 3, 4, 5, 6, 7, 8, 9, 10'>All Arenas</option>" +
        "<option value='1'>1</option>" +
        "<option value='2'>2</option>" +
        "<option value='3'>3</option>" +
        "<option value='4'>4</option>" +
        "<option value='5'>5</option>" +
        "<option value='6'>6</option>" +
        "<option value='7'>7</option></select>" +
        "<div class='tableData'></div>";
    //"<div id='totalForms' class='col-metadata'></div>";
    var footer = "<button type='submit' class='blueButtons' onclick='getFormMetaData()'>GET IT</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getCreateNewUser() {
    var header = "Create New Admin or TSO User";
    var body =
        "<p>User number: </p><input type='text' id='newUserNum'> <br>" +
        "<p>User Password: </p><input type='text' id='newPassword'> <br>" +
        "<p>Confirm Password: </p><input type='text' id='newPasswordConfirm'><br>" +
        "<p>First Name: </p><input type='text' id='userFName'><br>" +
        "<p>Last Name: </p><input type='text' id='userLName'><br>" +

        "<p>TSO Qualified: </p>" +

        "<div class='radBut'>" +
        "<input type ='radio' name='TSOQualified' class='radio' id='tsoTrue' value='TRUE'/>" +
        "<label for='tsoTrue'>Yes</label></div>" +

        "<div class='radBut'>" +
        "<input type ='radio' name='TSOQualified' class='radio' id='tsoFalse' value='FALSE'/>" +
        "<label for='tsoFalse'>No</label></div>" +

        "<p>Admin Qualified: </p>" +

        "<div class='radBut'>" +
        "<input type ='radio' name='AdminQualified' class='radio' id='adminTrue' value='TRUE'/>" +
        "<label for='adminTrue'>Yes</label></div> " +

        "<div class='radBut'>" +
        "<input type ='radio' name='AdminQualified' class='radio' id='adminFalse' value='FALSE'/>" +
        "<label for='adminFalse'>No</label></div>" +

        "<div class='error'></div>" +
        "<div class='message'></div>";


    var footer = "<button type='submit' class='blueButtons' onclick='submitNewUser()'>SUBMIT</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

}
