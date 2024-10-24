const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");
const fifthNumber = document.getElementById("fifth-number");
const confirmButton = document.getElementById("confirm-button");

const firstRandom = firstNumber.setAttribute(
	"value",
	parseInt(Math.round(Math.random() * 100))
);
const secondRandom = secondNumber.setAttribute(
	"value",
	parseInt(Math.round(Math.random() * 100))
);
const thirdRandom = thirdNumber.setAttribute(
	"value",
	parseInt(Math.round(Math.random() * 100))
);
const fourthRandom = fourthNumber.setAttribute(
	"value",
	parseInt(Math.round(Math.random() * 100))
);
const fifthRandom = fifthNumber.setAttribute(
	"value",
	parseInt(Math.round(Math.random() * 100))
);

//if (firstNumber.value === secondNumber.value) {
//	parseInt(Math.floor(Math.random() * 100));
//}

console.log(
	firstNumber.value,
	secondNumber.value,
	thirdNumber.value,
	fourthNumber.value,
	fifthNumber.value
);

function clearInput() {
	firstNumber.setAttribute("value", "");
	secondNumber.setAttribute("value", "");
	thirdNumber.setAttribute("value", "");
	fourthNumber.setAttribute("value", "");
	fifthNumber.setAttribute("value", "");
}

setTimeout(clearInput, 3000);

console.log(
	firstNumber.value,
	secondNumber.value,
	thirdNumber.value,
	fourthNumber.value,
	fifthNumber.value
);

//alert("Inserisci i numeri che hai visto sullo schermo");

confirmButton.addEventListener("click", () => {
	if (firstNumber.value === firstRandom) {
		alert("il primo numero è corretto");
	} else {
		alert("il primo numero è sbagliato");
	}
});
