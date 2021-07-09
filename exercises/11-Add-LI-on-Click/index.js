let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let UL = document.querySelector("#myList");
	let elem = document.createElement("li");
	elem.innerHTML = "Fourth element";
	UL.appendChild(elem);
});
