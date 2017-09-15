<html>
<head>
<body>
<script>
function addAnother() {
  //create a new element and store it in a variable
  var newListItem =document.createElement('li');
  //create a new element and store it in a variable
  var newText = document.createTextNode('Turkey');
  //Attach the new text node to the element. Notice there are no quote
  newListItem.appendChild(newText);
  //Find the new position where the element should be added
  var position = document.getElementsByTagName('ul')[0];
  //Insert the new element into its position
  position.appendChild(newListItem);
}
</script>

<button onclick="addAnother()">
Click here
</button>
<ul>
  <li>Chicken</li>
  <li>Duck</li>
  <li>Goose</li>
</ul>
</body>
</html>
