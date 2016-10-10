var LogonView = function(){
	
	this.render = function() {
		var header = "SLSA SHRDS";
		
		var body = 
		"<div class='radioButtons'>"+
		"<input type='radio' name='radio' id='radio1' class='radio' value='checked' >"+
		"<label for='radio1'>TSO</label>"+
		"<input type='radio' name='radio' id='radio2' class='radio'/>"+
		"<label for='radio2'>Incident Report</label>"+
		"<input type='radio' name='radio' id='radio3' class='radio'/>"+
		"<label for='radio3'>Admin</label>"+
		"/div>"+
		"<div class='inputForm'>"+
		"<form action = '' method=''>"+
		"User name/Reference Number:"+
		"<input type='text' name='' >"+
		"Password"+
		"<input type='password' name='' >"+
		//I think this is a useless button --"<input type='submit' value='LOGIN'>"+
		"</form>"+
		"</div>";
		
		var footer = 
		"<form action = 'index.html?#WHR' method=''>"+
		"<button type='submit' onclick='processFormData()'>Logon</button> "
		"</form>";
		
		$(".heading").text(header);
		$(".body").html(body);
		$(".footer").html(footer);
	}	
}