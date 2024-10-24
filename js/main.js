const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");
const fifthNumber = document.getElementById("fifth-number");
const confirmButton = document.getElementById("confirm-button");

//creo i numeri random
const firstRandom = Math.floor(Math.random() * 100);
const secondRandom = Math.floor(Math.random() * 100);
const thirdRandom = Math.floor(Math.random() * 100);
const fourthRandom = Math.floor(Math.random() * 100);
const fifthRandom = Math.floor(Math.random() * 100);

//imposto i valori negli input in html
firstNumber.value = firstRandom;
secondNumber.value = secondRandom;
thirdNumber.value = thirdRandom;
fourthNumber.value = fourthRandom;
fifthNumber.value = fifthRandom;

//if (firstNumber.value === secondNumber.value) {
//	parseInt(Math.floor(Math.random() * 100));
//}

//funzione per cancellare gli input random
function clearInput() {
	firstNumber.value = "";
	secondNumber.value = "";
	thirdNumber.value = "";
	fourthNumber.value = "";
	fifthNumber.value = "";
}

//setto un timeout per far scomparire gli imput dopo tot tempo
setTimeout(clearInput, 3000);

//alert("Inserisci i numeri che hai visto sullo schermo");

confirmButton.addEventListener("click", () => {
	const results = [
		firstNumber.value === firstRandom.toString(),
		secondNumber.value === secondRandom.toString(),
		thirdNumber.value === thirdRandom.toString(),
		fourthNumber.value === fourthRandom.toString(),
		fifthNumber.value === fifthRandom.toString(),
	];

	results.forEach((result, index) => {
		if (result) {
			alert(`Il numero ${index + 1} è corretto`);
		} else {
			alert(`Il numero ${index + 1} è sbagliato`);
		}
	});
});

console.log(
	firstNumber.value,
	secondNumber.value,
	thirdNumber.value,
	fourthNumber.value,
	fifthNumber.value
);
