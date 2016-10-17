function insertSHR() {

    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        submitPrevailing();
    }
    //If we have an event specific
    else if (app.SHRFlag == 2) {
        submitEventSpecific();
    }
    //Otherwise we have an incident report
    else {
        submitIncidentReport();
    }
}

function submitPrevailing() {

}

function submitEventSpecific() {

}

function submitIncidentReport() {

}
