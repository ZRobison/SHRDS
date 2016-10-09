var PrevailingView = function(){

 
	this.render = function() {
		$(".style").html("<link rel='stylesheet' type='text/css' href='css/main.css'>");
		
		$(".heading").text("Prevailing Conditions");
		var html =  	
	"</tr>" +
	"<tr class='header'>" +
    "<td height='50'>&nbsp;</td>" +
    "<td colspan='2'>Date " +
    "<input type='text' name='textfield' style='width:100px;' /></td>" +
    "<td colspan='2'>Time " +
  "</tr>" +
  "<tr>" +
    "<td>&nbsp;</td>" +
    "<td colspan='4'>&nbsp;</td>" +
  "</tr>" +
  "<tr>" +
    "<td>&nbsp;</td>" +
    "<td colspan='4'>&nbsp;</td>" +
  "</tr>" +
  "<br>" +
  "<tr>" +
  var body=
    "<td width='129' class='titles' >Beach</td>" +
	"<body onLoad='GETcookie()'>" +
    "<td colspan='4'><select name='select' id='myList' onChange='SETcookie()' >" +
      "<option value='1'>Select One</option>" +
      "<option value='2'>Beach1</option>" +
      "<option value='3'>Beach2</option>" +
      "<option value='4'>Beach3</option>" +
      "<option value='5'>Beach4</option>" +
    "</select>    </td>" +
	" </tr>" +
	"<tr>" +
		"<td>&nbsp;</td>" +
		"<td width='121'>&nbsp;</td>" +
		"<td width='106'>&nbsp;</td>" +
		"<td colspan='2'>&nbsp;</td>" +
	"</tr>" +
	"<tr>" +
		"<td class='titles'>Wind Speed </td>" +
		"<td colspan='4'>Wind speed will be taken from BOM website automatically </td>" +
	"</tr>" +
	"<tr>" +
		"<td>&nbsp;</td>" +
		"<td>&nbsp;</td>" +
		"<td>&nbsp;</td>" +
		"<td colspan='2'>&nbsp;</td>" +
	"</tr>" +
	"<tr>" +
		"<td class='titles'>Wind Direction </td>" +
		"<td><input type='radio' name='radio' id='radio1' class='radio'/>" +
		"<label for='radio1'>North</label></td>" +
		"<td>&nbsp;</td>" +
		"<td colspan='2'><Center>Nearest Tides </Center></td>" +
	
	"</tr>" +
  
	"<tr>" +
		"<td>&nbsp;</td>" +
		"<td><input type='radio' name='radio' id='radio2' class='radio'/>" +
		"<label for='radio2'>North East</label></td>" +
		"<td>&nbsp;</td>" +
		"<td colspan='1'><input type='text' name='text1' style='width:100px; font-size:1.3em;'/></td>" +
		"<td colspan='1'><input type='text' name='text1' style='width:100px; font-size:1.3em;'/></td>" +
	"</tr>" +
  
	"<tr>" +
		"<td>&nbsp;</td>" +
		"<td><input type='radio' name='radio' id='radio3' class='radio'/>" +
		"<label for='radio3'>East</label></td>" +
		"<td>&nbsp;</td>" +
		"<td colspan='2'>&nbsp;</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&nbsp;</td>" +
		"<td><input type='radio' name='radio' id='radio4' class='radio'/>" +
		"<label for='radio4'>South East</label></td>" +
		"<td>&nbsp;</td>" +
		"<td width='111' align='center'>Time</td>" +
		"<td width='105' align='center'>Time</td>   " + 

		"</tr>" +
		"<tr>" +
		"<td>&nbsp;</td>" +
		"<td><input type='radio' name='radio' id='radio5' class='radio'/>" +
		"<label for='radio5'>South</label></td>" +
	
			"<td>&nbsp;</td>" +
		"</tr>" +
		"<tr>" +
			"<td>&nbsp;</td>" +
			"<td><input type='radio' name='radio' id='radio6' class='radio'/>" +
			"<label for='radio6'>South West</label></td>" +
			"<td>&nbsp;</td>" +
			"<td align='center'>Height</td>" +
			"<td align='center'>Height</td>" +
		"</tr>" +
		"<tr>" +
			"<td>&nbsp;</td>" +
			"<td><input type='radio' name='radio' id='radio7' class='radio'/>" +
			"<label for='radio7'>West</label></td>" +
			"<td>&nbsp;</td>" +
			"<td><input type='text' name='text3' style='width:100px; font-size:1.3em;'/></td>" +
			"<td><input type='text' name='text3' style='width:100px; font-size:1.3em;'/></td>" +
		"</tr>" +
		"<tr>" +
			"<td>&nbsp;</td>" +
			"<td><input type='radio' name='radio' id='radio8' class='radio'/>" +
			"<label for='radio8'>North West</label></td>" +
			"<td>&nbsp;</td>" +
			"<td>&nbsp;</td>" +
			"<td>&nbsp;</td>" +
			"</tr>" +
		"</table>" +
		"</center>" ;
		
		$(".body").html(html);
		
		var footer = "<form action = 'index.html' method='' onClick='window.location.reload()'>" +
			"<button type='submit' class='blueButtons'>Back</button> " +
			"</form>" +
			"<form action = 'index.html?#WHR' method='' onClick='window.location.reload()'>" +
			"<button type='submit' class='blueButtons'>Next</button>" +
			"</form>"
			
			$("footer").html(footer);
			
	}

}

