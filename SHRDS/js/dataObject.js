var SHRData = function () {
        this.initialize = function () {
            this.pWHR = -1;
            this.pWTR = -1;
            this.pWPR = -1;
            this.pZWR = -1;
            this.pSTR = -1;
			this.pCrossWaves = 0;
            this.pLDR = -1;
            this.pRCR = -1;
            this.pOHR = -1;
            this.totalSHR = -1;
        }
        this.calculate = function () {
            this.totalSHR = (this.pWHR * 1) + (this.pWTR * 1) + (this.pWPR * 1) + (this.pZWR * 1) + (this.pSTR * 1) + (this.pCrossWaves*1) + (this.pLDR * 1) + (this.pRCR * 1) + (this.pOHR * 1);
            return this.totalSHR;
        }
    }
    //Have not made an event specific SHR - this might be an old comment 19/10/2016
var PrevailingData = function () {
    this.initialize = function () {
        this.SHR = new SHRData();
        this.SHR.initialize();
        this.time = "";
        this.beach = "";
        this.windDirection = "";
		this.windSpeed = "";
        this.nearestTideLow = "";
        this.nearestTideHigh = "";
        this.tideTimeLow = -1;
        this.tideTimeHigh = -1;
        this.tideHieghtLow = -1.0;
        this.tideHieghtHigh = -1.0;
        //needs to be reviewed 
        //this.date = "";
    }
}
var eventSpecifcSHRData = function () {
    this.initialize = function () {
        this.SHR = new SHRData();
        this.SHR.initialize();
        this.arena = "";
		this.heat = "";
        this.age = -1;        
        this.round = "";
        this.finalType = -1;
        this.craftType = ""; 
        this.inOrOut = -1;
        this.beach = "";
		this.time = ""; //might need to change
        //need to be reviewed 
        //this.numberOfCraft = "";
        //this.date = "";
        //this.gender = '';
		//this.raceNumber = -1;
    }
}
var IRData = function () {
    this.initialize = function () {
        this.pDNF = -1;
        this.FOWave = -1;
        this.pFOCollision = -1;
        this.pBSND = -1;
        this.pBroach = -1;
        this.pFlyingCraft = -1;
        this.pLCSerious = -1;
        this.pLCSevere = -1;
        this.pCollisionMin = -1;
        this.pCollisionSer = -1;
        this.pINJMin = -1;
        this.pINJSer = -1;
        this.pINJSev = -1;
    }
}
var eventSpecifcIRData = function () {
        this.initialize = function () {
            this.IRIN = new IRData();
            this.IROUT = new IRData();
            this.IRIN.initialize();
            this.IROUT.initialize();
            this.date = "";
            this.time = "";
            this.beach = "";
            this.arena = "";
            this.raceNumber = -1;
            this.age = -1;
            this.gender = '';
            this.craftType = "";
            this.numberOfCraft = "";
        }
    }
    // new login object
var loginData = function () {
    this.intitalize = function () {
        this.pID = -1;
        this.pTSOStatus = -1;
        this.pAdminStatus = -1;
    }
}