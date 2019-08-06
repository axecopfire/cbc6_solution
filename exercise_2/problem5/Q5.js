var X = 14;

console.log("multiple if statements returns:");
// MULTIPLE IF STMTS
if(X > 1) {
	console.log(X + " is greater than 1.");
};

if(X > 5) {
	console.log(X + " is greater than 5.");
};

if(X > 10) {
	console.log(X + " is greater than 10.");
};


// multiple if statements will continue to run 
// the subsequent statements after regardless of
// the previous statements boolean value.

// conditional statements will short circuit 
// and break out of the conditional statement 
// once one of the conditional is found to be 
// true. 

// This is demonstrated by the example returned to the console.


console.log("single conditional statement returns:");
// SINGLE CONDITIONAL STMT
if(X > 1) {
	console.log(X + " is greater than 1.");
}

else if(X > 5) {
	console.log(X + " is greater than 5.");
}

else if(X > 10) {
	console.log(X + " is greater than 10.");
};