//HTML:
<button onclick ="styleBackground()">Click me</button>
<h1 id="corgi">
Happy Corgi
</h1>


//JS:
function styleBackground() {
	document.body.style.background = "url('http://buzzsharer.com/wp-content/uploads/2016/10/corgi-photo.jpg')"
	document.body.style.backgroundSize= "cover"
  document.getElementById('corgi').style.textShadow = "10px 10px 10px #000000"
  }
