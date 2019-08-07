# ROUGH DRAFT

## Week 3

### Exercise 

1. **Exercise**

	1. in the browser add 2 strings together and return the answer

	1. Create an HTML File
		* internally, create a variable that stores a string
			* add a string to your variable (+)
		* log the answer to the console 
		* load it into the browser to check the answer

	1. link to an external javascript file 
		* create a variable that stores a string
		* create a variable that stores an integer
		* multiply those two variables together (`*`)
		* log the answer to the console
		* load the broswer to check the answer
	1. **bonus** in your external javascript file 
		* add 2 + true and see what you get

1. **Exercise** 

	1. create a counter variable with the value of 2
		* add 5 to it
		* then multiply that result by 2
		* log the output. Did you get 14?
		* modulo that answer by 3. Before you log the answer write a comment what you think it is going to return.
		* What happens when you modulo that answer by 2? Write in a comment if it returned what you expected?

	1. create an if statement that tests if your variable modulus 2 returns 0
		* log in the console the answer

	1. create an else statement that logs that the variable was no even

	1. create a conditional statement that tests the state of your variable in 4 different ways 
		* in each of them link 2 comparisons together using logical operators

	1. create 3 if statements back to back. Comment the difference between multiple if statements and 1 conditional statement. 


### Answer 

* **Key 1**

```javascript
//1
"hello" + "world";
```

```javascript
//2
var X = "";
console.log(X + "hello");
```

```javascript
//3
var X = "string";
var Y = 7;
console.log(X * Y);
```

```javascript
//4
var X = 2;
var Y = true;
console.log(X + Y);
```

* **Key 2**

```javascript
//1
var i = 2;
i += 5;
i *= 2;
console.log(i);
console.log(i % 3);
// expected output remainder 2
console.log(i % 2);
// expected output remainder 0 cuz its like even or whatever
```

```javascript
//2
var X = 13;
if(X % 2 === 0) {
	console.log(X);
}
else {
	console.log(X + "is not even.");
};
```

```javascript
//3
var X = 13;
if(X % 2 === 0) {
	console.log(X);
}
else {
	console.log(X + " is not even.");
};
```

```javascript
//4
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
};
```

```javascript
//5
var X = 14;

// MULTIPLE IF STMTS
console.log("multiple if statements returns:");
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


// SINGLE CONDITIONAL STMT
console.log("single conditional statement returns:");
if(X > 1) {
	console.log(X + " is greater than 1.");
}
else if(X > 5) {
	console.log(X + " is greater than 5.");
}
else if(X > 10) {
	console.log(X + " is greater than 10.");
};
```
