// event specific functions 

function arenaES() {
	  app.esSHRData.arena = $("select[name=ESArena]").val();
      console.log(app.esSHRData.arena);
}

function ageES() {
	  app.esSHRData.age = $("select[name=ESAge]").val();
      console.log(app.esSHRData.age);
}

function heatES() {
	  app.esSHRData.heat = $("select[name=ESHeat]").val();
      console.log(app.esSHRData.heat);
}

function roundES() {
	  app.esSHRData.round = $("select[name=ESRound]").val();
      console.log(app.esSHRData.round);
}

function finalES() {
	  app.esSHRData.finalType = $("select[name=ESFinalType]").val();
      console.log(app.esSHRData.finalType);
}

function craftTypeES() {
	  app.esSHRData.craftType = $("select[name=ESCraftType]").val();
      console.log(app.esSHRData.craftType);
}

function inOutES() {
	  app.esSHRData.inOrOut = $("input[name=ESInOut]").val();
      console.log(app.esSHRData.inOrOut);
}

function beachLocationES() {
	  app.esSHRData.beach = $("input[name=ESBeach]").val();
      console.log(app.esSHRData.beach);
}

function timeES() {
	  //app.esSHRData.time = $("getDateTime()").val();
     // console.log(app.esSHRData.time);
}