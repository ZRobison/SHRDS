var IRView = function () {

    this.render = function () {
        var header = "Incident Report";

        var body =

            /* FIXED UP HTML FOR THIS. STILL NEEDS ALLIGNMENT FOR ELEMENTS */
            "<div id='block'> " +
            "<div id='left'> " +

            "<form action = '' method=''>" +

            "Fall Offs(By Wave) &nbsp;" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Fall Offs(By Collision) &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Back-shoot/Nose-Dive &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Broaches &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Flying Craft &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Lost Craft(Serious) &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'>" +
			
            "</div>" +
            "<div id='right'>" +
			
            "Lost Craft(Severe) &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Collision(Serious) &nbsp;" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Injury(Minor) &nbsp;" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Injury(Serious) &nbsp;" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Fall Offs(By Wave) &nbsp;" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Injury(Severe) &nbsp;" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'>" +
            "</div>" +
            "</div>";


        var footer =
            "<button type='button' class='blueButtons'>NEXT</button>" +
            "<form>";

        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
    }


}
