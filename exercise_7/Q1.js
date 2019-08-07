var inventory = ["ak-47", "ferrari", "bazooka"];
var quantity = [10, 6, 3];

function myFunc() {
	var input = document.getElementById("inputz").value;
	if(input === "ak-47" && quantity[0] !== 0) {
		quantity[0] -= 1;
	}
	else if(input === "ferrari" && quantity[1] !== 0) {
		quantity[1] -= 1;
	}
	else if(input === "bazooka" && quantity[2] !== 0) {
		quantity[2] -= 1;
	};
	console.log(inventory.concat(quantity));
};