function change_password() {
    //First clear up any leftover error messages
    $(".error").text("");
    if (document.getElementById("userID").value == "" || document.getElementById("userPassword").value == "") {
        $(".error").text("Error: Please enter a username and new password");
        return;
    } else if (document.getElementById("userPassword").value != document.getElementById("userPasswordConfirm").value) {
        $(".error").text("Error: Those passwords do not match, try again");
        return;
    }
    //TO DO: An update statement does not return anything using this mysql.js library. Maybe imbed a select in the upsate to force a data return
    password = passwordHash(document.getElementById("userPassword").value, document.getElementById("userID").value);
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        "SELECT USER_ID FROM SHRDS_USER WHERE USER_ID ='" + document.getElementById("userID").value + "'",
        function (data) {
            if (data.Success === true) {
                console.log(JSON.stringify(data));
                //If that user exists, continue with the password change
                if (data.Result[0] != null && data.Result[0] != "") {
                    if (data.Result[0].USER_ID == document.getElementById("userID").value) {
                        MySql.Execute(
                            dbconfig.host,
                            dbconfig.dbUser,
                            dbconfig.dbPassword,
                            dbconfig.dbUser,
                            "update SHRDS_USER set PASSWORD ='" + password + "' where USER_ID ='" + document.getElementById("userID").value + "'",
                            function (data) {
                                console.log(JSON.stringify(data));
                            }

                        );
                    }
                    $(".message").text("Success: You have changed the password of user: " + document.getElementById("userID").value);
                } else {
                    $(".message").text("That is not a valid user ID");
                }
            }
        }
    );


}
