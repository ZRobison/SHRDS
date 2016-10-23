var numMin = 0;
var numMax = 20;

function add(param) {
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMax || num > numMax) {
        num = numMax;
    } else {
        document.getElementById("num" + param).innerHTML++;
    }
}

function minus(param) {
    var num = document.getElementById("num" + param).innerHTML;
    if (num == numMin || num < numMin) {
        num = numMin;
    } else {
        document.getElementById("num" + param).innerHTML--;
    }
}

// data storing functions

// event specific functions 
function getIRValues(){
	app.esIRData.IRIN.FOWave = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.FOWave);
	  //
	app.esIRData.IRIN.pFOCollision = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pFOCollision);
	  //
	app.esIRData.IRIN.pBSND = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pBSND);
	  //
	app.esIRData.IRIN.pBroach = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pBroach);
	  //
	app.esIRData.IRIN.pFlyingCraft = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pFlyingCraft);
	  //
	app.esIRData.IRIN.pLCSerious = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pLCSerious);
	  //
	app.esIRData.IRIN.pLCSevere = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pLCSevere);
	  //
	app.esIRData.IRIN.pCollisionSer = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pCollisionSer);
	  //
	app.esIRData.IRIN.pINJMin = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pINJMin);
	  //
	app.esIRData.IRIN.pINJSer = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pINJSer);
	  //
	  app.esIRData.IRIN.pINJSev = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pINJSev);
	  //
	  app.esIRData.IRIN.pDNF = $("div[name=ESArena]").val();
	  console.log(app.esIRData.IRIN.pDNF);
	  //
}


