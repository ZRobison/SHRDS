///

// device ready 
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.camera);
    }


$(function() {
	function camSuccess(imgData){
		$("img_camPH").attr("src",imgData);
	/*	<img src='file:/whereYourFileIsStoredOnThePhone/img.jpg */
	
	}
	function camError(error){
		   alert(error)
	}
	function accessCamera(){
		var options = {
			destinationType: Camera.DestinationType.FILE_URL,
			sourceType: Camera.PictureSourceType.CAMERA //or PHOTOGALLERY	
		};
		navigator.camera.getPicture(camSucess, camError, options);
	}
	
});