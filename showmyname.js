//HTML: 
<input type = "text" id="userName"></input>
<button onclick = "showName()">Show my name</button>
<p id = "one"></p>

//JS:
function showName() {
	var userName = document.getElementById('userName').value;
  document.getElementById('one').innerHTML="Hello" + " " + userName;
}


<html>
<head></head>
<body>
<script>
function showName() {
	var userName = document.getElementById('userName').value;
  //I will take info from the user and save it as showName
  document.getElementById('one').innerHTML="Hello" + " " + userName;
  //output showName to HTML in the ID called "one"
}
</script>
<input type = "text" id="userName"></input>
<button onclick = "showName()">Show my name</button>
<p id = "one"></p>
</body>
</html>
