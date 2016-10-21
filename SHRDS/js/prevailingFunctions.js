// prevailing functions

function getPrevailingBeach() {
	//app.prevalingSHRData.SHR.pWHR = $("select[name=WHRForm]").val();
      //  score = app.prevalingSHRData.SHR.pWHR
	  app.prevalingSHRData.beach = $("select[name=prevailingBeach]").val();
      console.log(app.prevalingSHRData.beach);
}