var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// body.style.background = "red";

function setgradient() {
	// console.log(color1.value);
	body.style.background = "linear-gradient(to right, " + color1.value
	+ ","
	+ color2.value
	+")";

	css.textContent = body.style.background+";";
}
//it has a great extension. in this code we can keep adding number of adding attributes and events
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

//Html code below. but here we can only add one oninput attribute
// <!-- <input onclick="setgradient()" class="color1" type="color" name="color1" value="#00ff00">
// 	<input onclick="setgradient()" class="color2" type="color" name="color2" value="#ff0000"> -->



