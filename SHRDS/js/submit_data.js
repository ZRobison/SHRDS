function insertSHR() {
    console.log("Insert function firing");
    var sql = "";
    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        console.log("Preparing SQL statement");
        sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_, NEAREST_TIDES_HEIGHT1, NEAREST_TIDES_HEIGHT2, NEAREST_TIDES_TIME1, NEAREST_TIDES_TIME2, WIND_DIRECTION) VALUES (" +
            //MANY VALUES ARE CURRENTLY HARDCODED, THIS IS NECCASARY TO SUCCESSFULLY INSERT A QUERY.
            1234 + "," +
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
        console.log(sql);

        //app.prevalingSHRData.windSpeed+")" +  NOT IN DATA PBJECT YET

        //Descriptors to insert    


        submit(sql);
    }
    //If we have an event specific
    else if (app.SHRFlag == 2) {
        var eventSQL = ""
        submitEvent(eventSQL);
        submit(sql);
    }
    //Otherwise we have an incident report
    else {
        submitEvent();
        submitIncidentReport();
    }
}

var eventSubmit = {

}

function submitIncidentReport() {

}

function submit(sql) {
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {

        }
    );
    console.log("SHR data has been inserted");
}
