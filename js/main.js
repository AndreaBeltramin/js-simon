//prendo tutti gli id dei numeri dalll'html e li metto in un array

const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");
const fifthNumber = document.getElementById("fifth-number");
const confirmButton = document.getElementById("confirm-button");

const inputsNumber = [
	firstNumber,
	secondNumber,
	thirdNumber,
	fourthNumber,
	fifthNumber,
];

//creo i numeri random e li metto in un array
const firstRandomNumber = Math.floor(Math.random() * 100);
const secondRandomNumber = Math.floor(Math.random() * 100);
const thirdRandomNumber = Math.floor(Math.random() * 100);
const fourthRandomNumber = Math.floor(Math.random() * 100);
const fifthRandomNumber = Math.floor(Math.random() * 100);

const randomEl = [
	firstRandomNumber,
	secondRandomNumber,
	thirdRandomNumber,
	fourthRandomNumber,
	fifthRandomNumber,
];

//imposto i valori random negli input in html
firstNumber.value = firstRandomNumber;
secondNumber.value = secondRandomNumber;
thirdNumber.value = thirdRandomNumber;
fourthNumber.value = fourthRandomNumber;
fifthNumber.value = fifthRandomNumber;

//if (firstNumber.value === secondNumber.value) {
//	parseInt(Math.floor(Math.random() * 100));
//}

//setto un timeout per far scomparire gli imput dopo tot tempo
setTimeout(clearInput, 3000);

//creo funzione per cancellare gli input random
function clearInput() {
	firstNumber.value = "";
	secondNumber.value = "";
	thirdNumber.value = "";
	fourthNumber.value = "";
	fifthNumber.value = "";
}

//alert("Inserisci i numeri che hai visto sullo schermo");

//creo un evento al click del bottone
//al click devo convalidare i numeri inseriti dall'utente con i numeri random
confirmButton.addEventListener("click", () => {
	const correctNumbers = [];
	let countCorrect = 0;

	//controllo per ogni numero scritto dall'utente
	inputsNumber.forEach((input, index) => {
		//se corrisponde scrivo
		if (input.value === randomEl[index].toString()) {
			countCorrect += 1;
			correctNumbers.push(randomEl[index]);
		}
	});

	//faccio comparire una scritta che dice quanti e quali numeri sono corretti
	const checkNumeri = document.getElementById("check-numeri");
	checkNumeri.innerHTML = `Hai indovinato ${countCorrect} numeri (${correctNumbers.join(
		" , "
	)})`;
});

console.log(
	firstNumber.value,
	secondNumber.value,
	thirdNumber.value,
	fourthNumber.value,
	fifthNumber.value
);
