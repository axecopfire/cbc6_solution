# Week 3

## Answer 

1. in the browser add 2 strings together and return the answer
```javascript
"Hello" + "World";
```

2. create an html file
	* internally, create a variable that stores a string 
		* add a string to your variable(+)
	* log the answer to the console
	* load it into the browser to check the answer
```javascript
var X = "";
console.log(X + "hello");
```

3. link to an external javascript file
	* create a variable that stores a string
	* create a variable that stores an integer
	* multiply those two variables together (`*`)
	* log the answer to the console
	* load the browser to check the answer
```javascript
var X = "string";
var Y = 7;
console.log(X * Y);
```

4. **bonus** in your external javascript file 
	* add `2 + true` and see what you get
```javascript
var X = 2;
var Y = true;
console.log(X + Y);
// returns 3
```

## Answer 

1. create a counter variable with tthe value of 2
	* add 5 to it
	* then multiply that result by 2 
	* log the output. Did you get 14?
	* modulo that answer by 3. Before you log the answer write a comment what you think it is going to return.
	* What happens when you modulo that answer by 2? Write in a comment it it returned what you expected?
```javascript
var i = 2;
i += 5;
i *= 2;
console.log(i);
console.log(i % 3);
// expected output remainder 2
console.log(i % 2);
// expected output remainder 0 because its an even number
```

2. create an if statement that tests if your variable modulus 2 returns 0
	* log in the console the answer
```javascript
var X = 12;
if(X % 2 === 0) {
	console.log(X);
};
```

3. create an `else` statement that logs that the variable was not even
```javascript
var X = 13;
if(X % 2 === 0) {
	console.log(X);
}
else {
	console.log(X + " is not even.");
};
```

4. create a conditional statement that tests the state of your variable in 4 different ways
	* in each of them link 2 comparisons together using logical operators
```javascript
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

5. create 3 if statements back to back. Comment the difference beween multiple if statements and 1 conditional statement. 
```javascript
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

## Answer

1. create a counter variable 
```javascript
var i = 0; 
console.log(i);
```

2. add 1 and log it 50 times using a for loop
```javascript
for(var i = 0; i <= 50; i++) {
	console.log(i);
};
```

3. make a while loop that logs every other number up until 50
```javascript
var i = 0;
while(i < 51) {
	console.log(i);
	i += 2;
};
```

4. oop from 0 to 100
	* log the string fizz if the number is divisible by 3
	* log the string buzz if the number is divisible by 5
	* log the string fizzbuzz if the number is divisibly by both
```javascript
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
```

## Answer 

1. create a function that takes two arguments and adds them together
```javascript
function myFunction(X,Y) {
	console.log(X+Y);
};
```

2. create a function that takes two arguments and multiplies them together
```javascript
function myFunc(X,Y) {
	console.log(X*Y);
};
```

3. create a function that takes two arguments where the first argument is the start number and the second argument is the end number. The body of the function starts a loop and ends it at the second argument and logs every number between the start and end number.
```javascript
function myFunc(start, stop){
	start += 1;
	for(var i = start; i < stop; i++){
		console.log(i);
	};
};
```

4. create a variable in the global scope
	* create a function that takes an argument
	* add the argument to the global variable
	* log the return of that function
```javascript
var Z = 1;
function myFunc(X){
	Z += X;
	console.log(Z + " inside the function.");
};
// console.log(Z + " outside the function.");
```

5. create an IIFE that logs your success of creating an IIFE
```javascript
(function () {
	console.log("successful IIFE");
})();
```

## Answer 

1. create a function that takes user input and compares it against a random number. If there is a match then log the success.
```HTML
<!DOCTYPE html>
<html>
<head>
	<title>Q1</title>
</head>
<body>

	<p>1) create a function that takes user input and compares it against a random number. If there is a match then log the success.</p>
	<input type="number" id="inputz">
	<button onclick="myFunc()">Guess</button>
	<br>
	<br>
	<p><em>The user should be prompted to guess a number between 1-10 and should persist until the correct number is selected. The results are logged to the console.</em></p>

<script type="text/javascript" src="Q1.js"></script>
</body>
</html>
```

```javascript
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
```

## Answer

1. make an array of 10 grocery store items loop through that array and log each item.
```javascript
var kwikEMart = ["beef","chicken","pork","brocoli","carrots","taters","milk","eggs","cheese","hawt sawce"];

for(var i = 0; i < kwikEMart.length; i++){
	console.log(kwikEMart[i]);
};
```

2. loop through a string at least 10 characters long and log each character
```javascript
var strang = "jackknives";

for(var i = 0; i < strang.length; i++){
	console.log(strang[i]);
};
```

3. make that string upper case 
```javascript
var strang = "jackknives";

for(var i = 0; i < strang.length; i++){
	console.log(strang[i].toUpperCase());
}
```

## Answer 

1. Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
```HTML
<!DOCTYPE html>
<html>
<head>
	<title>Q1</title>
</head>
<body>
	<h1>Chaotic Grocery</h1>
	<h3>Our Inventory</h3>
	<ul>
		<li>ak-47<span id="uno"></span></li>
		<li>ferrari<span id="dos"></span></li>
		<li>bazooka<span id="tres"></span></li>
	</ul>

	<input type="text" id="inputz">
	<br>
	<br>
	<button onclick="myFunc()">Purchase</button>
	
<script type="text/javascript" src="Q1.js"></script>
</body>
</html>
```
```javascript
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
```

## Answer 

1. Grocery Store App
	* functions
		* add to inventory
		* subrtract from inventory 
		* notify when out of stock
	* data 
		* inventory 
		* inventory count
```HTML
<!DOCTYPE html>
<html>
<head>
	<title>Q1</title>
</head>
<body>

	<h1>Grocery Store App</h1>
	<h3>Our Inventory</h3>
	<ul>
		<li id="apple">apples quantity: <span id="uno"></span></li>
		<li id="banana">bananas quantity: <span id="dos"></span></li>
		<li id="orange">oranges quantity: <span id="tres"></span></li>
	</ul>
	<input type="text" id="inputz">
	<button onclick="add(); out();">ADD</button>
	<button onclick="subtract(); out();">SUBTRACT</button>
	<br>
	<p><em>Enter an item, e.g. "apples," and click subtract or add to adjust the quantity. Once quantity reaches 0 the item will be lined out to notify you're out of stock, until more is added to your inventory.</em></p>

<script type="text/javascript" src="Q1.js"></script>
</body>
</html>
```
```javascript
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
```

# Week 4

## Answer

1. Test each function from last week's app
2. update variables and functions to better names 
3. see if you can turn any functions into methods of objects
```HTML
<!DOCTYPE html>
<html>
<head>
	<title>test</title>
</head>
<body>

	<h1>Grocery Store App</h1>
	<h3>Our Inventory</h3>
	<ul>
		<li>apples quantity: <span class="classy"></span></li>
		<li>bananas quantity: <span class="classy"></span></li>
		<li>oranges quantity: <span class="classy"></span></li>
	</ul>
	<input type="text" id="inputz">
	<button onclick="addBtn(); out();">+</button>
	<button onclick="subBtn(); out()">-</button>
	<br>

<script type="text/javascript" src="betterNames.js"></script>
</body>
</html>
```
```javascript
var items = [
	apple = {
		quantity: 5,
		display: function(){
			var X = items.indexOf(this);
			document.getElementsByClassName("classy")[X].innerHTML = this.quantity;
		},
		add: function(){
			this.quantity += 1;
		},
		subtract: function(){
			this.quantity -= 1;
		}
	},
	banana = {
		quantity: 10
	},
	orange = {
		quantity: 15
	}
];

(function(){
	document.getElementsByClassName("classy")[0].innerHTML = apple.quantity;
	document.getElementsByClassName("classy")[1].innerHTML = banana.quantity;
	document.getElementsByClassName("classy")[2].innerHTML = orange.quantity;
})();

function addBtn(){
	var input = document.getElementById("inputz").value;
	if(input === "apples"){
		apple.add();
		apple.display();
	}
	else if(input === "bananas"){
		apple.add.call(banana);
		apple.display.call(banana);
	}
	else if(input === "oranges"){
		apple.add.call(orange);
		apple.display.call(orange);
	};
};

function subBtn(){
	var input = document.getElementById("inputz").value;
	if(input === "apples" && apple.quantity !== 0){
		apple.subtract();
		apple.display();
	}
	else if(input === "bananas" && banana.quantity !== 0){
		apple.subtract.call(banana);
		apple.display.call(banana);
	}
	else if(input === "oranges" && orange.quantity !== 0){
		apple.subtract.call(orange);
		apple.display.call(orange);
	};
};

function out(){
	for(var i = 0; i < items.length; i++){
		if(items[i].quantity === 0){
			document.querySelectorAll("li")[i].style.textDecoration = "line-through";
		}
		else{
			document.querySelectorAll("li")[i].style.textDecoration = "none";
		};
	};
};
```

## Answer

1. change styles of 3 seperate elements using javascript
```HTML

```
