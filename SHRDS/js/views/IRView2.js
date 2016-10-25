//IR 2 - OUT View
var IRView2 = function () {


    this.render = function (type) {
        var self = this;

        switch (type) {
            case 'irFill2':
                getIRFill2();
                break;
            case 'irDone':
                getIRDone();
                break;
        }

        function getIRFill2() {
            var header = "Incident Report";
            $(".heading").text(header);

            var body =

                "<div id='block'>" +
                "<div id='left'>" +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(1); incidentsReportedOneOUT();' ></button> " +
                "<div class='upDownText'>Fall Offs (By wave) TEST2</div>" +
                "<div id='num1' class='upDownNum' name='IRDiv1'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(1); incidentsReportedOneOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(2); incidentsReportedTwoOUT();' ></button> " +
                "<div class='upDownText'>Fall Offs (By collision)</div>" +
                "<div id='num2' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(2); incidentsReportedTwoOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(3); incidentsReportedThreeOUT();' ></button>" +
                "<div class='upDownText'>Back-shoot/Nose-Dive</div>" +
                "<div id='num3' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(3); incidentsReportedThreeOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(4); incidentsReportedFourOUT();' ></button> " +
                "<div class='upDownText'>Broaches</div>" +
                "<div id='num4' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(4); incidentsReportedFourOUT();'></button>" +
                "</div> " +

                "<div class='num'>" +
                "<button type='submit' class='clickAdd' onclick='addOUT(5); incidentsReportedFiveOUT();' ></button> " +
                "<div class='upDownText'>Flying Craft</div>" +
                "<div id='num5' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(5); incidentsReportedFiveOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(6); incidentsReportedSixOUT();' ></button> " +
                "<div class='upDownText'>Lost Craft (Serious)</div>" +
                "<div id='num6' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(6); incidentsReportedSixOUT();'></button>" +
                "</div> " +

                "</div>" +
                "<div id='right'>" +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(7); incidentsReportedSevenOUT();' ></button> " +
                "<div class='upDownText'>Lost Craft (Severe)</div>" +
                "<div id='num7' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(7); incidentsReportedSevenOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(8); incidentsReportedEightOUT();' ></button> " +
                "<div class='upDownText'>Collision (Serious)</div>" +
                "<div id='num8' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(8); incidentsReportedEightOUT();'></button>" +
                "</div>" +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(9); incidentsReportedNineOUT();' ></button> " +
                "<div class='upDownText'>Injury (Minor)</div>" +
                "<div id='num9' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(9); incidentsReportedNineOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(10); incidentsReportedTenOUT();' ></button> " +
                "<div class='upDownText'>Injury (Serious)</div>" +
                "<div id='num10' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(10); incidentsReportedTenOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(11); incidentsReportedElevenOUT();' ></button> " +
                "<div class='upDownText'>Injury (Severe)</div>" +
                "<div id='num11' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(11); incidentsReportedElevenOUT();'></button>" +
                "</div> " +

                "<div class='num' >" +
                "<button type='submit' class='clickAdd' onclick='addOUT(12); incidentsReportedTwelveOUT();' ></button> " +
                "<div class='upDownText'>Did Not Finish</div>" +
                "<div id='num12' class='upDownNum'>0</div>" +
                "<button type='submit' class='clickMinus' onclick='minusOUT(12); incidentsReportedTwelveOUT();'></button>" +
                "</div>" +

                "</div>" +
                "</div>";


            $(".body").html(body);
            var footer =
                "<button type='button' class='blueButtons' onClick='getIRValuesOUT(); irComplete()'>SUBMIT</button>" +
                "<button type='button' class='exitButton'>EXIT</button>" +
                "<form>";


            $(".footer").html(footer);
        }

        function getIRDone() {
            var header = "Incident Report";


            var body = "<p>Incident Report has been successfully submitted</p>"

            var footer = "<button type='button' class='blueButtons' onClick='insertSHR()'>LOGOUT</button>";
            $(".heading").text(header);
            $(".body").html(body);
            $(".footer").html(footer);
        }
    }
}
