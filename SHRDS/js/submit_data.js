var statementSitch = 0;
//Do to the way the external MYSql.JS script works with callback function, all sql statements must be perfomred in sequence and 
//cannot be encapsulated into re-useable functions
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
		
		//TIM - if we succeed in storing make true else false.
		var success = true;
		storePrev(success);

    }
    //If we have an event specific SHR
    else if (app.SHRFlag == 2) {
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

		//TIM - if we succeed in storing make true else false.
		var success = true;
		storeES(success);

    }
    //Otherwise we have an incident report
    else {
        var eventSQL = "SELECT RACE_ID FROM RACE WHERE " +
            "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
            "AND AGE_GROUP = '" + app.esIRData.age + "' " +
            "AND GENDER = '" + app.esIRData.gender + "' " +
            "AND STARTING_CRAFT_ = 10 " +
            "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
            "AND ROUND = " + app.esIRData.round + " " +
            "AND HEAT = " + app.esIRData.heat + " " +
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
                        app.esIRData.age + "','" +
                        app.esIRData.gender + "'," +
                        10 + ",'" + //Starting craft - fill in SHR Data Object
                        app.esIRData.craftType + "'," +
                        app.esIRData.round + "," +
                        app.esIRData.heat + "," +
                        "'SEMI')"; //Lets consolidate quarter/semi/grandfinal into one string type

                    console.log("submitting EVENT Data");
                    submit(eventSQL);
                    //Submit the in version of the IR report
                    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT__NOSE_DIVE, BROACH, INJURY_MINOR_, INJURYSERIOUS_, _INJURY, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
                        //Race ID is a big select statemeent - is it is an auto increment value in the DB
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esIRData.age + "' " +
                        "AND GENDER = '" + app.esIRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
                        "AND ROUND = " + app.esIRData.round + " " +
                        "AND HEAT = " + app.esIRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        app.loginData.pID + "," +
                        "'IN'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
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
                        app.esIRData.IRIN.pCollisionMin + ")";

                    console.log(sql);
                    submit(sql);

                    //Do all the same again for Out version of IR 
                    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT__NOSE_DIVE, BROACH, INJURY_MINOR_, INJURYSERIOUS_, _INJURY, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
                        //Race ID is a big select statemeent - is it is an auto increment value in the DB
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esIRData.age + "' " +
                        "AND GENDER = '" + app.esIRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
                        "AND ROUND = " + app.esIRData.round + " " +
                        "AND HEAT = " + app.esIRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        app.loginData.pID + "," +
                        "'IN'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
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
                        app.esIRData.IROUT.pCollisionMin + ")";

                    submit(sql);

					//TIM - if we succeed in storing make true else false.
					var success = true;
					storeIR(success);
					
                }
                //Otherwise we have found an event but we still want to insert the IR DATA, so repeat all statement exactly like previous block
                else {
                    //Submit the in version of the IR report
                    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT__NOSE_DIVE, BROACH, INJURY_MINOR_, INJURYSERIOUS_, _INJURY, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
                        //Race ID is a big select statemeent - is it is an auto increment value in the DB
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esIRData.age + "' " +
                        "AND GENDER = '" + app.esIRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
                        "AND ROUND = " + app.esIRData.round + " " +
                        "AND HEAT = " + app.esIRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        app.loginData.pID + "," +
                        "'IN'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
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
                        app.esIRData.IRIN.pCollisionMin + ")";

                    submit(sql);

                    //Do all the same again for Out version of IR 
                    var sql = "INSERT INTO INCIDENTS_REPORT (RACE_ID, USER_ID, IN_OUT, DNF, FLYING_CRAFT, FALL_OFF_WAVE, FALL_OFF_COLLISION, BACK_SHOOT__NOSE_DIVE, BROACH, INJURY_MINOR_, INJURYSERIOUS_, _INJURY, LOST_CRAFT_SERIOUS, LOST_CRAFT_SEVERE, COLLISION_MINOR, COLLISION_SERIOUS) VALUES (" +
                        //Race ID is a big select statemeent - is it is an auto increment value in the DB
                        "(SELECT RACE_ID FROM RACE WHERE " +
                        "TIME = '11:00' " + //TIME IS STILL NOT SET IN OBJECT
                        "AND AGE_GROUP = '" + app.esIRData.age + "' " +
                        "AND GENDER = '" + app.esIRData.gender + "' " +
                        "AND STARTING_CRAFT_ = 10 " + //This data attribute does not currently exist
                        "AND CRAFT_TYPE = '" + app.esIRData.craftType + "' " +
                        "AND ROUND = " + app.esIRData.round + " " +
                        "AND HEAT = " + app.esIRData.heat + " " +
                        "AND FINAL = 'SEMI')," +
                        app.loginData.pID + "," +
                        "'IN'," + //Hardcoded - as I will have to do two IR data insert statements for every single IR report
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
                        app.esIRData.IROUT.pCollisionMin + ")";

                    submit(sql);
                }

            }

        );



    }
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

//Currently unused -depending on query response times should be implemented later
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

function storePrev(sucess){
	if (sucess){
		app.prevSHRArrayFinished.push(app.prevalingSHRData);
	} else {
		app.prevSHRArrayUnfinished.push(app.prevalingSHRData);
	}
	app.prevSHRArray.push(app.prevalingSHRData);
	app.resetData();
}

function storeES(sucess){
	if (sucess){
		app.esSHRArrayFinished.push(app.esSHRData);
	} else {
		app.esSHRArrayUnfinished.push(app.esSHRData);
	}
	app.esSHRArray.push(app.esSHRData);
	app.resetData();
}

function storeIR(sucess){
	if (sucess){
		app.irArrayFinished.push(app.esIRData);
	} else {
		app.irArrayUnfinished.push(app.esIRData);
	}
	app.irArray.push(app.esIRData);
	app.resetData();
}
