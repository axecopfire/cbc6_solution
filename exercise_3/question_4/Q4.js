for(var i = 0; i <= 100; i++) {
	var X = "";
	var Y = "";
	if(i % 3 === 0 && i !== 0) {
		X = "fizz";
	};
	if(i % 5 === 0 && i !== 0) {
		Y = "buzz";
	};
	if(X === "fizz" || Y === "buzz") {
		console.log(i + ": " + X + Y);
	};
};