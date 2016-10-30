function adminPageSelect() {
    if ($('#adminRadio1').is(":checked")) {
        window.location.hash = "#adminPasswordChange";
    } else if ($('#adminRadio2').is(":checked")) {
        window.location.hash = "#adminMetadata";
    } else if ($('#adminRadio3').is(":checked")) {
        window.location.hash = "#adminNewUser";
    }
}

//

function getFormMetaData() {
    var data1;
    var data2;
    var name = "<br>";
    var formType = "<br>"
    var raceDeets = "<br>";
    var raceTime = "<br>";
    var notify = -1;
    //Get ir form metadata
    var sql = "SELECT FIRST_NAME, LAST_NAME, SHR.RACE_ID, AGE_GROUP, CRAFT_TYPE, SHR.TIME " +
        "FROM SHR, RACE, SHRDS_USER " +
        "WHERE SHR.RACE_ID = RACE.RACE_ID AND SHR.USER_ID = SHRDS_USER.USER_ID";
    console.log("about to fire form metadata sql");
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        function (data) {
            //Get Prevailing form metadata
            sql = "SELECT FIRST_NAME, LAST_NAME, TIME " +
                "FROM SHR, SHRDS_USER " +
                "WHERE SHR.USER_ID = SHRDS_USER.USER_ID";
            console.log("about to fire callback2");
            MySql.Execute(
                dbconfig.host,
                dbconfig.dbUser,
                dbconfig.dbPassword,
                dbconfig.dbUser,
                sql,
                function (data) {
                    //SQL for Incident Data

                    if (data.Result != null && data.Result != "") {
                        for (var i = 0; i < data.Result.length; i++) {
                            name += data.Result[i].FIRST_NAME + " " + data.Result[i].LAST_NAME + "<br>";
                            formType += "Prevailing SHR" + "<br>";
                            raceDeets += "<br>";
                            raceTime += data.Result[i].TIME + "<br>";
                        }
                        document.getElementById("supervisingTSO").innerHTML += name;
                        document.getElementById("raceDetails").innerHTML += raceDeets;
                        document.getElementById("submittedTime").innerHTML += raceTime;
                        document.getElementById("formType").innerHTML += formType;

                    }
                }
            );
            if (data.Result != null && data.Result != "") {
                for (var i = 0; i < data.Result.length; i++) {
                    name += data.Result[i].FIRST_NAME + " " + data.Result[i].LAST_NAME + "<br>";
                    formType += "Event Specific SHR" + "<br>";
                    raceDeets += data.Result[i].AGE_GROUP + " " + data.Result[i].CRAFT_TYPE + "<br>";
                    raceTime += data.Result[i].TIME + "<br>";
                }


            }

        }
    );

}

//The following functions verify that the correct user data has been input, ensures the username is unique, then submits to the DB
function checkNewUserDetails() {
    $(".error").text("");
    //first check the user has filled all mandatory fields
    if (!checkMandatoryFieldsFilled()) {
        console.log("checking something in admin");
        $(".error").text("Please fill out all fields");
        return false;
    }
    //Now ensure the suer has selected both radio buttons
    if (!checkRadioButtons("TSOQualified") || !checkRadioButtons("AdminQualified")) {
        $(".error").text("Please select weather user is TSO and/or Admin Qualified");
        return false;
    }
    //Now check if the user number contains any non-numerical characters
    if (!verifyNonNumericCharacters(document.getElementById("newUserNum").value)) {
        $(".error").text("Please use a user number consisting of only numerical characters");
        return false;
    }
    if (document.getElementById("newPassword").value != document.getElementById("newPasswordConfirm").value) {
        $(".error").text("The password two passwords entered do not match, please try again");
        return false;
    }
    return true;
}

function submitNewUser() {
    if (checkNewUserDetails()) {
        var safeUserName = wash_SQL_string(document.getElementById("newUserNum").value)
            //First we check if that user ID is already in use
        var sql = "select USER_ID from SHRDS_USER where USER_ID ='" + safeUserName + "'";
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            sql,
            function (data) {
                //First Ensure the query succeded
                if (data.Success === true) {
                    //If we have a match that means that user ID already exists
                    if (data.Result != null && data.Result != "") {
                        $(".error").text("The user with that ID already exists");
                    } else {
                        // A user with that ID does not exist, so create one
                        sql =
                            "INSERT into SHRDS_USER values(" +
                            safeUserName + ",'" +
                            passwordHash(document.getElementById("newPassword").value, safeUserName) + "','" +
                            wash_SQL_string(document.getElementById("userFName").value) + "','" +
                            wash_SQL_string(document.getElementById("userLName").value) + "'," +
                            $("input:radio[name='TSOQualified']:checked").val() + "," +
                            $("input:radio[name='AdminQualified']:checked").val() + ")";
                        MySql.Execute(
                            dbconfig.host,
                            dbconfig.dbUser,
                            dbconfig.dbPassword,
                            dbconfig.dbUser,
                            sql,
                            function (data) {
                                function nest() {
                                    checkNewUser(safeUserName);
                                };
                                nest();
                            }
                        );
                    }
                }
            }
        );
    }

}


//Ensure All data fields are filled by the user
function checkMandatoryFieldsFilled() {
    if (document.getElementById("newUserNum").value == "" || document.getElementById("newPassword").value == "" || document.getElementById("userFName").value == "" || document.getElementById("userLName").value == "" || document.getElementById("userLName").value == "") {
        return false;
    } else {
        return true;
    }
}

function checkNewUser(userName) {
    var sql = "SELECT USER_ID from SHRDS_USER where USER_ID =" + userName;
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        function (data) {
            $(".message").text("Success. New user with id " + userName + " has been added to the system");
        }
    );

}
