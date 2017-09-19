//HTML:
<button onclick = "addAnother()">Click here</button>
<ul>
<li>Chicken</li>
<li>Duck</li>
<li>Goose</li>
<li>Turkey</li>
</ul>

//JS:
function addAnother() {
	var nextItem = document.createElement('li');
  var newText = document.createTextNode('Turkey')
  newItem.appendChild(newText);
  var postion = document.getElementsByTagName('ul')[0];
  position.appendChild(newItem);
}
