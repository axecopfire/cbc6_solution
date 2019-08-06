var X = 14;

if(X % 2 === 0 && X % 5 === 0) {
	console.log(X + " is evenly divisible by 2 and 5!");
}

else if(X % 5 === 0 && X % 2 !== 0) {
	console.log(X + " is divisible by 5 but not 2.");
}

else if(X % 2 === 0 && X % 5 !== 0) {
	console.log(X + " is divisible by 2 but not 5.");
}

// This could just be an else statement but needed a logical operator.
// for the question #4.
else if(X % 2 !== 0 && X % 5 !== 0){
	console.log(X + " is NOT divisible by 2 or 5.");
}