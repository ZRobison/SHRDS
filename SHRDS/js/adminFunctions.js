function adminPageSelect() {
    if ($('#adminRadio1').is(":checked")) {
        window.location.hash = "#adminPasswordChange";
    } else if ($('#adminRadio2').is(":checked")) {
        window.location.hash = "#adminMetadata";
    } else if ($('#adminRadio3').is(":checked")) {
        window.location.hash = "#adminNewUser";
    }
}

//Variables to store return data
var dataPrev;
var dataES;
var dataIR;

function getFormMetaData() {
    console.log("in nest statment");


    var notify = -1;
    //Get ES SHR and ES IR form data
    var sql =
        "SELECT FIRST_NAME, LAST_NAME, SHR.RACE_ID, AGE_GROUP, CRAFT_TYPE, SHR.TIME, IR_FIRST_NAME, IR_LAST_NAME, INCIDENTS_REPORT.IN_OUT," + "SHR_TOTAL, ARENA, DNF ,FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, BROACH, INJURY_MINOR, INJURY_SERIOUS, " + "INJURY_SEVERE, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, " +
        "COLLISION_MINOR, COLLISION_SERIOUS " +
        "FROM SHR, RACE, SHRDS_USER, INCIDENTS_REPORT " +
        "WHERE SHR.RACE_ID = RACE.RACE_ID AND SHR.USER_ID = SHRDS_USER.USER_ID AND INCIDENTS_REPORT.USER_ID = SHR.USER_ID AND EVENT_SPECIFIC = TRUE";
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        function (data) {
            console.log(sql);

            function nest() {
                console.log("got ES data, now getting Prev Data");
                setESData(data);
                outputESData();
            };
            nest();
        });



}

function setESData(data) {
    dataES = data;
}

function outputESData() {
    var data = dataES;
    var name = "<br>";
    var totalSHR = "<br>";
    var raceDeets = "<br>";
    var raceTime = "<br>";
    var incidents = "<br>";
    var inOut = "<br>";
    var arena = "<br>";

    console.log(data)
    if (data.Result != null && data.Result != "") {
        for (var i = 0; i < data.Result.length; i++) {
            name += data.Result[i].FIRST_NAME + " " + data.Result[i].LAST_NAME + "<br>";
            totalSHR += data.Result[i].SHR_TOTAL + "<br>";
            incidents += data.Results[i].TOTAL_INCIDENTS + "<br>";
            arena += data.Results[i].ARENA + "<br>";
            inOut += data.Results[i].IN_OUT + "<br>";
            raceDeets += data.Result[i].AGE_GROUP + " " + data.Result[i].CRAFT_TYPE + "<br>";;
            raceTime += data.Result[i].TIME + "<br>";
        }
        document.getElementById("supervisingTSO").innerHTML += name;
        document.getElementById("totalSHR").innerHTML += totalSHR;
        document.getElementById("totalIncidents").innerHTML += incidents;
        document.getElementById("arena").innerHTML += arena;
        document.getElementById("inOut").innerHTML += inOut;
        document.getElementById("raceDetails").innerHTML += raceDeets;
        document.getElementById("submittedTime").innerHTML += raceTime;


    }
}

function getPrevSHRData() {
    //Get Prevailing form metadata
    var sql =
        "SELECT FIRST_NAME, LAST_NAME, TIME, TOTAL_SHR " +
        "FROM SHR, SHRDS_USER " +
        "WHERE SHR.USER_ID = SHRDS_USER.USER_ID";
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        function (data) {
            function nest() {
                dataPrev = data;
                outputPrevData(dataPrev);
            };
            nest();
        });
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
        $(".error").text("Please use a user value consisting of only numerical characters");
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
                        $(".error").text("A user with that ID already exists");
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
