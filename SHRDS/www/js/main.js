if (!Object.prototype.watch) {
    Object.defineProperty(Object.prototype, "watch", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: function (prop, handler) {
            var
                oldval = this[prop],
                newval = oldval,
                getter = function () {
                    return newval;
                },
                setter = function (val) {
                    oldval = newval;
                    return newval = handler.call(this, prop, oldval, val);
                };

            if (delete this[prop]) { // can't watch constants
                Object.defineProperty(this, prop, {
                    get: getter,
                    set: setter,
                    enumerable: true,
                    configurable: true
                });
            }
        }
    });
}

// object.unwatch
if (!Object.prototype.unwatch) {
    Object.defineProperty(Object.prototype, "unwatch", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: function (prop) {
            var val = this[prop];
            delete this[prop]; // remove accessors
            this[prop] = val;
        }
    });
}

/*
 *
 * app represents the core object within the mobile application.
 * This object handles page navigation and tracks the state of the system
 *
 */
var app = {

    /*
     *
     *This function intialises the object 
     * by creating its data objects, setting up call backs and routing.
     *
     */
    initialize: function () {
        var self = this;

        //Flag for knowing if prevailing SHR or Event specific SHR
        //Set to one if user is filling in Prev, set to 2 if ir SHR and 0 if normal ir;
        self.SHRFlag = 0;
        //Flag for successfuly databse connection.
        var updatedFlag = self.updatedFlag = 0;
        //Init data stores for forms
        this.initData();
        //Detect if HASH changes
        $(window).on('hashchange', function () {
            console.log(window.location.hash);
            self.route();
        });


        //URL detection
        this.incidentStartURL = [/^#incident1/, /^#irComplete/, /^#irHome/];
        this.prevailingStartURL = /^#prevailing1/;
        this.eventSpecificURL = /^#eventSpecific/;
        this.formSelectURL = /^#formSelect/;
        this.adminURLS = [/^#adminPageSelect/, /^#adminPasswordChange/, /^#adminMetadata/, /^#adminNewUser/];
        this.SHRURLS = [/^#WHR/, /^#WTR/, /^#WPR/, /^#ZWR/, /^#STR/, /^#LDR/, /^#RCR/, /^#OHR/, /^#REV/, /^#SHR/, /^#TRANS/];

        //Intial routing to the logon page.
        self.route();
    },

    /*
     *
     * This is the function that intialises all the data objects
     *
     */
    initData: function () {
        //PREVSHR
        this.prevalingSHRData = new PrevailingData();
        this.prevalingSHRData.initialize();
        //IRSHR
        this.esSHRData = new eventSpecifcSHRData();
        this.esSHRData.initialize();
        //IR
        this.esIRData = new eventSpecifcIRData();
        this.esIRData.initialize();
        //Login data
        this.loginData = new loginData();
        this.loginData.intitalize();
        //store for previously filled data objects
        this.prevSHRArray = [];
        this.esSHRArray = [];
        this.irArray = [];
        //these one have been synced
        this.prevSHRArrayFinished = [];
        this.esSHRArrayFinished = [];
        this.irArrayFinished = [];
        //these one have not been synced
        this.prevSHRArrayUnfinished = [];
        this.esSHRArrayUnfinished = [];
        this.irArrayUnfinished = [];
    },

    /*
     * This resets the data objects
     *
     */
    resetData: function () {
        //PREVSHR
        this.prevalingSHRData = new PrevailingData();
        this.prevalingSHRData.initialize();
        //IRSHR
        this.esSHRData = new eventSpecifcSHRData();
        this.esSHRData.initialize();
        //IR
        this.esIRData = new eventSpecifcIRData();
        this.esIRData.initialize();
    },

    /*
     *
     * The page routing is perfomed by this callback function.
     * This function is called everytime the application sences that the HASH has changed.
     * The application is routed based on this HASH.
     *
     */
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
        } else if (hash.match(app.SHRURLS[10])) {
            //During Transition we do not want to be routed anywhere
        } else if (hash.match(app.incidentStartURL[0])) {
            new IRView().render("irFill");
        } else if (hash.match(app.incidentStartURL[1])) {
            new IRView().render("irDone");
        } else if (hash.match(app.incidentStartURL[2])) {
            new IRView().render("irHome");
        } else if (hash.match(app.adminURLS[0])) {
            new AdminSelectView().render("formSelect");
        } else if (hash.match(app.adminURLS[1])) {
            new AdminSelectView().render("resetPassword");
        } else if (hash.match(app.adminURLS[2])) {
            new AdminSelectView().render("metaData");
        } else if (hash.match(app.adminURLS[3])) {
            new AdminSelectView().render("newUser");
        } else if (hash.match(app.eventSpecificURL)) {
            new EventSpecificView().render();
        } else if (hash.match(app.formSelectURL)) {
            new FormSelectView().render();
        } else if (hash.match(app.prevailingStartURL)) {
            new PrevailingView().render();
        } else {
            console.log("failed to match any URLS");
        }
    }
};
