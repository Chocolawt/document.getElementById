<html>
<head></head>
<body>
<script>
function addAnother() {
  //create a new element and store it in a variable
    var random = document.getElementById('typeAnything').value;
  var newListItem =document.createElement('li');
  //create a new element and store it in a variable
  var newText = document.createTextNode(random);
  //Attach the new text node to the element. Notice there are no quote
  newListItem.appendChild(newText);
  //Find the new position where the element should be added
  var position = document.getElementsByTagName('ul')[0];
  //Insert the new element into its position
  position.appendChild(newListItem);
}
</script>
<input type = "text" id = "typeAnything"></input>
<button onclick="addAnother()">
Click here
</button>
<p id = "typeAnything"></p>
<ul>
  
</ul>
</body>
</html>
