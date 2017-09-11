//HTML:
<p class = "stem">person1</p>
<p class = "stem">person2</p>
<p class = "stem">person3</p>
<p class = "stem">person4</p>

<button onclick = "deathNote()"> Random death</button>

//JS:
function deathNote() {
	var death = Math.floor(Math.random() * 4);
  document.getElementsByClassName('stem')[death].innerHTML = "<img src= 'https://www.singularityweblog.com/wp-content/uploads/2016/02/Death.jpg' width='10%'>";
  }
