function insertSHR() {
    var sql;
    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        sql = "INSERT INTO SHR VALUES (" +



            //Descriptors to insert    
            var pWHR = app.prevalingSHRData.SHR.pWHR;
        var pWTR = app.prevalingSHRData.SHR.pWTR;
        var pWPR = app.prevalingSHRData.SHR.pWPR;
        var pZWR = app.prevalingSHRData.SHR.pZWR;
        var pSTR = app.prevalingSHRData.SHR.pSTR;
        var pLDR = app.prevalingSHRData.SHR.pLDR;
        var pRCR = app.prevalingSHRData.SHR.pRCR;
        var pOHR = app.prevalingSHRData.SHR.pOHR;

        submitSHR(sql);
    }
    //If we have an event specific
    else if (app.SHRFlag == 2) {
        submitEvent();
        submitSHR(sql);
    }
    //Otherwise we have an incident report
    else {
        submitEvent();
        submitIncidentReport();
    }
}
//Both prevailing and Event Specific can be same query. Event is submitted as seperate object
function submitSHR() {
    submit(sql);
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
