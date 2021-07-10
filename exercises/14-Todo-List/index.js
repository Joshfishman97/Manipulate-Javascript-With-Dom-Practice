let todo = document.querySelector("#addToDo");

todo.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		let ul = document.querySelector("ul");
		let li = document.createElement("li");
		li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${todo.value}`;
		ul.appendChild(li);
		let trashCan = li.querySelector(".fa.fa-trash");
		todo.value = "";
		addListener(trashCan);
	}
});

let allTrashCans = document.querySelectorAll(".fa.fa-trash");
allTrashCans.forEach(item => {
	addListener(item);
});
//the event looked at in the add lisnter above is the <i> tag
function addListener(domElement) {
	domElement.addEventListener("click", function(event) {
		let ul = document.querySelector("ul");
		let li = this.parentNode.parentNode;
		ul.removeChild(li);
	});
}
