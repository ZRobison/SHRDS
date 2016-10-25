function adminPageSelect() {
    if ($('#adminRadio1').is(":checked")) {
        window.location.hash = "#adminPasswordChange";
    } else if ($('#adminRadio2').is(":checked")) {
        window.location.hash = "#adminMetadata";
    }
}

//

function getFormMetaData() {
    var data1;
    var data2;
    var name = "<br>";
    var formType = "<br>"
    var raceDeets = "<br>";
    var raceTime = "<br>";
    var notify = -1;
    //Get ir form metadata
    var sql = "SELECT FIRST_NAME, LAST_NAME, SHR.RACE_ID, AGE_GROUP, CRAFT_TYPE, SHR.TIME " +
        "FROM SHR, RACE, SHRDS_USER " +
        "WHERE SHR.RACE_ID = RACE.RACE_ID AND SHR.USER_ID = SHRDS_USER.USER_ID";
    console.log("about to fire form metadata sql");
    MySql.Execute(
        dbconfig.host,
        dbconfig.dbUser,
        dbconfig.dbPassword,
        dbconfig.dbUser,
        sql,
        function (data) {
            //Get Prevailing form metadata
            sql = "SELECT FIRST_NAME, LAST_NAME, TIME " +
                "FROM SHR, SHRDS_USER " +
                "WHERE SHR.USER_ID = SHRDS_USER.USER_ID";
            console.log("about to fire callback2");
            MySql.Execute(
                dbconfig.host,
                dbconfig.dbUser,
                dbconfig.dbPassword,
                dbconfig.dbUser,
                sql,
                function (data) {
                    if (data.Result != null && data.Result != "") {
                        for (var i = 0; i < data.Result.length; i++) {
                            name += data.Result[i].FIRST_NAME + " " + data.Result[i].LAST_NAME + "<br>";
                            formType += "Prevailing SHR" + "<br>";
                            raceDeets += "<br>";
                            raceTime += data.Result[i].TIME + "<br>";
                        }
                        document.getElementById("supervisingTSO").innerHTML += name;
                        document.getElementById("raceDetails").innerHTML += raceDeets;
                        document.getElementById("submittedTime").innerHTML += raceTime;
                        document.getElementById("formType").innerHTML += formType;

                    }
                }
            );
            console.log(JSON.stringify(data));
            if (data.Result != null && data.Result != "") {
                for (var i = 0; i < data.Result.length; i++) {
                    name += data.Result[i].FIRST_NAME + " " + data.Result[i].LAST_NAME + "<br>";
                    formType += "Event Specific SHR" + "<br>";
                    raceDeets += data.Result[i].AGE_GROUP + " " + data.Result[i].CRAFT_TYPE + "<br>";
                    raceTime += data.Result[i].TIME + "<br>";
                }


            }

        }
    );

}
