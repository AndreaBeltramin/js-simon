let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let thirdNumber = document.getElementById("third-number");
let fourthNumber = document.getElementById("fourth-number");
let fifthNumber = document.getElementById("fifth-number");

let randomNumber = 0;
for (let i = 1; i <= 5; i++) {
	randomNumber = parseInt(Math.floor(Math.random() * 100));
	console.log(randomNumber);
}

firstNumber.setAttribute("value", randomNumber);
secondNumber.setAttribute("value", randomNumber);
thirdNumber.setAttribute("value", randomNumber);
fourthNumber.setAttribute("value", randomNumber);
fifthNumber.setAttribute("value", randomNumber);

if (firstNumber.value === secondNumber.value) {
	randomNumber = parseInt(Math.floor(Math.random() * 100));
}

if (randomNumber)
	console.log(
		firstNumber,
		secondNumber,
		thirdNumber,
		fourthNumber,
		fifthNumber
	);
