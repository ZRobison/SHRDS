var OHRData = function(){
	 this.initialize = function () {
        this.pRRG = 0; //Rocks, Reeds or Grornes
        this.pGOW = 0; //Jetties, outflow pipes, wrecks
		this.pUCS = 0; //Uncontriled surf craft
        this.pFSF = 0; //Floating logs, Seaweed and other Floatsam
        this.pWT = 0; //Water temp
        this.pPMS = 0; //Pollution or marine stingers
        this.pVI = 0; //Visual Impairment
    }
	 this.calculate = function () {
        this.totalSHR = (this.pRRG * 1) + (this.pGOW * 1) + (this.pFSF * 1) + (this.pWT * 1) + (this.pPMS * 1) + (this.pVI * 1) + (this.pUCS * 1);
        return this.totalSHR;
    }
}

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
        this.pOHR = new OHRData();
		this.pOHR.initialize();
        this.totalSHR = -1;
    }
    this.calculate = function () {
        this.totalSHR = (this.pWHR * 1) + (this.pWTR * 1) + (this.pWPR * 1) + (this.pZWR * 1) + (this.pSTR * 1) + (this.pCrossWaves * 1) + (this.pLDR * 1) + (this.pRCR * 1) + (this.pOHR.calculate());
        return this.totalSHR;
    }
}

var PrevailingData = function () {
    this.initialize = function () {
        this.SHR = new SHRData();
        this.SHR.initialize();
        this.time = "";
		this.arena = 0;
        this.beach = -1;
        this.windDirection = -1;
        this.windSpeed = -1;
        this.tideTimeLow = -1;
        this.tideTimeHigh = -1;
        this.tideHieghtLow = -1.0;
        this.tideHieghtHigh = -1.0;
        //needs to be reviewed 
        this.date = "";
    }
}
var eventSpecifcSHRData = function () {
    this.initialize = function () {
        this.SHR = new SHRData();
        this.SHR.initialize();
        this.arena = "";
        this.heat = "";
        this.age = "";
        this.round = "";
        this.finalType = -1;
        this.craftType = "";
        this.inOrOut = -1;
        this.beach = "";
        this.time = "";
        //need to be reviewed 
        //this.numberOfCraft = "";
        this.date = "";
        this.gender = 'M';
    }
}
var IRData = function () {
    this.initialize = function () {
        this.pDNF = 0;
        this.FOWave = 0;
        this.pFOCollision = 0;
        this.pBSND = 0;
        this.pBroach = 0;
        this.pFlyingCraft = 0;
        this.pLCSerious = 0;
        this.pLCSevere = 0;
        this.pCollisionMin = 0;
        this.pCollisionSer = 0;
        this.pINJMin = 0;
        this.pINJSer = 0;
        this.pINJSev = 0;
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
            this.gender = 'F';
            this.heat = "";
            this.round = "";
            this.craftType = "";
            this.numberOfCraft = "";
            this.finalType = -1;
        }
    }
    // new login object
var loginData = function () {
    this.intitalize = function () {
        this.pID = -1;
        this.pTSOStatus = -1;
        this.pAdminStatus = -1;
        this.incidentFName = "";
        this.incidentLName = "";
        this.incidentEmail = "";
    }
}
