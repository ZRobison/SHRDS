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
                "<div class ='message'></div>";
            var footer = "<button type='submit' class='blueButtons' onclick='change_password()'>Submit</button>";

            $(".heading").text(header);
            $(".body").html(body);
            $(".footer").html(footer);

        }

        function getMetaData() {
            //To be filled later
            var header = "Password Reset";
            var body = "fill later";
            var footer = "submit button";

            $(".heading").text(header);
            $(".body").html(body);
            $(".footer").html(footer);
        }

    }
}
