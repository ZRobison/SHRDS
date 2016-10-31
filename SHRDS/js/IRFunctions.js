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
    } else {
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
    } else {
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

function irComplete() {
    window.location.hash = "#irComplete";
}
////////
////////
////////

//IR 2 - OUT Functions  TRANSFER TO ORIGINAL 
var numMin2 = 0;
var numMax2 = 20;
var gPMResultFOWave2 = 0;
var gPMResultFOColl2 = 0;
var gPMResultBSND2 = 0;
var gPMResultBroach2 = 0;
var gPMResultFlyingCraft2 = 0;
var gPMResultLCSerious2 = 0;
var gPMResultLCSevere2 = 0;
var gPMResultCollisionSer2 = 0;
var gPMResultINJMin2 = 0;
var gPMResultINJSer2 = 0;
var gPMResultINJSev2 = 0;
var gPMResultDNF2 = 0;

function addOUT(param) {
    var numLoggedA2 = 1;
    gPMResult2 = 1;
    var num2 = document.getElementById("numOUT" + param).innerHTML;
    if (num2 == numMax2 || num2 > numMax2) {
        num2 = numMax2;
        numLoggedA2 = 20;
        gPMResult2 = numLoggedA2;
    } else {
        document.getElementById("numOUT" + param).innerHTML++;
        numLoggedA2 = (((numLoggedA2) * 1) + ((num2) * 1));
        gPMResult2 = numLoggedA2;
    }
    console.log(numLoggedA2);
    console.log(gPMResult2);
    return gPMResult2;
}

function minusOUT(param) {
    var numLoggedM2 = -1;
    gPMResult2 = -1;
    var num2 = document.getElementById("numOUT" + param).innerHTML;
    if (num2 == numMin2 || num2 < numMin2) {
        num2 = numMin2;
        numLoggedM2 = 0;
        gPMResult2 = numLoggedM2;
    } else {
        document.getElementById("numOUT" + param).innerHTML--;
        numLoggedM2 = (((numLoggedM2) * 1) + ((num2) * 1));
        gPMResult2 = numLoggedM2;
    }
    console.log(numLoggedM2);
    console.log(gPMResult2);
    return gPMResult2;
}
// data storing functions
// placing values to variables
function incidentsReportedOneOUT() {
    if ('addOUT(1)' || 'minusOUT(1)') {
        gPMResultFOWave2 = gPMResult2;
        return gPMResultFOWave2;
    }
}

function incidentsReportedTwoOUT() {
    if ('addOUT(2)' || 'minusOUT(2)') {
        gPMResultFOColl2 = gPMResult2;
        return gPMResultFOColl2;
    }
}

function incidentsReportedThreeOUT() {
    if ('addOUT(3)' || 'minusOUT(3)') {
        gPMResultBSND2 = gPMResult2;
        return gPMResultBSND2;
    }
}

function incidentsReportedFourOUT() {
    if ('addOUT(4)' || 'minusOUT(4)') {
        gPMResultBroach2 = gPMResult2;
        return gPMResultBroach2;
    }
}

function incidentsReportedFiveOUT() {
    if ('addOUT(5)' || 'minusOUT(5)') {
        gPMResultFlyingCraft2 = gPMResult2;
        return gPMResultFlyingCraft2;
    }
}

function incidentsReportedSixOUT() {
    if ('addOUT(6)' || 'minusOUT(6)') {
        gPMResultLCSerious2 = gPMResult2;
        return gPMResultLCSerious2;
    }
}

function incidentsReportedSevenOUT() {
    if ('addOUT(7)' || 'minusOUT(7)') {
        gPMResultLCSevere2 = gPMResult2;
        return gPMResultLCSevere2;
    }
}

function incidentsReportedEightOUT() {
    if ('addOUT(8)' || 'minusOUT(8)') {
        gPMResultCollisionSer2 = gPMResult2;
        return gPMResultCollisionSer2;
    }
}

function incidentsReportedNineOUT() {
    if ('addOUT(9)' || 'minusOUT(9)') {
        gPMResultINJMin2 = gPMResult2;
        return gPMResultINJMin2;
    }
}

function incidentsReportedTenOUT() {
    if ('addOUT(10)' || 'minusOUT(10)') {
        gPMResultINJSer2 = gPMResult2;
        return gPMResultINJSer2;
    }
}

function incidentsReportedElevenOUT() {
    if ('addOUT(11)' || 'minusOUT(11)') {
        gPMResultINJSev2 = gPMResult2;
        return gPMResultINJSev2;
    }
}

function incidentsReportedTwelveOUT() {
    if ('addOUT(12)' || 'minusOUT(12)') {
        gPMResultDNF2 = gPMResult2;
        return gPMResultDNF2;
    }
}
// function for incident values 
function getIRValuesOUT() {
    // storing variables that hold the value to memory 
    app.esIRData.IROUT.FOWave = gPMResultFOWave2;

    //
    app.esIRData.IROUT.pFOCollision = gPMResultFOColl2;

    //
    app.esIRData.IROUT.pBSND = gPMResultBSND2;

    //
    app.esIRData.IROUT.pBroach = gPMResultBroach2;

    //
    app.esIRData.IROUT.pFlyingCraft = gPMResultFlyingCraft2;

    //
    app.esIRData.IROUT.pLCSerious = gPMResultLCSerious2;

    //
    app.esIRData.IROUT.pLCSevere = gPMResultLCSevere2;

    //
    app.esIRData.IROUT.pCollisionSer = gPMResultCollisionSer2;

    //
    app.esIRData.IROUT.pINJMin = gPMResultINJMin2;

    //
    app.esIRData.IROUT.pINJSer = gPMResultINJSer2;

    //
    app.esIRData.IROUT.pINJSev = gPMResultINJSev2;

    //
    app.esIRData.IROUT.pDNF = gPMResultDNF2;

    //
}
