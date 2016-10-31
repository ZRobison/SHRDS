//Do to the way the external MYSql.JS script works with callback function, all sql statements must be perfomred in sequence and 
//cannot be encapsulated into re-useable functions
function insertSHR() {
    //If we have a prevailing SHR
    if (app.SHRFlag == 1) {
        submitPrevailing();
    }
    //If we have an event specific SHR
    else if (app.SHRFlag == 2) {
        submitEventSpercific();

    }
    //Otherwise we have an incident report
    else {
        sumbitIncerdentReport();
    }
}


function flagUpdated(formType) {
    switch (formType) {
        case (1):
            postPrevSubmit();
            break;
        case (2):
            postESSubmit();
            break;
        case (3):
            postIRSubmit();
            break;
    }
    if (formType != 2.5 && formType != .5) {
        app.updatedFlag = 0;
    }
    app.watch('updatedFlag', function (id, oldval, newval) {
        app.unwatch('updatedFlag');
        flagUpdated(newval);
        return newval;
    });
}




/**

*
* This is the first method in submitting Event spercifc data
* It checks if that Race Already Exists, THen passes the information to the next method
*
*/

function submitEventSpercific() {
    var eventSQL = "SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.esSHRData.age + "' " +
        "AND GENDER = '" + app.esSHRData.gender + "' " +
        "AND STARTING_CRAFT = 10 " +
        "AND CRAFT_TYPE = '" + app.esSHRData.craftType + "' " +
        "AND ROUND = '" + app.esSHRData.round + "' " +
        "AND HEAT = '" + app.esSHRData.heat + "' " +
        "AND FINAL = '" + app.esSHRData.finalType + "' ";

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventSQL,
        //Check if an event with the exact same details currently exists, if not create one
        function (data) {
            function nest() {
                submitESDataAfterCheck(data);
            };
            nest();
        }
    );
    console.log(eventSQL);


    app.esSHRArrayUnfinished.push(app.esSHRData);
    app.esSHRArray.push(app.esSHRData);
    app.resetData();
    //After everythign has been done go back home
    window.location.hash = "#formSelect";
}


/**
 *
 * If the data qurried returns something then we know that the race already exist so just submit data, 
 * else creat an event then submit data
 *
 */
function submitESDataAfterCheck(data) {
    if (data.Result == null || data.Result == "") {
        submitESAfterCheckFalse();
    }
    //Otherwise we have found an event but we still want to insert the SHR data
    else {
        submitESAfterCheckTrue();
    }
}

/**
 *
 * IF the data check is true just submit data
 *
 */
function submitESAfterCheckFalse() {
    var esSHRInsertSQL =
        "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_NAME, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_TOTAL, RACE_ID, IN_OUT, TIME_END, TIME_START, EVENT_SPECIFIC) VALUES (" +
        app.loginData.pID + "," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].date + "'," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].time + "'," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].beach + "'," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pLDR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pOHR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pRCR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pSTR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWHR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWPR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWTR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pZWR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.totalSHR + "," +
        "(SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].age + "' " +
        "AND GENDER = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].gender + "' " +
        "AND STARTING_CRAFT = 10 " + //This data attribute does not currently exist
        "AND CRAFT_TYPE = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].craftType + "' " +
        "AND ROUND = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].round + "' " +
        "AND HEAT = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].heat + "' " +
        "AND FINAL = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].finalType + "')," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].inOrOut + "', '12:00', '11:30', TRUE)";


    var eventInsertSQL =
        "INSERT INTO RACE (AGE_GROUP, GENDER, STARTING_CRAFT, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
        "VALUES ('" +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].age + "','" +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].gender + "'," +
        10 + ",'" + //Starting craft - fill in SHR Data Object
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].craftType + "','" +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].round + "','" +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].heat + "','" +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].finalType + "')";


    console.log(eventInsertSQL);
    console.log(esSHRInsertSQL);

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventInsertSQL,
        function (data) {
            MySql.Execute(
                dbconfig.host,
                dbconfig.dbUser,
                dbconfig.dbPassword,
                dbconfig.dbUser,
                esSHRInsertSQL,
                function (data) {
                    function nest() {
                        app.updatedFlag = 2;
                    };
                    nest();
                }
            );
        }
    );
}

/**
 *
 * Race already exists so just inset data
 *
 */
function submitESAfterCheckTrue() {


    var sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_NAME, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_TOTAL, RACE_ID, IN_OUT, TIME_END, TIME_START, EVENT_SPECIFIC) VALUES (" +
        app.loginData.pID + "," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].date + "'," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].time + "'," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].beach + "'," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pLDR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pOHR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pRCR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pSTR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWHR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWPR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pWTR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.pZWR + "," +
        app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].SHR.totalSHR + "," +
        "(SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].age + "' " +
        "AND GENDER = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].gender + "' " +
        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
        "AND CRAFT_TYPE = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].craftType + "' " +
        "AND ROUND = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].round + "' " +
        "AND HEAT = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].heat + "' " +
        "AND FINAL = '" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].finalType + "')," +
        "'" + app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1].inOrOut + "', '12:00', '11:30', TRUE)";

    console.log(sql);

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {
            function nest() {
                app.updatedFlag = 2;
            };
            nest();
        }
    );
}

function postESSubmit() {
    app.esSHRArrayFinished.push(app.esSHRArrayUnfinished[app.esSHRArrayUnfinished.length - 1]);
    app.esSHRArrayUnfinished.pop();
    if (app.prevSHRArrayUnfinished.length == 0 && app.esSHRArrayUnfinished.length == 0) {
        $(".error").text("");
        $(".good").text("All data has been successfully sent to the server.");
    } else {
        $(".good").text("");
        $(".error").text("Some data you have collected is in the process of or could not be sent to the server. Please find internet connection and press the sync button.");
    }
}

/**
 *
 * Submit the the prevailing data into the data base.
 *
 **/
function submitPrevailing() {
    $('.status').text("Attempting to Submit Data to Server...");

    var sql = "INSERT INTO SHR (USER_ID, DATE, TIME, BEACH_NAME, LDR, OHR, RCR, STR, WHR, WPR, WTR, ZWR, SHR_TOTAL, LOW_TIDE_HEIGHT, HIGH_TIDE_HEIGHT, LOW_TIDE_TIME, HIGH_TIDE_TIME, WIND_DIRECTION, WIND_SPEED, EVENT_SPECIFIC) VALUES (" +
        app.loginData.pID + "," +
        "'" + app.prevalingSHRData.date + "'," +
        "'" + app.prevalingSHRData.time + "'," +
        "'" + app.prevalingSHRData.beach + "'," +
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
        "'" + app.prevalingSHRData.tideTimeLow + "'," +
        "'" + app.prevalingSHRData.tideTimeHigh + "'," +
        "'" + app.prevalingSHRData.windDirection + "'," +
        app.prevalingSHRData.windSpeed + "," +
        "FALSE)"; //False as this is a prevailing report


    //Descriptors to insert    
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {
            function nest() {

                app.updatedFlag = 1;
            };
            nest();
        }
    );
    app.prevSHRArrayUnfinished.push(app.prevalingSHRData);
    app.prevSHRArray.push(app.prevalingSHRData);
    app.resetData();
    //After everythign has been done go back home
    window.location.hash = "#formSelect";
}



function postPrevSubmit() {
    app.prevSHRArrayFinished.push(app.prevSHRArrayUnfinished[app.prevSHRArrayUnfinished.length - 1]);
    app.prevSHRArrayUnfinished.pop();
    if (app.prevSHRArrayUnfinished.length == 0 && app.esSHRArrayUnfinished.length == 0) {
        $(".error").text("");
        $(".good").text("All data has been successfully sent to the server.");
    } else {
        $(".good").text("");
        $(".error").text("Some data you have collected is in the process of or could not be sent to the server. Please find internet connection and press the sync button.");
    }

}



/**
 *
 * Submit IR Data
 *
 */
function sumbitIncerdentReport() {
    var eventSQL = "SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.esIRData.age + "' " +
        "AND GENDER = '" + app.esIRData.gender + "' " +
        "AND STARTING_CRAFT = 10 " +
        "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
        "AND ROUND = '" + app.esIRData.round + "' " +
        "AND HEAT = '" + app.esIRData.heat + "' " +
        "AND FINAL = '" + app.esIRData.finalType + "'";

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventSQL,
        //Check if an event with the exact same details currently exists, if not create one
        function (data) {
            function nest() {
                submitIRDataAfterCheck(data);
            };
            nest();
        }
    );

    app.irArrayUnfinished.push(app.esIRData);
    app.irArray.push(app.esIRData);
    app.resetData();
    //After everythign has been done go back home CHANGE!!!!!!!!!!!!!!!!
    window.location.hash = "#eventSpecific";
}


/**
 *
 * If the data qurried returns something then we know that the race already exist so just submit data, 
 * else creat an event then submit data
 *
 */
function submitIRDataAfterCheck(data) {
    if (data.Result == null || data.Result == "") {
        submitIRAfterCheckFalse();
    }
    //Otherwise we have found an event but we still want to insert the SHR data
    else {
        submitIRAfterCheckTrue();
    }
}

/**
 *
 * IF the data check is true just submit data
 *
 */
function submitIRAfterCheckFalse() {

    var eventSQL = "INSERT INTO RACE (AGE_GROUP, GENDER, STARTING_CRAFT, CRAFT_TYPE, ROUND, HEAT, FINAL)" +
        "VALUES ('" +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].age + "','" +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].gender + "'," +
        10 + ",'" + //Starting craft - fill in SHR Data Object
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].craftType + "','" +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].round + "','" +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].heat + "','" +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].finalType + "')";

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        eventSQL,
        //Check if an event with the exact same details currently exists, if not create one
        function (data) {
            //Submit the in version of the IR report
            var sql =
                "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, BROACH, INJURY_MINOR, INJURY_SERIOUS, INJURY_SEVERE, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS, IR_EMAIL, IR_FIRST_NAME, IR_LAST_NAME) VALUES (" +
                //Race ID is a big select statemeent - is it is an auto increment value in the DB
                "(SELECT RACE_ID FROM RACE WHERE " +
                "AGE_GROUP = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].age + "' " +
                "AND GENDER = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].gender + "' " +
                "AND STARTING_CRAFT = 10 " + //This data attribute does not currently exist
                "AND CRAFT_TYPE = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].craftType + "' " +
                "AND ROUND = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].round + "' " +
                "AND HEAT = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].heat + "' " +
                "AND FINAL = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].finalType + "')," +
                app.loginData.pID + "," +
                "'IN'," + //Hardcoded - as we will have to do two IR data insert statements for every single IR report
                app.esIRData.IRIN.pDNF + "," +
                app.esIRData.IRIN.pFlyingCraft + "," +
                app.esIRData.IRIN.FOWave + "," +
                app.esIRData.IRIN.pFOCollision + "," +
                app.esIRData.IRIN.pBSND + "," +
                app.esIRData.IRIN.pBroach + "," +
                app.esIRData.IRIN.pINJMin + "," +
                app.esIRData.IRIN.pINJSer + "," +
                app.esIRData.IRIN.pINJSev + "," +
                app.esIRData.IRIN.pLCSerious + "," +
                app.esIRData.IRIN.pLCSevere + "," +
                app.esIRData.IRIN.pCollisionSer + "," +
                app.esIRData.IRIN.pCollisionMin + ",'" +
                app.loginData.incidentEmail + "','" +
                app.loginData.incidentFName + "','" +
                app.loginData.incidentLName + "')";
            MySql.Execute(
                dbconfig.host,
                dbconfig.dbUser,
                dbconfig.dbPassword,
                dbconfig.dbUser,
                sql,
                //Currently function can be empty as call back will not return anything
                function (data) {
                    app.updatedFlag += .5
                }
            );

            console.log(sql);

            //Do all the same again for Out version of IR 
            var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, BROACH, INJURY_MINOR, INJURY_SERIOUS, INJURY_SEVERE, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
                //Race ID is a big select statemeent - is it is an auto increment value in the DB
                "(SELECT RACE_ID FROM RACE WHERE " +
                "AGE_GROUP = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].age + "' " +
                "AND GENDER = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].gender + "' " +
                "AND STARTING_CRAFT = 10 " + //This data attribute does not currently exist
                "AND CRAFT_TYPE = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].craftType + "' " +
                "AND ROUND = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].round + "' " +
                "AND HEAT = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].heat + "' " +
                "AND FINAL = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].finalType + "')," +
                app.loginData.pID + "," +
                "'OUT'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
                app.esIRData.IROUT.pDNF + "," +
                app.esIRData.IROUT.pFlyingCraft + "," +
                app.esIRData.IROUT.FOWave + "," +
                app.esIRData.IROUT.pFOCollision + "," +
                app.esIRData.IROUT.pBSND + "," +
                app.esIRData.IROUT.pBroach + "," +
                app.esIRData.IROUT.pINJMin + "," +
                app.esIRData.IROUT.pINJSer + "," +
                app.esIRData.IROUT.pINJSev + "," +
                app.esIRData.IROUT.pLCSerious + "," +
                app.esIRData.IROUT.pLCSevere + "," +
                app.esIRData.IROUT.pCollisionSer + "," +
                app.esIRData.IROUT.pCollisionMin + ",'" +
                app.loginData.incidentEmail + "','" +
                app.loginData.incidentFName + "','" +
                app.loginData.incidentLName + "')";
            console.log(sql);
            MySql.Execute(
                dbconfig.host,
                dbconfig.dbUser,
                dbconfig.dbPassword,
                dbconfig.dbUser,
                sql,
                //Currently function can be empty as call back will not return anything
                function (data) {
                    function nest() {
                        app.updatedFlag += 2.5;
                    };
                    nest();
                }
            );
        });
}

/**
 *
 * IF the data check is false add race and just submit data
 *
 */
function submitIRAfterCheckTrue() {
    //Submit the in version of the IR report
    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, BROACH, INJURY_MINOR, INJURY_SERIOUS, INJURY_SEVERE, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
        //Race ID is a big select statemeent - is it is an auto increment value in the DB
        "(SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].age + "' " +
        "AND GENDER = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].gender + "' " +
        "AND STARTING_CRAFT = 10 " + //This data attribute does not currently exist
        "AND CRAFT_TYPE = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].craftType + "' " +
        "AND ROUND = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].round + "' " +
        "AND HEAT = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].heat + "' " +
        "AND FINAL = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].finalType + "')," +
        app.loginData.pID + "," +
        "'IN'," + //Hardcoded - as we will have to do two IR data insert statements for every single IR report
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pDNF + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pFlyingCraft + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.FOWave + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pFOCollision + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pBSND + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pBroach + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pINJMin + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pINJSer + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pINJSev + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pLCSerious + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pLCSevere + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pCollisionSer + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IRIN.pCollisionMin + ",'" +
        app.loginData.incidentEmail + "','" +
        app.loginData.incidentFName + "','" +
        app.loginData.incidentLName + "')";

    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {}
    );

    //Do all the same again for Out version of IR 
    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT_NOSE_DIVE, BROACH, INJURY_MINOR, INJURY_SERIOUS, INJURY_SEVERE, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
        //Race ID is a big select statemeent - is it is an auto increment value in the DB
        "(SELECT RACE_ID FROM RACE WHERE " +
        "AGE_GROUP = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].age + "' " +
        "AND GENDER = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].gender + "' " +
        "AND STARTING_CRAFT = 10 " + //This data attribute does not currently exist
        "AND CRAFT_TYPE = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].craftType + "' " +
        "AND ROUND = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].round + "' " +
        "AND HEAT = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].heat + "' " +
        "AND FINAL = '" + app.irArrayUnfinished[app.irArrayUnfinished.length - 1].finalType + "')," +
        app.loginData.pID + "," +
        "'IN'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pDNF + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pFlyingCraft + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.FOWave + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pFOCollision + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pBSND + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pBroach + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pINJMin + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pINJSer + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pINJSev + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pLCSerious + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pLCSevere + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pCollisionSer + "," +
        app.irArrayUnfinished[app.irArrayUnfinished.length - 1].IROUT.pCollisionMin + ",'" +
        app.loginData.incidentEmail + "','" +
        app.loginData.incidentFName + "','" +
        app.loginData.incidentLName + "')";

    console.log(sql);
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        //Currently function can be empty as call back will not return anything
        function (data) {
            function nest() {
                app.updatedFlag = 3;
            };
            nest();
        }
    );

}

function postIRSubmit() {
    app.irArrayFinished.push(app.irArrayUnfinished[app.irArrayUnfinished.length - 1]);
    app.irArrayUnfinished.pop();
    if (app.irArray.length == 0) {
        $(".error").text("");
        $(".good").text("All data has been successfully sent to the server.");
    } else {
        $(".good").text("");
        $(".error").text("Some data you have collected is in the process of or could not be sent to the server. Please find internet connection and press the sync button.");
    }
}
