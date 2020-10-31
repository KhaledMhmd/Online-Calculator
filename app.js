var numberButtons = document.getElementsByClassName('numbers');
var mathOpButtons = document.querySelectorAll('.mathOp');
var equalButton = document.getElementById('equals');
var clearAll = document.getElementById('clear');
var del = document.getElementById('del');
var output = document.getElementById('outputDisplay');
var equalClicked = false;

  for (let i=0; i<numberButtons.length; i++){
numberButtons[i].addEventListener("click", displayN);
function displayN(){
      if (equalClicked == true) {
        output.innerHTML= "";
        output.innerHTML = output.innerHTML + numberButtons[i].value;
      }
      else {
        output.innerHTML = output.innerHTML + numberButtons[i].value;
      }
}}

for (let i=0; i<mathOpButtons.length; i++){
mathOpButtons[i].addEventListener("click", displayM);
function displayM(){
  equalClicked = false;
  output.innerHTML = output.innerHTML + mathOpButtons[i].value;

}}

clearAll.onclick = function clear(){
  equalClicked = false;
  output.innerHTML = "";
};

equalButton.onclick = function compute(){
  output.innerHTML = eval(output.innerHTML);
  equalClicked = true;
}

del.onclick = function remove(){
    equalClicked = false;
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length -1);
}
