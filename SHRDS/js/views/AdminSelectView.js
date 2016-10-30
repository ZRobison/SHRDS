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
        }


        function getFormSelect() {

            var header = "Form Select";
            var body =
                "<div class='radBut'>" +
                "<input type='radio' name='adminRadio' id='adminRadio1' class='radio' value='checked' >" +
                "<label for='adminRadio1'>Password Reset</label></div>" +
                "<div class'radBut'>" +
                "<input type='radio' name='adminRadio' id='adminRadio2' class='radio' value='checked' >" +
                "<label for='adminRadio2'>Meta Data Review</label></div>";

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
            var header = "Completed Forms Meta Data";
            var body =
                "Toal Number of Forms Submitted Today: <div id='totalForms'></div><br>" +
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

    }
}
