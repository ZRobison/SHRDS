var LogonView = function(){
	
	this.render = function() {
		var header = "SLSA SHRDS";

		var body =
		"<div class='radBut'>"+
		"<input type='radio' name='radio' id='radio1' class='radio' value='checked' >"+
		"<label for='radio1'>TSO</label>"+
		"</div>"+
		"<div class='radBut'>"+
		"<input type='radio' name='radio' id='radio2' class='radio'/>"+
		"<label for='radio2'>Incident Report</label>"+
		"</div>"+
		"<div class='radBut'>"+
		"<input type='radio' name='radio' id='radio3' class='radio'/>"+
		"<label for='radio3'>Admin</label>"+
		"</div>"+
		"<form action = '' method=''>"+
		"User Name/Reference Number: <br>"+
		"<input type='text' name='' id='username'><br>"+
		"Password: <br>"+
		"<input type='password' name='' id='password'><br>"+
		"</form>"+
        "<div id ='passwordCheck'></div>";
        
        
		//
		var footer =
        "<form action = 'index.html?#WHR' method=''> <br>"+    
		"<button type='submit' class='blueButtons'>LOGIN</button>"+
        "</form>";
        //"<button type='submit' class='blueButtons' id='loginBut' onclick='user.verify_user()'>LOGIN</button>";
        //REPLACE FORM STUFF WITH SINGLE LINE OF COMMENTED CODE ONCE BUGS ARE RESOLVED -->remove form tags
		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}	
}