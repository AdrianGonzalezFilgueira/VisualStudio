window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
	let addcountries = document.querySelector("#mySelect");

  	for (let i=0; i<countries.length; i++){
		option = document.createElement("option");
		option.text = countries[i];
		option.value = countries[i];
		addcountries.appendChild(option);
	  }

	  	addcountries.addEventListener("change", function() {
			alert(`You are in ${addcountries.value}`);
	  	}); 
};
