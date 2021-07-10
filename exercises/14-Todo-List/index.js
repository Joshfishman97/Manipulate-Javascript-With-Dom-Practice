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

let del = document.querySelectorAll(".fa.fa-trash");
del.forEach(item => {
	item.addEventListener("click", function(event) {
		let ul = document.querySelector("ul");;
		let li = this.parentNode.parentNode;
		ul.removeChild(li);
	});
});
//the event 


