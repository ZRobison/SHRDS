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
    //If we have an event specific
    else if (app.SHRFlag == 2) {
        submitEvent();

        var sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_, RACE_ID, IN_OUT, TIME_END, TIME_START) VALUES (" +
            app.loginData.pID + "," +
            "'2016/10/21'," + //All these values are not currently stored in any data objects
            "'13:40'," +
            "'BEACH1223'," +
            app.eventSpercifcSHRData.SHR.pLDR + "," +
            app.eventSpercifcSHRData.SHR.pOHR + "," +
            app.eventSpercifcSHRData.SHR.pRCR + "," +
            app.eventSpercifcSHRData.SHR.pSTR + "," +
            app.eventSpercifcSHRData.SHR.pWHR + "," +
            app.eventSpercifcSHRData.SHR.pWPR + "," +
            app.eventSpercifcSHRData.SHR.pWTR + "," +
            app.eventSpercifcSHRData.SHR.pZWR + "," +
            app.eventSpercifcSHRData.SHR.totalSHR + "," +
            "SELECT RACE_ID FROM RACE WHERE" +
            "TIME = '11:00'" + //TIME IS STILL NOT SET IN OBJECT
            "AND AGE_GROUP = '" + app.eventSpercifcSHRData.age + "'" +
            "AND GENDER = '" + app.eventSpercifcSHRData.gender + "'" +
            "AND STARTING_CRAFT_ = 10" +
            "AND CRAFT_TYPE = '" + app.eventSpercifcSHRData.craftType + "'" +
            "AND ROUND = " + app.eventSpercifcSHRData.round +
            "AND HEAT = " + app.eventSpercifcSHRData.heat +
            "AND FINAL = 'SEMI')" +
            "0, '12:00', '11:30')";
        submit(sql);
        console.log(sql);

    }
    //Otherwise we have an incident report
    else {
        //NOT FINISHED
        submitEvent();
        var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT,FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, INJURY_MINOR_, INJURYSERIOUS_, _INJURY , LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
            "(SELECT RACE_ID FROM RACE WHERE" +
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
    var eventSQL = "SELECT RACE_ID FROM RACE WHERE" +
        "TIME = '11:00'" + //TIME IS STILL NOT SET IN OBJECT
        "AND AGE_GROUP = '" + app.esSHRData.age + "'" +
        "AND GENDER = '" + app.esSHRData.gender + "'" +
        "AND STARTING_CRAFT_ = 10" +
        "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "'" +
        "AND ROUND = " + app.esSHRData.round +
        "AND HEAT = " + app.esSHRData.heat +
        "AND FINAL = 'SEMI')";
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventSQL,
        //Check if an event with the exact same details currently exists, if not create one
        function (data) {
            if (data.Result == null && data.Result == "") {
                eventSQL = "INSERT INTO RACE (TIME, AGE_GROUP, GENDER, STARTING_CRAFT_, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
                    "VALUES ('11:00'," +
                    app.esSHRData.age + "," +
                    app.esSHRData.gender + "," +
                    10 + "," + //Starting craft - fill in SHR Data Object
                    app.esSHRData.craftType + "," +
                    app.esSHRData.round + "," +
                    app.esSHRData.heat + "," +
                    "'SEMI')"; //Lets consolidate quarter/semi/grandfinal into one string type

                submit(eventSQL);
            } else {
                //In this case the event already exists in the DB so we do nothing
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
