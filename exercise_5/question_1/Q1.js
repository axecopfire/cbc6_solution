function myFunc() {
	var input = document.getElementById("inputz").value;
	var randoNum = Math.floor(Math.random() * 11);
	if(Number(input) === randoNum){
		console.log("correct the number is " + randoNum + "!");
	}
	else{
		console.log("nope, you guessed, " + input + " the correct answer was " + randoNum);
		input = document.getElementById("inputz").value;
	};
};