//HTML:
<button onclick = "removeOne()">
Click here
</button>
<ul>
<li>Chicken</li>
<li>Goose</li>
<li>Turkey</li>
</ul>

//JS:
function removeOne() {
	var turkey = document.getElementsByTagName('li')[1];
  var ul = turkey.parentNode;
	ul.removeChild(turkey);
}
