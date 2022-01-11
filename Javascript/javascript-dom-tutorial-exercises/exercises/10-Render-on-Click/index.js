let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

let div = document.createElement("div");
div.innerHTML = "Hello World!";
div.style.background ="yellow";
document.body.appendChild(div);
});