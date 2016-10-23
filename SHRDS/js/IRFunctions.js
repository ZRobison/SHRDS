var numMin = 0;
var numMax = 20;
var gPMResultFOWave = 0;
var gPMResultFOColl = 0;
var gPMResultBSND = 0;
var gPMResultBroach = 0;
var gPMResultFlyingCraft = 0;
var gPMResultLCSerious = 0;
var gPMResultLCSevere = 0;
var gPMResultCollisionSer = 0;
var gPMResultINJMin = 0;
var gPMResultINJSer = 0;
var gPMResultINJSev = 0;
var gPMResultDNF = 0;

function add(param) {
    var numLoggedA = 1;
    gPMResult = 1;
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMax || num > numMax) {
        num = numMax;
        numLoggedA = 20;
        gPMResult = numLoggedA;
    }
    else {
        document.getElementById("num" + param).innerHTML++;
        numLoggedA = (((numLoggedA) * 1) + ((num) * 1));
        gPMResult = numLoggedA;
    }
    console.log(numLoggedA);
    console.log(gPMResult);
    return gPMResult;
}

function minus(param) {
    var numLoggedM = -1;
    gPMResult = -1;
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMin || num < numMin) {
        num = numMin;
        numLoggedM = 0;
        gPMResult = numLoggedM;
    }
    else {
        document.getElementById("num" + param).innerHTML--;
        numLoggedM = (((numLoggedM) * 1) + ((num) * 1));
        gPMResult = numLoggedM;
    }
    console.log(numLoggedM);
    console.log(gPMResult);
    return gPMResult;
}
// data storing functions
// placing values to variables
function incidentsReportedOne() {
    if ('add(1)' || 'minus(1)') {
        gPMResultFOWave = gPMResult;
        return gPMResultFOWave;
    }
}

function incidentsReportedTwo() {
    if ('add(2)' || 'minus(2)') {
        gPMResultFOColl = gPMResult;
        return gPMResultFOColl;
    }
}

function incidentsReportedThree() {
    if ('add(3)' || 'minus(3)') {
        gPMResultBSND = gPMResult;
        return gPMResultBSND;
    }
}

function incidentsReportedFour() {
    if ('add(4)' || 'minus(4)') {
        gPMResultBroach = gPMResult;
        return gPMResultBroach;
    }
}

function incidentsReportedFive() {
    if ('add(5)' || 'minus(5)') {
        gPMResultFlyingCraft = gPMResult;
        return gPMResultFlyingCraft;
    }
}

function incidentsReportedSix() {
    if ('add(6)' || 'minus(6)') {
        gPMResultLCSerious = gPMResult;
        return gPMResultLCSerious;
    }
}

function incidentsReportedSeven() {
    if ('add(7)' || 'minus(7)') {
        gPMResultLCSevere = gPMResult;
        return gPMResultLCSevere;
    }
}

function incidentsReportedEight() {
    if ('add(8)' || 'minus(8)') {
        gPMResultCollisionSer = gPMResult;
        return gPMResultCollisionSer;
    }
}

function incidentsReportedNine() {
    if ('add(9)' || 'minus(9)') {
        gPMResultINJMin = gPMResult;
        return gPMResultINJMin;
    }
}

function incidentsReportedTen() {
    if ('add(10)' || 'minus(10)') {
        gPMResultINJSer = gPMResult;
        return gPMResultINJSer;
    }
}

function incidentsReportedEleven() {
    if ('add(11)' || 'minus(11)') {
        gPMResultINJSev = gPMResult;
        return gPMResultINJSev;
    }
}

function incidentsReportedTwelve() {
    if ('add(12)' || 'minus(12)') {
        gPMResultDNF = gPMResult;
        return gPMResultDNF;
    }
}
// function for incident values 
function getIRValues() {
    // storing variables that hold the value to memory 
    app.esIRData.IRIN.FOWave = gPMResultFOWave;
    console.log(app.esIRData.IRIN.FOWave);
    //
    app.esIRData.IRIN.pFOCollision = gPMResultFOColl;
    console.log(app.esIRData.IRIN.pFOCollision);
    //
    app.esIRData.IRIN.pBSND = gPMResultBSND;
    console.log(app.esIRData.IRIN.pBSND);
    //
    app.esIRData.IRIN.pBroach = gPMResultBroach;
    console.log(app.esIRData.IRIN.pBroach);
    //
    app.esIRData.IRIN.pFlyingCraft = gPMResultFlyingCraft;
    console.log(app.esIRData.IRIN.pFlyingCraft);
    //
    app.esIRData.IRIN.pLCSerious = gPMResultLCSerious;
    console.log(app.esIRData.IRIN.pLCSerious);
    //
    app.esIRData.IRIN.pLCSevere = gPMResultLCSevere;
    console.log(app.esIRData.IRIN.pLCSevere);
    //
    app.esIRData.IRIN.pCollisionSer = gPMResultCollisionSer;
    console.log(app.esIRData.IRIN.pCollisionSer);
    //
    app.esIRData.IRIN.pINJMin = gPMResultINJMin;
    console.log(app.esIRData.IRIN.pINJMin);
    //
    app.esIRData.IRIN.pINJSer = gPMResultINJSer;
    console.log(app.esIRData.IRIN.pINJSer);
    //
    app.esIRData.IRIN.pINJSev = gPMResultINJSev;
    console.log(app.esIRData.IRIN.pINJSev);
    //
    app.esIRData.IRIN.pDNF = gPMResultDNF;
    console.log(app.esIRData.IRIN.pDNF);
    //
}