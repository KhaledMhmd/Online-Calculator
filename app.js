var numberButtons = document.getElementsByClassName('numbers');
var mathOpButtons = document.querySelectorAll('.mathOp');
var equalButton = document.getElementById('equals');
var clearAll = document.getElementById('clear');
var del = document.getElementById('del');
var output = document.getElementById('outputDisplay');

  for (let i=0; i<numberButtons.length; i++){
numberButtons[i].addEventListener("click", display);
function display(){
      output.innerHTML = output.innerHTML + numberButtons[i].value ;
}};

for (let i=0; i<mathOpButtons.length; i++){
mathOpButtons[i].addEventListener("click", display);
function display(){
  output.innerHTML = output.innerHTML + mathOpButtons[i].value ;
}};

clearAll.onclick = function clear(){
  output.innerHTML = "";
};


equalButton.onclick = function compute(){
  output.innerHTML = eval(output.innerHTML);
}

del.onclick = function remove(){
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length -1);
}
