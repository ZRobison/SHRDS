var loginSuccess = -1;

function verify_user() {
    console.log("doing verify user function");

    $('#logonmessage').text("Loading... (If takes more the 30 seconds check internet connection and try again.)");
    $(".error").text("");

    if (document.getElementById("username").value == "") {
        $(".error").text("Please enter a user ID");
        return;
    }
    //TSO selected
    if ($('#radio1').is(":checked")) {
        //dummy test db
        var password = passwordHash(document.getElementById("password").value, document.getElementById("username").value);
        MySql.Execute(dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            "select USER_ID, TSO_QUALIFIED from SHRDS_USER where USER_ID ='" + document.getElementById("username").value + "' and PASSWORD ='" + password + "'",
            function (data) {
                //First Ensure the query succeded
                if (data.Success == true) {
                    //If we have a match that means the user has the correct credentials
                    if (data.Result != null && data.Result != "") {

                        //Also ensure that they are TSO certified
                        if (data.Result[0].TSO_QUALIFIED == true) {
                            app.loginData.pID = data.Result[0].USER_ID;
                            app.loginData.pTSOStatus = true;
                            app.loginData.pAdminStatus = false;
                            window.location.hash = "#formSelect";
                        } else {
                            $(".error").text("You are not certified to log in as a TSO");
                            $('#logonmessage').text("");
                        }
                    }
                    //Otherwise there is a match for the user number in the DB
                    else {
                        //                        loginSuccess = 20;
                        //                        console.log(loginSuccess);
                        $(".error").text("Error: That username and password combination is incorrect");
                        $('#logonmessage').text("");
                    }
                } else {
                    $(".error").text("Error: Database Connection Failure: For initial login you need an internet connection");
                    $('#logonmessage').text("");
                }
            });
    }
    //Incident Selected
    else if ($('#radio2').is(":checked")) {
        app.SHRFlag = 0;
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            "select USER_ID from SHRDS_USER where USER_ID ='" + document.getElementById("username").value + "'",
            function (data) {
                //First Ensure the query succeded
                console.log(JSON.stringify(data));
                if (data.Success === true) {
                    //If we have a match that means the user has the correct credentials
                    if (data.Result != null && data.Result != "") {
                        app.loginData.pID = data.Result[0].USER_ID
                        console.log("current login id is: " + app.loginData.pID);
                        app.loginData.pTSOStatus = false;
                        app.loginData.pAdminStatus = false;
                        window.location.hash = "#eventSpecific";
                    } else {
                        $(".error").text("That user ID does not exists");
                        $('#logonmessage').text("");
                    }
                }
                //Otherwise there is a match for the user number in the DB
                else {
                    $(".error").text("Error: Database Connection Failure: For initial login you need an internet connection");
                    $('#logonmessage').text("");
                }
            }
        );

    }
    //Admin Selected
    else {
        var password = passwordHash(document.getElementById("password").value, document.getElementById("username").value);
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            "select USER_ID, ADMIN_QUALIFIED from SHRDS_USER where USER_ID ='" + document.getElementById("username").value + "' and PASSWORD ='" + password + "'",
            function (data) {
                //First Ensure the query succeded
                if (data.Success === true) {
                    //If we have a match that means the user has the correct credentials
                    if (data.Result != null && data.Result != "") {
                        //Also ensure that they are TSO certified
                        if (data.Result[0].ADMIN_QUALIFIED == true) {
                            app.loginData.pID = data.Result[0].USER_ID
                            app.loginData.pTSOStatus = false;
                            app.loginData.pAdminStatus = true;
                            window.location.hash = "#adminPageSelect";
                        } else {
                            $(".error").text("You are not certified to log in as an admin user");
                            $('#logonmessage').text("");
                        }
                    }
                    //Otherwise there is no match for that user in the DB
                    else {
                        $(".error").text("Error: That username and password combination is incorrect");
                        $('#logonmessage').text("");
                    }
                } else {
                    $(".error").text("Error: Database Connection Failure: For initial login you need an internet connection")
                    $('#logonmessage').text("");
                }
            });
    }

}
