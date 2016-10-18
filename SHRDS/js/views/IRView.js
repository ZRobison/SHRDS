var IRView = function () {

    this.render = function () {
        var header = "Incident Report";

        var body =

            "<div class='container'>" +
            "<div class='row'>" +
            "<div class='col-md-2'>" +

            "<form action = '' method=''>" +

            "Fall Offs(By Wave)" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Fall Offs(By Collision)" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Back-shoot/Nose-Dive" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Broaches" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Flying Craft" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Lost Craft(Serious)" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "</div>" +

            "<div class='col-md-2'>" +

            "Lost Craft(Severe)" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Collision(Serious)" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Injury(Minor)" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Injury(Serious)" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'><br>" +

            "Fall Offs(By Wave)" +
            "<button type='submit'>&#45;</button>" +
            "<button type='submit'>&#43;</button>" +
            "<input type='text'><br>" +

            "Injury(Severe)" +
            "<button type='submit'>&#45;</button> " +
            "<button type='submit'>&#43;</button> " +
            "<input type='text'>" +
            "</div>" +
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
