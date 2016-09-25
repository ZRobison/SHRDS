var selectElement;
var selectId;

function SETcookie() {
  document.cookie = selectId + "Selected=" + selectElement.selectedIndex;
}

function GETcookie() {
  var cookieName = selectId + "Selected=";

  var splitCookie = document.cookie.split(';');

  for(i = 0; i < splitCookie.length; ++i) {
    var c = splitCookie[i];
    
    while (c.charAt(0) == ' ')
      c = c.substring(1);
    
    if (c.indexOf(cookieName) == 0)
      selectElement.selectedIndex = c.substring(cookieName.length, c.length);
  }
}



window.onload = function() {
  selectElement = document.getElementsByClassName('cookieSelect')[0];
  selectId = selectElement.id;

  GETcookie();



  selectElement.onchange = function () {
    SETcookie();
  }

}