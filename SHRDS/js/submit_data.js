var sqlResult;

function insertSHR() {

    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
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
