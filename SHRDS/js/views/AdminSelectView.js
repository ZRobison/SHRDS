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
        "<div class'radBut'>" +
        "<input type='radio' name='adminRadio' id='adminRadio2' class='radio' value='checked' >" +
        "<label for='adminRadio2'>Meta Data Review</label></div>" +
        "<div class'radBut'>" +
        "<input type='radio' name='adminRadio' id='adminRadio3' class='radio' value='checked' >" +
        "<label for='adminRadio3'>Add a New User</label></div>";

    var footer = "<button type='submit' class='blueButtons' id='submitBut' onclick='adminPageSelect()'>Next</button>";


    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getResetPassword() {
    //To be filled later
    var header = "Password Reset";
    var body =
        "User ID: <input type='text' name='fname' id = 'userID'><br>" +
        "New Password: <input type='password' id='userPassword'><br>" +
        "Confirm New Password: <input type='password' id='userPasswordConfirm'><br>" +
        "<div class ='message'></div>" +
        "<div class ='error'></div";

    var footer = "<button type='submit' class='blueButtons' onclick='change_password()'>Submit</button>";

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
        "<option value='1'>2</option>" +
        "<option value='3'>3</option>" +
        "<option value='4'>4</option>" +
        "<option value='5'>5</option>" +
        "<option value='6'>6</option>" +
        "<option value='7'>7</option></select>" +
        "<div id='supervisingTSO' class='col-metadata'>Supervising TSO</div>" +
        "<div id='formType' class='col-metadata'>Form Type</div>" +
        "<div id='submittedTime' class='col-metadata'>Submission Time</div>" +
        "<div id='raceDetails' class='col-metadata'>Race Details</div>";
    //"<div id='totalForms' class='col-metadata'></div>";
    var footer = "<button type='submit' class='blueButtons' onclick='getFormMetaData()'>Get It</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);
}

function getCreateNewUser() {
    var header = "Create New Admin or TSO User";
    var body =
        "User number: <input type='text' id='newUserNum'> <br>" +
        "User Password: <input type='text' id='newPassword'> <br>" +
        "Confirm Password: <input type='text' id='newPasswordConfirm'><br>" +
        "First Name: <input type='text' id='userFName'><br>" +
        "Last Name: <input type='text' id='userLName'><br>" +
        "TSO Qualified: <div class='radBut'><input type ='radio' name='TSOQualified' id='tsoTrue' value='TRUE'/><label for='tsoTrue'>Yes</label></div>" +
        "<div class='radBut'><input type ='radio' name='TSOQualified' id='tsoFalse' value='FALSE'/><label for='tsoFalse'>No</label></div>" +
        "Admin Qualified: <div class='radBut'><input type ='radio' name='AdminQualified' id='adminTrue' value='TRUE'/><label for='adminTrue'>Yes</label></div> " +
        "<div class='radBut'><input type ='radio' name='AdminQualified' id='adminFalse' value='FALSE'/><label for='adminFalse'>No</label></div>" +
        "<div class='error'></div>" +
        "<div class='message'></div>";


    var footer = "<button type='submit' class='blueButtons' onclick='submitNewUser()'>Submit</button>";

    $(".heading").text(header);
    $(".body").html(body);
    $(".footer").html(footer);

}
