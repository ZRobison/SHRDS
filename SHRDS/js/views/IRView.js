var IRView = function () {


    this.render = function () {
        var header = "Incident Report";
        $(".heading").text(header);

        var body =

            "<div id='block'>" +
            "<div id='left'>" +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(1);' ></button> " +
            "<div class='upDownText'>Fall Offs (By wave)</div>" +
            "<div id='num1' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(1);'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(2);' ></button> " +
            "<div class='upDownText'>Fall Offs (By collision)</div>" +
            "<div id='num2' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(2);'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(3);' ></button>" +
            "<div class='upDownText'>Back-shoot/Nose-Dive</div>" +
            "<div id='num3' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(3);'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(4);' ></button> " +
            "<div class='upDownText'>Broaches</div>" +
            "<div id='num4' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(4);'></button>" +
            "</div> " +

            "<div class='num'>" +
            "<button type='submit' class='clickAdd' onclick='add(5);' ></button> " +
            "<div class='upDownText'>Flying Craft</div>" +
            "<div id='num5' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(5);'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(6);' ></button> " +
            "<div class='upDownText'>Lost Craft (Serious)</div>" +
            "<div id='num6' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(6);'></button>" +
            "</div> " +

            "</div>" +
            "<div id='right'>" +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(7);' ></button> " +
            "<div class='upDownText'>Lost Craft (Severe)</div>" +
            "<div id='num7' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(7);'></button>" +
            "</div> " +

            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(8);' ></button> " +
            "<div class='upDownText'>Collision (Serious)</div>" +
            "<div id='num8' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(8);'></button>" +
            "</div>" +
			
            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(9);' ></button> " +
            "<div class='upDownText'>Injury (Minor)</div>" +
            "<div id='num9' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(9);'></button>" +
            "</div> " +
			
            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(10);' ></button> " +
            "<div class='upDownText'>Injury (Serious)</div>" +
            "<div id='num10' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(10);'></button>" +
            "</div> " +
		
            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(11);' ></button> " +
            "<div class='upDownText'>Injury (Severe)</div>" +
            "<div id='num11' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(11);'></button>" +
            "</div> " +
			
            "<div class='num' >" +
            "<button type='submit' class='clickAdd' onclick='add(12);' ></button> " +
            "<div class='upDownText'>Did Not Finish</div>" +
            "<div id='num12' class='upDownNum'>0</div>" +
            "<button type='submit' class='clickMinus' onclick='minus(12);'></button>" +
            "</div>" +

            "</div>" +
            "</div>";


        $(".body").html(body);
        var footer =
            "<button type='button' class='blueButtons'>SUBMIT</button>" +
            "<button type='button' class='exitButton'>EXIT</button>" +
            "<form>";


        $(".footer").html(footer);
    }
}
