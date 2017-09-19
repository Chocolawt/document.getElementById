//HTML:
<span id ="name"></span>
<span>went to the store and</span>
<span id ="verb"></span>
<span> on a rock.</span>

//JS:
var x = prompt("Enter a name");
var y = prompt("Enter a verb");
//getElementById takes two things, the id and variable. It takes what the user types and places it in the span 
(<span id ="verb">(User's input)</span>)

document.getElementById('name').innerHTML = x;
document.getElementById('verb').innerHTML = y;
