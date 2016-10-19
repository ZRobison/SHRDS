function getIRData(){
	var numMin = 0;  
    var numMax = 20; 
        function add(param){  
            var num = document.getElementById('num'+param).innerHTML;
            if(num==numMax || num > numMax){  
                num = numMax;
            }else{  
                document.getElementById('num'+param).innerHTML++;
            }  
        }  
          
        function minus(param){  
            var num = document.getElementById('num'+param).innerHTML;  
            if(num==numMin || num < numMin){  
                num = numMin; 
            }else{  
                document.getElementById('num'+param).innerHTML--;  
            }  
        }	

}	
var IRView = function () {


    this.render = function () {
      	var header = "Incident Report";
		$(".heading").text(header);
	var body =
	"<div class='num' class='click'>"+
"<button onclick='add(1);' >&#43;</button> "+
"Fall Offs(by wave)"+
"<div id='num1'>0</div>"+
"<button onclick='minus(1);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(2);' >&#43;</button> "+
"Fall Offs(by collision)"+
"<div id='num2'>0</div>"+
"<button type='submit' onclick='minus(2);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(3);' >&#43;</button>"+ 
"Back-shoot/Nose-Dive"+
"<div id='num3'>0</div>"+
"<button type='submit' onclick='minus(3);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(4);' >&#43;</button> "+
"Broaches"+
"<div id='num4'>0</div>"+
"<button type='submit' onclick='minus(4);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(5);' >&#43;</button> "+
"Flying Craft"+
"<div id='num5'>0</div>"+
"<button type='submit' onclick='minus(5);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(6);' >&#43;</button> "+
"Lost Craft(serious)"+
"<div id='num6'>0</div>"+
"<button type='submit' onclick='minus(6);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(7);' >&#43;</button> "+
"Lost Craft(severe)"+
"<div id='num7'>0</div>"+
"<button type='submit' onclick='minus(7);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(8);' >&#43;</button> "+
"Collision(serious)"+
"<div id='num8'>0</div>"+
"<button type='submit' onclick='minus(8);'>&#45;</button>"+
"</div>"+ 

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(9);' >&#43;</button> "+
"Injury(minor)"+
"<div id='num9'>0</div>"+
"<button type='submit' onclick='minus(9);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(10);' >&#43;</button> "+
"Injury(serious)"+
"<div id='num10'>0</div>"+
"<button type='submit' onclick='minus(10);'>&#45;</button>"+
"</div> "+

"<div class='num' class='click'>"+
"<button type='submit' onclick='add(11);' >&#43;</button> "+
"Fall Offs(by wave)"+
"<div id='num11'>0</div>"+
"<button type='submit' onclick='minus(11);'>&#45;</button>"+
"</div> "+
"<div class='num' class='click'>"+
"<button type='submit' onclick='add(12);' >&#43;</button> "+
"Injury(severe)"+
"<div id='num12'>0</div>"+
"<button type='submit' onclick='minus(12);'>&#45;</button>"+
"</div>";
$(".body").html(body);
var footer =
          "<button type='button' class='blueButtons'>NEXT</button>" +
            "<form>";


$(".footer").html(footer);
    }
}



