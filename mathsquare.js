//HTML:
<p>A:</p>
<input type = "number" id = "a">
<p>B:</p>
<input type = "number" id = "b">
<p id="C">C:</p>
<button onclick = "myFunction()">Show C</button>

//JS:
function myFunction() {
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = Math.sqrt(Math.pow(a,2) +Math.pow(b,2));
document.getElementById('C').innerHTML = "C: "+c;
}
