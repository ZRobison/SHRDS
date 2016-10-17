function verify_user() {
    //TSO selected
    if ($('#radio1').is(":checked")) {
        //dummy test db
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            "select USER_ID, TSO_QUALIFIED from SHRDS_USER where USER_ID ='" + document.getElementById("username").value + "' and PASSWORD ='" + document.getElementById("password").value + "'",
            function (data) {
                //First Ensure the query succeded
                if (data.Success === true) {
                    //If we have a match that means the user has the correct credentials
                    if (data.Result != null && data.Result != "") {
                        //Also ensure that they are TSO certified
                        if (data.Result[0].TSO_QUALIFIED == true) {
                            location.href = 'index.html?#formSelect';
                        } else {
                            $(".error").text("You are not certified to log in as a TSO");
                        }
                    }
                    //Otherwise there is a match for the user number in the DB
                    else {
                        $(".error").text("Error: That username and password combination is incorrect");
                    }
                } else {
                    $(".error").text("Error: Database Failure")
                }
            });
    }
    //Incident Selected
    else if ($('#radio2').is(":checked")) {
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
                        location.href = 'index.html?#incident1';
                    } else {
                        $(".error").text("That user ID does not exists");
                    }
                }
                //Otherwise there is a match for the user number in the DB
                else {
                    $(".error").text("Error: Database Connection Failure: For initial login you need an internet connection");
                }
            }
        );

    }
    //Admin Selected
    else {
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            "select USER_ID, ADMIN_QUALIFIED from SHRDS_USER where USER_ID ='" + document.getElementById("username").value + "' and PASSWORD ='" + document.getElementById("password").value + "'",
            function (data) {
                //First Ensure the query succeded
                if (data.Success === true) {
                    //If we have a match that means the user has the correct credentials
                    if (data.Result != null && data.Result != "") {
                        //Also ensure that they are TSO certified
                        console.log(JSON.stringify(data));
                        if (data.Result[0].ADMIN_QUALIFIED == true) {
                            location.href = 'index.html?#adminPageSelect';
                        } else {
                            $(".error").text("You are not certified to log in as an admin user");
                        }
                    }
                    //Otherwise there is no match for that user in the DB
                    else {
                        $(".error").text("Error: That username and password combination is incorrect");
                    }
                } else {
                    $(".error").text("Error: Database Failure")
                }
            });
    }

}
