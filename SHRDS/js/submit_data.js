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
    else if (app.SHRFlag == 4) {
        var eventSQL = "INSERT INTO RACE (TIME, AGE_GROUP, GENDER, STARTING_CRAFT_, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
            "VALUES ('11:00'," +
            app.eventSpercifcSHRData.age + "," +
            +app.eventSpercifcSHRData.gender + "," +
            10 + "," + //Starting craft - fill in SHR Data Object
            app.eventSpercifcSHRData.craftType + "," +
            app.eventSpercifcSHRData.round + "," +
            app.eventSpercifcSHRData.heat + "," +
            "'SEMI')"; //Lets consolidate quarter/semi/grandfinal into one string type

        //submitEvent(eventSQL);
        submit(eventSQL);

    }
    //Otherwise we have an incident report
    else {
        //submitEvent();
        submitIncidentReport();
    }
}

//var eventSubmit = function (){
//
//}

function submitIncidentReport() {

}

function submitEvent() {

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
functiom verifySubmission(sql) {
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
