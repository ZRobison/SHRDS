//IR 2 - OUT Functions
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
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMax2 || num > numMax2) {
        num = numMax2;
        numLoggedA2 = 20;
        gPMResult2 = numLoggedA2;
    } else {
        document.getElementById("num" + param).innerHTML++;
        numLoggedA2 = (((numLoggedA2) * 1) + ((num) * 1));
        gPMResult2 = numLoggedA2;
    }
    console.log(numLoggedA2);
    console.log(gPMResult2);
    return gPMResult2;
}

function minusOUT(param) {
    var numLoggedM2 = -1;
    gPMResult2 = -1;
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMin2 || num < numMin2) {
        num = numMin2;
        numLoggedM2 = 0;
        gPMResult2 = numLoggedM2;
    } else {
        document.getElementById("num" + param).innerHTML--;
        numLoggedM2 = (((numLoggedM2) * 1) + ((num) * 1));
        gPMResult2 = numLoggedM2;
    }
    console.log(numLoggedM2);
    console.log(gPMResult2);
    return gPMResult2;
}
// data storing functions
// placing values to variables
function incidentsReportedOneOUT() {
    if ('add(1)' || 'minus(1)') {
        gPMResultFOWave2 = gPMResult;
        return gPMResultFOWave2;
    }
}

function incidentsReportedTwoOUT() {
    if ('add(2)' || 'minus(2)') {
        gPMResultFOColl2 = gPMResult;
        return gPMResultFOColl2;
    }
}

function incidentsReportedThreeOUT() {
    if ('add(3)' || 'minus(3)') {
        gPMResultBSND2 = gPMResult;
        return gPMResultBSND2;
    }
}

function incidentsReportedFourOUT() {
    if ('add(4)' || 'minus(4)') {
        gPMResultBroach2 = gPMResult;
        return gPMResultBroach2;
    }
}

function incidentsReportedFiveOUT() {
    if ('add(5)' || 'minus(5)') {
        gPMResultFlyingCraft2 = gPMResult;
        return gPMResultFlyingCraft2;
    }
}

function incidentsReportedSixOUT() {
    if ('add(6)' || 'minus(6)') {
        gPMResultLCSerious2 = gPMResult;
        return gPMResultLCSerious2;
    }
}

function incidentsReportedSevenOUT() {
    if ('add(7)' || 'minus(7)') {
        gPMResultLCSevere2 = gPMResult;
        return gPMResultLCSevere2;
    }
}

function incidentsReportedEightOUT() {
    if ('add(8)' || 'minus(8)') {
        gPMResultCollisionSer2 = gPMResult;
        return gPMResultCollisionSer2;
    }
}

function incidentsReportedNineOUT() {
    if ('add(9)' || 'minus(9)') {
        gPMResultINJMin2 = gPMResult;
        return gPMResultINJMin2;
    }
}

function incidentsReportedTenOUT() {
    if ('add(10)' || 'minus(10)') {
        gPMResultINJSer2 = gPMResult;
        return gPMResultINJSer2;
    }
}

function incidentsReportedElevenOUT() {
    if ('add(11)' || 'minus(11)') {
        gPMResultINJSev2 = gPMResult;
        return gPMResultINJSev2;
    }
}

function incidentsReportedTwelveOUT() {
    if ('add(12)' || 'minus(12)') {
        gPMResultDNF2 = gPMResult;
        return gPMResultDNF2;
    }
}
// function for incident values 
function getIRValuesOUT() {
    // storing variables that hold the value to memory 
    app.esIRData.IROUT.FOWave = gPMResultFOWave2;
    console.log(app.esIRData.IROUT.FOWave2);
    //
    app.esIRData.IROUT.pFOCollision = gPMResultFOColl2;
    console.log(app.esIRData.IROUT.pFOCollision2);
    //
    app.esIRData.IROUT.pBSND = gPMResultBSND2;
    console.log(app.esIRData.IROUT.pBSND2);
    //
    app.esIRData.IROUT.pBroach = gPMResultBroach2;
    console.log(app.esIRData.IROUT.pBroach2);
    //
    app.esIRData.IROUT.pFlyingCraft = gPMResultFlyingCraft2;
    console.log(app.esIRData.IROUT.pFlyingCraft2);
    //
    app.esIRData.IROUT.pLCSerious = gPMResultLCSerious2;
    console.log(app.esIRData.IROUT.pLCSerious2);
    //
    app.esIRData.IROUT.pLCSevere = gPMResultLCSevere2;
    console.log(app.esIRData.IROUT.pLCSevere2);
    //
    app.esIRData.IROUT.pCollisionSer = gPMResultCollisionSer2;
    console.log(app.esIRData.IROUT.pCollisionSer2);
    //
    app.esIRData.IROUT.pINJMin = gPMResultINJMin2;
    console.log(app.esIRData.IROUT.pINJMin2);
    //
    app.esIRData.IROUT.pINJSer = gPMResultINJSer2;
    console.log(app.esIRData.IROUT.pINJSer2);
    //
    app.esIRData.IROUT.pINJSev = gPMResultINJSev2;
    console.log(app.esIRData.IROUT.pINJSev2);
    //
    app.esIRData.IROUT.pDNF = gPMResultDNF2;
    console.log(app.esIRData.IROUT.pDNF2);
    //
}

function irComplete() {
    window.location.hash = "#irComplete";
}
