function getFullYear() {
	var d = new Date();
	var year = d.getFullYear();
	let myString = `<p>My friend, we are in the year ${year}</p> `;
	document.write(myString);
}
