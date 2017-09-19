//HTML:
<input type = "number" id="radii">
<button onclick = "findVolume()">Find Volume</button>
<p id = "showAnswer"></p>

//JS:
function findVolume() {
	var x = document.getElementById('radii').value;
   var x = parseInt(x);
  var step1 = ((4/3) * 3.14);
   var step1 = parseInt(step1);
  var step2 = (Math.pow(x,3) * step1);
   var step1 = parseInt(step2);
  document.getElementById('showAnswer').innerHTML = step2;
}
