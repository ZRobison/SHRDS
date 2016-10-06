var LogonView = function(){
	
	this.render = function() {

		$(".style").html("");
		
		var header = "SLSA SHRDS";
		$(".heading").text(header);
		
		var body = 
		"<div class='radioButtons'>"+
		"<input type='radio' name='radio' id='radio1' class="radio" value="checked" >"+
		"<label for="radio1">TSO</label>"+
		"<input type="radio" name="radio" id="radio2" class="radio"/>"+
		"<label for="radio2">Incident Report</label>"+
		"<input type="radio" name="radio" id="radio3" class="radio"/>"+
		"<label for="radio3">Admin</label>"+
		"/div>"+
		"<div class="inputForm">"+
		"<form action = "" method="">"+
		"User name/Reference Number:"+
		"<input type="text" name="" >"+
		"Password"+
		"<input type="password" name="" >"+
		"<input type="submit" value="LOGIN">"+
		"</form>"+
		"</div>"+
		$(".body").html(body);
		
		
		var footer = 
		"<form action = 'index.html?#WHR' method=''> <br>"+
		"<button type='submit'>Next</button> "+
		"</form>";
		$(".footer").html(footer);
	}	
}