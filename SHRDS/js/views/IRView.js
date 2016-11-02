var IRView = function () {


    this.render = function (type) {
        var self = this;

        switch (type) {
            case 'irFill':
                getIRFill();
                break;
            case 'irDone':
                getIRDone();
                break;
            case 'irHome':
                getIRHome();
                break;
        }
    }

    function getIRFill() {
        var header = "Incident Report";
        $(".heading").text(header);

        var body =

            "<div id='block'>" +
            "<div id='left'>" +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(1); incidentsReportedOne();' ></button> " +
            "<div class='upDownText'>Fall Offs (By wave) - IN</div>" +
            "<div id='num1' class='upDownNum' name='IRDiv1'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(1); incidentsReportedOne();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(2); incidentsReportedTwo();' ></button> " +
            "<div class='upDownText'>Fall Offs (By collision) - IN</div>" +
            "<div id='num2' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(2); incidentsReportedTwo();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(3); incidentsReportedThree();' ></button>" +
            "<div class='upDownText'>Back-shoot/Nose-Dive - IN</div>" +
            "<div id='num3' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(3); incidentsReportedThree();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(4); incidentsReportedFour();' ></button> " +
            "<div class='upDownText'>Broaches - IN</div>" +
            "<div id='num4' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(4); incidentsReportedFour();'></button>" +
            "</div> " +

            "<div class='num'>" +
            "<button type='submit' class='clickAdd' onclick='add(5); incidentsReportedFive();' ></button> " +
            "<div class='upDownText'>Flying Craft - IN</div>" +
            "<div id='num5' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(5); incidentsReportedFive();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(6); incidentsReportedSix();' ></button> " +
            "<div class='upDownText'>Lost Craft (Serious) - IN</div>" +
            "<div id='num6' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(6); incidentsReportedSix();'></button>" +
            "</div> " +


            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(7); incidentsReportedSeven();' ></button> " +
            "<div class='upDownText'>Lost Craft (Severe) - IN</div>" +
            "<div id='num7' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(7); incidentsReportedSeven();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(8); incidentsReportedEight();' ></button> " +
            "<div class='upDownText'>Collision (Serious) - IN</div>" +
            "<div id='num8' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(8); incidentsReportedEight();'></button>" +
            "</div>" +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(9); incidentsReportedNine();' ></button> " +
            "<div class='upDownText'>Injury (Minor) - IN</div>" +
            "<div id='num9' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(9); incidentsReportedNine();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(10); incidentsReportedTen();' ></button> " +
            "<div class='upDownText'>Injury (Serious) - IN</div>" +
            "<div id='num10' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(10); incidentsReportedTen();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(11); incidentsReportedEleven();' ></button> " +
            "<div class='upDownText'>Injury (Severe) - IN</div>" +
            "<div id='num11' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(11); incidentsReportedEleven();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(12); incidentsReportedTwelve();' ></button> " +
            "<div class='upDownText'>Did Not Finish - IN</div>" +
            "<div id='num12' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(12); incidentsReportedTwelve();'></button>" +
            "</div>" +

            "</div>" +
            "<div id='right'>" +


            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(1); incidentsReportedOneOUT();' ></button> " +
            "<div class='upDownText'>Fall Offs (By wave) - OUT</div>" +
            "<div id='numOUT1' class='upDownNum' name='IRDiv1'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(1); incidentsReportedOneOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(2); incidentsReportedTwoOUT();' ></button> " +
            "<div class='upDownText'>Fall Offs (By collision) - OUT</div>" +
            "<div id='numOUT2' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(2); incidentsReportedTwoOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(3); incidentsReportedThreeOUT();' ></button>" +
            "<div class='upDownText'>Back-shoot/Nose-Dive - OUT</div>" +
            "<div id='numOUT3' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(3); incidentsReportedThreeOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(4); incidentsReportedFourOUT();' ></button> " +
            "<div class='upDownText'>Broaches - OUT</div>" +
            "<div id='numOUT4' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(4); incidentsReportedFourOUT();'></button>" +
            "</div> " +

            "<div class='num'>" +
            "<button type='submit' class='clickAdd' onclick='addOUT(5); incidentsReportedFiveOUT();' ></button> " +
            "<div class='upDownText'>Flying Craft - OUT</div>" +
            "<div id='numOUT5' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(5); incidentsReportedFiveOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(6); incidentsReportedSixOUT();' ></button> " +
            "<div class='upDownText'>Lost Craft (Serious) - OUT</div>" +
            "<div id='numOUT6' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(6); incidentsReportedSixOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(7); incidentsReportedSevenOUT();' ></button> " +
            "<div class='upDownText'>Lost Craft (Severe) - OUT</div>" +
            "<div id='numOUT7' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(7); incidentsReportedSevenOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(8); incidentsReportedEightOUT();' ></button> " +
            "<div class='upDownText'>Collision (Serious) - OUT</div>" +
            "<div id='numOUT8' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(8); incidentsReportedEightOUT();'></button>" +
            "</div>" +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(9); incidentsReportedNineOUT();' ></button> " +
            "<div class='upDownText'>Injury (Minor) - OUT</div>" +
            "<div id='numOUT9' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(9); incidentsReportedNineOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(10); incidentsReportedTenOUT();' ></button> " +
            "<div class='upDownText'>Injury (Serious) - OUT</div>" +
            "<div id='numOUT10' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(10); incidentsReportedTenOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(11); incidentsReportedElevenOUT();' ></button> " +
            "<div class='upDownText'>Injury (Severe) - OUT</div>" +
            "<div id='numOUT11' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(11); incidentsReportedElevenOUT();'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='addOUT(12); incidentsReportedTwelveOUT();' ></button> " +
            "<div class='upDownText'>Did Not Finish - OUT</div>" +
            "<div id='numOUT12' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minusOUT(12); incidentsReportedTwelveOUT();'></button>" +
            "</div>" +

            "</div>" +
            "</div>";


        $(".body").html(body);

        var footer =
            "<button type='button' class='blueButtons' onClick='irComplete()';>SUBMIT</button>" +
            "<button type='button' onclick='window.location.replace(\"index.html#irHome\")' class='exitButton'>HOME</button>";


        $(".footer").html(footer);
    }

    function getIRDone() {
        var header = "Incident Report";


        var body = "<p>Incident Report has been successfully submitted</p>"

        var footer = "<button type='button' class='blueButtons' onclick='window.location.replace(\"index.html#irHome\")'>HOME</button>";
        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }

    function getIRHome() {
        var header = "Incident Report Home";
        console.log(app.loginData.pID);


        var body = "<div class='error'></div><div class='sync'></div><div class='good'></div>" +
            "<p> Press start to begin data collection. </p>"

        var footer = "<button type='button' onclick='window.location.replace(\"index.html#eventSpecific\")' class='blueButtons' >Start</button>" +
            "<button type='button' onclick='window.location.replace(\"index.html\")' class='blueButtons'>Home</button>";
        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
        checkDataIR();
    }
}


function checkDataIR() {
    if (app.irArray.length == 0) {
        //Something good here
    } else if (app.irArrayUnfinished.length == 0) {
        $(".good").text("All data has been successfully sent to the server.");
        $(".sync").text("");
    } else {
        $(".good").text("");
        var count = (app.irArrayUnfinished.length)
        $(".error").text("You have " + count + " form/s in the process of being sent or could not be sent to the server. Please check internet connection and press the sync button.");
        $(".sync").html("<button type='button' onclick='sync();' class='syncButton'>SYNC</button>");
    }
}
