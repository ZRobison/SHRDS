var statementSitch = 0;

function insertSHR() {
    console.log("Insert function firing");
    console.log(app.SHRFlag == 1);
    console.log(app.loginData.pID);
    var sql = "";
    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        console.log("Preparing SQL statement");
        sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_, NEAREST_TIDES_HEIGHT1, NEAREST_TIDES_HEIGHT2, NEAREST_TIDES_TIME1, NEAREST_TIDES_TIME2, WIND_DIRECTION) VALUES (" +
            //MANY VALUES ARE CURRENTLY HARDCODED, THIS IS NECCASARY TO SUCCESSFULLY INSERT A QUERY.
            app.loginData.pID + "," +
            "'2016/10/20'," + //app.prevalingSHRData.date
            "'09:15'," + //app.prevalingSHRData.time
            "'TEST BEACH'," + //app.prevalingSHRData.beach
            app.prevalingSHRData.SHR.pLDR + "," +
            app.prevalingSHRData.SHR.pOHR + "," +
            app.prevalingSHRData.SHR.pRCR + "," +
            app.prevalingSHRData.SHR.pSTR + "," +
            app.prevalingSHRData.SHR.pWHR + "," +
            app.prevalingSHRData.SHR.pWPR + "," +
            app.prevalingSHRData.SHR.pWTR + "," +
            app.prevalingSHRData.SHR.pZWR + "," +
            app.prevalingSHRData.SHR.totalSHR + "," +
            app.prevalingSHRData.tideHieghtLow + "," +
            app.prevalingSHRData.tideHieghtHigh + "," +
            "'08:30'," + //app.prevalingSHRData.tideTimeLow
            "'14:45'," + //app.prevalingSHRData.tideTimeHigh
            "'N')"; //app.prevalingSHRData.windDirection


        //app.prevalingSHRData.windSpeed+")" +  NOT IN DATA PBJECT YET

        //Descriptors to insert    
        console.log(sql);

        submit(sql);
        //verifySubmission("select SHR");

    }
    //If we have an event specific SHR
    else if (app.SHRFlag == 2) {
        //submitEvent();

        var eventSQL = "SELECT RACE_ID FROM RACE WHERE " +
            "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
            "AND AGE_GROUP = '" + app.esSHRData.age + "' " +
            "AND GENDER = '" + app.esSHRData.gender + "' " +
            "AND STARTING_CRAFT_ = 10 " +
            "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "' " +
            "AND ROUND = " + app.esSHRData.round + " " +
            "AND HEAT = " + app.esSHRData.heat + " " +
            "AND FINAL = 'SEMI'";
        MySql.Execute(
            dbconfig.host,
            dbconfig.dbUser,
            dbconfig.dbPassword,
            dbconfig.dbUser,
            eventSQL,
            //Check if an event with the exact same details currently exists, if not create one
            function (data) {
                if (data.Result == null || data.Result == "") {
                    console.log("preparing event sql for submission")
                    var eventSQL = "INSERT INTO RACE (TIME, AGE_GROUP, GENDER, STARTING_CRAFT_, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
                        "VALUES ('11:00','" +
                        app.esSHRData.age + "','" +
                        app.esSHRData.gender + "'," +
                        10 + ",'" + //Starting craft - fill in SHR Data Object
                        app.esSHRData.craftType + "'," +
                        app.esSHRData.round + "," +
                        app.esSHRData.heat + "," +
                        "'SEMI')"; //Lets consolidate quarter/semi/grandfinal into one string type

                    console.log("submitting EVENT Data");
                    submit(eventSQL);
                    var sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_, RACE_ID, IN_OUT, TIME_END, TIME_START) VALUES (" +
                        app.loginData.pID + "," +
                        "'2016/10/21'," + //All these values are not currently stored in any data objects
                        "'13:40'," +
                        "'" + app.esSHRData.beach + "'," +
                        app.esSHRData.SHR.pLDR + "," +
                        app.esSHRData.SHR.pOHR + "," +
                        app.esSHRData.SHR.pRCR + "," +
                        app.esSHRData.SHR.pSTR + "," +
                        app.esSHRData.SHR.pWHR + "," +
                        app.esSHRData.SHR.pWPR + "," +
                        app.esSHRData.SHR.pWTR + "," +
                        app.esSHRData.SHR.pZWR + "," +
                        app.esSHRData.SHR.totalSHR + "," +
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esSHRData.age + "' " +
                        "AND GENDER = '" + app.esSHRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "' " +
                        "AND ROUND = " + app.esSHRData.round + " " +
                        "AND HEAT = " + app.esSHRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        "0, '12:00', '11:30')";
                    console.log("submitting SHRData")
                    submit(sql);


                }
                //Otherwise we have found an event but we still want to insert the SHR data
                else {
                    console.log("I found an event already in the DB with those details");
                    console.log(JSON.stringify(data));
                    var sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_, RACE_ID, IN_OUT, TIME_END, TIME_START) VALUES (" +
                        app.loginData.pID + "," +
                        "'2016/10/21'," + //All these values are not currently stored in any data objects
                        "'13:40'," +
                        "'" + app.esSHRData.beach + "'," +
                        app.esSHRData.SHR.pLDR + "," +
                        app.esSHRData.SHR.pOHR + "," +
                        app.esSHRData.SHR.pRCR + "," +
                        app.esSHRData.SHR.pSTR + "," +
                        app.esSHRData.SHR.pWHR + "," +
                        app.esSHRData.SHR.pWPR + "," +
                        app.esSHRData.SHR.pWTR + "," +
                        app.esSHRData.SHR.pZWR + "," +
                        app.esSHRData.SHR.totalSHR + "," +
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esSHRData.age + "' " +
                        "AND GENDER = '" + app.esSHRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "' " +
                        "AND ROUND = " + app.esSHRData.round + " " +
                        "AND HEAT = " + app.esSHRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        "0, '12:00', '11:30')";
                    console.log("submitting SHRData")
                    submit(sql);
                }

            }

        );



    }
    //Otherwise we have an incident report
    else {
        //NOT FINISHED
        submitEvent();
        var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT,FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, INJURY_MINOR_, INJURYSERIOUS_, _INJURY , LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
            "(SELECT RACE_ID FROM RACE WHERE " +
            "TIME = '11:00'" + //TIME IS STILL NOT SET IN OBJECT
            "AND AGE_GROUP = '" + app.esSHRData.age + "'" +
            "AND GENDER = '" + app.esSHRData.gender + "'" +
            "AND STARTING_CRAFT_ = 10" +
            "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "'" +
            "AND ROUND = " + app.esSHRData.round +
            "AND HEAT = " + app.esSHRData.heat +
            "AND FINAL = 'SEMI')" +
            "0, '12:00', '11:30'),"
        app.loginData.pID + ",";


    }
}

//var eventSubmit = function (){
//
//}

function submitIncidentReport() {

}

function submitEvent() {
    //first check if the event already exists in the DB
    var eventSQL = "SELECT RACE_ID FROM RACE WHERE " +
        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
        "AND AGE_GROUP = '" + app.esSHRData.age + "' " +
        "AND GENDER = '" + app.esSHRData.gender + "' " +
        "AND STARTING_CRAFT_ = 10 " +
        "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "' " +
        "AND ROUND = " + app.esSHRData.round + " " +
        "AND HEAT = " + app.esSHRData.heat + " " +
        "AND FINAL = 'SEMI'";
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventSQL,
        //Check if an event with the exact same details currently exists, if not create one
        function (data) {
            console.log(JSON.stringify(data));
            console.log(data.Success);
            console.log("entering function call");
            if (data.Result == null || data.Result == "") {
                console.log("preparing event sql for submission")
                var eventSQL = "INSERT INTO RACE (TIME, AGE_GROUP, GENDER, STARTING_CRAFT_, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
                    "VALUES ('11:00','" +
                    app.esSHRData.age + "','" +
                    app.esSHRData.gender + "'," +
                    10 + ",'" + //Starting craft - fill in SHR Data Object
                    app.esSHRData.craftType + "'," +
                    app.esSHRData.round + "," +
                    app.esSHRData.heat + "," +
                    "'SEMI')"; //Lets consolidate quarter/semi/grandfinal into one string type

                console.log(eventSQL);
                submit(eventSQL);

            } else {
                console.log("I found an event already in the DB with those details");
                console.log(JSON.stringify(data));
            }

        }

    );


}

function submit(sql) {
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {}
    );
}

function verifySubmission(sql) {
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {
            //If we do not have a match the data did not insert correctly
            if (data.Result == null && data.Result == "") {
                $(".error").text("Error: SHR data was not successfully insert");
            } else {
                $(".error").text("Success: The SHR data has been successfully inserted");
            }
        }
    );

}
