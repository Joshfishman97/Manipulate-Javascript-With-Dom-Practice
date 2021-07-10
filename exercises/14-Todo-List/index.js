let todo = document.querySelector("#addToDo");

todo.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		let ul = document.querySelector("ul");
		let li = document.createElement("li");
		li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${todo.value}`;
		ul.appendChild(li);
		todo.value = "";
	}
});

let del = document.querySelector(".fa fa-trash");

del.addEventListener("click", function(event) {
	if (event === "click") {
		let ul = document.querySelector("ul");
		let li = document.createElement("li");
		ul.removeChild(li);
	}
});
