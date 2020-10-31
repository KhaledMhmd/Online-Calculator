var numberButtons = document.getElementsByClassName('numbers');
var mathOpButtons = document.querySelectorAll('.mathOp');
var equalButton = document.getElementById('equals');
var clearAll = document.getElementById('clear');
var del = document.getElementById('del');
var output = document.getElementById('outputDisplay');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var six = document.getElementById('six');
var five = document.getElementById('five');
var four = document.getElementById('four');
var three = document.getElementById('three');
var two = document.getElementById('two');
var one = document.getElementById('one');
var zero = document.getElementById('zero');
var point = document.getElementById('point');

for (let i=0; i<numberButtons.length; i++){
numberButtons[i].addEventListener("click", display);
function display(){
  output.innerHTML = numberButtons[i].value;
}};

clearAll.onclick = function clear(){
  output.innerHTML = "";
};
