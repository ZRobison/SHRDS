var SHRData = function() {
	this.initialize = function() {
		this.pWHR = -1;
		this.pWTR = -1;
		this.pWPR = -1;
		this.pZWR = -1;
		this.pSTR = -1;
		this.pLDR = -1;
		this.pRCR = -1;
		this.pOHR = -1;
		this.totalSHR = -1;	
	}
}

//Have not made an event specific SHR

var PrevailingData = function() {
	this.initialize= function() {
		this.SHR = new SHRData();
		this.SHR.initialize();
		this.date = "";
		this.time = "";
		this.beach = "";
		this.windDirection = "";
		this.nearestTideLow = "";
		this.nearestTideHigh = "";
		this.tideTimeLow = -1;
		this.tideTimeHigh = -1;
		this.tideHieghtLow = -1.0;
		this.tideHieghtHigh = -1.0;
	}

}

var IRData = function(){
	this.initialize= function() {
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

var eventSpercifcIRData = function() {
	this.initialize= function() {
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
