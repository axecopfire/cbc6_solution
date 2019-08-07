var inventory = ["apples", "bananas", "oranges"];
var quantity = [5, 8, 4];

(function () {
	document.getElementById("uno").innerHTML = quantity[0];
	document.getElementById("dos").innerHTML = quantity[1];
	document.getElementById("tres").innerHTML = quantity[2];
})();

function add() {
	var input = document.getElementById("inputz").value;
	if(input === "apples"){
		quantity[0] += 1;
		document.getElementById("uno").innerHTML = quantity[0];
	}
	else if(input === "bananas"){
		quantity[1] += 1;
		document.getElementById("dos").innerHTML = quantity[1];
	}
	else if(input === "oranges"){
		quantity[2] += 1;
		document.getElementById("tres").innerHTML = quantity[2];
	};
};

function subtract() {
	var input = document.getElementById("inputz").value;
	if(input === "apples" && quantity[0] !== 0){
		quantity[0] -= 1;
		document.getElementById("uno").innerHTML = quantity[0];
	}
	else if(input === "bananas" && quantity[1] !== 0){
		quantity[1] -= 1;
		document.getElementById("dos").innerHTML = quantity[1];
	}
	else if(input === "oranges" && quantity[2] !== 0){
		quantity[2] -= 1;
		document.getElementById("tres").innerHTML = quantity[2];
	};
};

function out() {
	for(var i = 0; i < quantity.length; i++){
		if(quantity[i] === 0){
			document.querySelectorAll("li")[i].style.textDecoration = "line-through";
		}
		else{
			document.querySelectorAll("li")[i].style.textDecoration = "none";
		};
	};
};