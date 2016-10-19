function insertSHR() {
    var sql = "";
    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        sql = "INSERT INTO SHR VALUES (" +
            //Currently Hardcoded user ID, change when Dan does user stuff
            1234 + "," +
            app.prevalingSHRData.date + "," +
            app.prevalingSHRData.time + "," +
            "," + //Venue data type - get rid of it, confusion with arena?
            app.prevalingSHRData.beach + "," +
            app.prevalingSHRData.SHR.pWPR + "," +
            app.prevalingSHRData.SHR.pZWR + "," +
            app.prevalingSHRData.SHR.pSTR + "," +
            app.prevalingSHRData.SHR.pLDR + "," +
            app.prevalingSHRData.SHR.pRCR + "," +
            app.prevalingSHRData.SHR.pOHR + "," +
            "," + //Double up of beach name
            "," + //Race ID null for prevailing
            "," + //In/out null for prevailing
            "," + //Beach gacing null for prevailing?
            app.prevalingSHRData.tideHieghtLow + "," +
            app.prevalingSHRData.tideHieghtHigh + "," +
            app.prevalingSHRData.tideTimeLow + "," +
            app.prevalingSHRData.tideTimeHigh + "," +
            app.prevalingSHRData.windDirection + ")";

        //app.prevalingSHRData.windSpeed+")" +

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
    submitEvent: function () {

    }
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
}
