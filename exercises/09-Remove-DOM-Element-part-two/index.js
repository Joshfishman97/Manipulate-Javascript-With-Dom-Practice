let parent = document.querySelector("#parentLI");
let child = parent.childNodes[3];
parent.removeChild(child);
console.log(parent.childNodes);
