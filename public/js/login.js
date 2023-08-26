const inputs = document.querySelectorAll(".input");

function FocusFunc(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", FocusFunc);
	input.addEventListener("blur", blurFunc);
});

