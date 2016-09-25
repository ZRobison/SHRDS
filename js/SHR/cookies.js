var selectElement;
var selectId;

function SETcookie() {
  document.cookie = selectId + "Selected=" + selectElement.selectedIndex;
}

function GETcookie() {
  if (document.cookie){
    eval(document.cookie);

  selectElement.selectedIndex = eval(selectId + Selected);
}}

function Save_Items() {
  SaveString = SelectId + 'Items="';

  for (i = 0; i < selectElement.length; ++i)
    SaveString += selectElement.options[i].innerText + ',' + selectElement.options[i].value + ',';

  SaveString = SaveString.substring(0, SaveString.length-1) + '"';
  document.cookie = SaveString;
}

function Clear_Items() {
  while (selectElement.length > 0) {
    selectElement.remove(0);
  }
}

function Restore_Item(IT,VA) {
  var oOption = document.createElement("option");
  selectElement.options.add(oOption);
  oOption.innerText = IT;
  oOption.value = VA;
}

function Restore_Select() {
 // remove items from select
 if (document.cookie)
    Clear_Items();

 eval(document.cookie);

 Items = document.cookie;

 Data = Items.split(',');
 for (x = 0; x < Data.length-1; x += 2) {
  Restore_Item(Data[x], Data[x+1]);
 }
}

window.onload = function() {
  selectElement = document.getElementsByClassName('cookieSelect')[0];
  selectId = selectElement.id;

  //GETcookie();

  //Restore_Select();

  selectElement.onchange = function () {
    SETcookie();
  }

  /*selectElement.onclick = function () {
    Save_Items();
  }*/
}