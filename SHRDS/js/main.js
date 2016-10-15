var app = {

    initialize: function () {
        var self = this;

        //Flag for knowing if prevailing SHR or Event specific SHR
        //Set to one if user is filling in Prev else 0;
        self.SHRFlag = 1;
        //Init data stores for forms
        this.initData();
        //Detect if HASH changes
        $(window).on('hashchange', function () {
            console.log(window.location.hash);
            self.route();
        });

        //URL detection
        this.incidentStartURL = /^#incident1/;
        this.adminFormSelectURL = /^#admin1/;
        this.prevailingStartURL = /^#prevailing1/;
        this.SHRURLS = [/^#WHR/, /^#WTR/, /^#WPR/, /^#ZWR/, /^#STR/, /^#LDR/, /^#RCR/, /^#OHR/, /^#REV/, /^#SHR/];


        self.route();
    },

    initData: function () {
        this.prevalingSHRData = new PrevailingData();
        this.prevalingSHRData.initialize();
        this.esIRData = new eventSpercifcIRData();
        this.esIRData.initialize();
    },



    route: function () {
        var hash = window.location.hash;
        if (!hash) {
            new LogonView().render();
        } else if (hash.match(app.SHRURLS[0])) {
            new SHRView().render("WHR");
        } else if (hash.match(app.SHRURLS[1])) {
            new SHRView().render("WTR");
        } else if (hash.match(app.SHRURLS[2])) {
            new SHRView().render("WPR");
        } else if (hash.match(app.SHRURLS[3])) {
            new SHRView().render("ZWR");
        } else if (hash.match(app.SHRURLS[4])) {
            new SHRView().render("STR");
        } else if (hash.match(app.SHRURLS[5])) {
            new SHRView().render("LDR");
        } else if (hash.match(app.SHRURLS[6])) {
            new SHRView().render("RCR");
        } else if (hash.match(app.SHRURLS[7])) {
            new SHRView().render("OHR");
        } else if (hash.match(app.SHRURLS[8])) {
            new SHRView().render("REV");
        } else if (hash.match(app.SHRURLS[9])) {
            new SHRView().render("SHR");
        } else if (hash.match(app.incidentStartURL)) {
            new IRView().render();
        } else if (hash.match(app.adminFormSelectURL)) {
            new AdminSelectView().render();
        } else if (hash.match(app.prevailingStartURL)) {
            console.log("matched prevailing url");
            new PrevailingView().render();
        }

        $("input[type='radio']").click(function () {
            var previousValue = $(this).attr('previousValue');
            var name = $(this).attr('name');

            if (previousValue == 'checked') {
                $(this).removeAttr('checked');
                $(this).attr('previousValue', false);
            } else {
                $("input[name=" + name + "]:radio").attr('previousValue', false);
                $(this).attr('previousValue', 'checked');
            }
        });
    }
};
