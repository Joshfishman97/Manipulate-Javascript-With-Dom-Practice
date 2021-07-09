window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let mySelect = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = countries[i];
		mySelect.appendChild(option);
	}
	mySelect.addEventListener("change", () => {
		let myArray = mySelect.childNodes;
		for (let i = 0; i < myArray.length; i++) {
			let myCountry = myArray[i];
			if (myCountry.selected) {
				alert(myCountry.value);
			}
		}
	});
};
