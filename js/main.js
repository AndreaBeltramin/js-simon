let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let thirdNumber = document.getElementById("third-number");
let fourthNumber = document.getElementById("fourth-number");
let fifthNumber = document.getElementById("fifth-number");

firstNumber.setAttribute("value", parseInt(Math.floor(Math.random() * 100)));
secondNumber.setAttribute("value", parseInt(Math.floor(Math.random() * 100)));
thirdNumber.setAttribute("value", parseInt(Math.floor(Math.random() * 100)));
fourthNumber.setAttribute("value", parseInt(Math.floor(Math.random() * 100)));
fifthNumber.setAttribute("value", parseInt(Math.floor(Math.random() * 100)));

if (firstNumber.value === secondNumber.value) {
	parseInt(Math.floor(Math.random() * 100));
}

setTimeout(clearInput, 3000);

function clearInput() {
	firstNumber.setAttribute("value", "");
	secondNumber.setAttribute("value", "");
	thirdNumber.setAttribute("value", "");
	fourthNumber.setAttribute("value", "");
	fifthNumber.setAttribute("value", "");
}
