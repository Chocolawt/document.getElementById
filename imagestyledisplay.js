//HTML:
<div id="stem">
  <img src="https://ituedu-141b.kxcdn.com/wp-content/uploads/2014/09/stem_logo_by_officialweffe-d6u6f0u.jpg">
</div>
<p>
  What subject does Mr. Kam teach?
</p>
<button onclick="showAnswer()">
  Show/Hide
</button>

//JS:
function showAnswer() {
  var image = document.getElementById('stem');
  //I get the contents of the stem ID and save it as the variable image.
  if (image.style.display === 'block') {
    //If the display is shown on the screen....
    image.style.display = 'none';
    //I make it invisible.
  } else {
    image.style.display = 'block';
    //If it is invisible, I will display it.
  }
}
