//prendo tutti gli id dei numeri dalll'html e l'id del bottone per la verifica
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");
const fifthNumber = document.getElementById("fifth-number");

const confirmButton = document.getElementById("confirm-button");

//creo i numeri random
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const firstRandomNumber = generateRandomNumber(1, 99);
const secondRandomNumber = generateRandomNumber(1, 99);
const thirdRandomNumber = generateRandomNumber(1, 99);
const fourthRandomNumber = generateRandomNumber(1, 99);
const fifthRandomNumber = generateRandomNumber(1, 99);

//li metto in un array
const randomEl = [
	firstRandomNumber,
	secondRandomNumber,
	thirdRandomNumber,
	fourthRandomNumber,
	fifthRandomNumber,
];
console.log(randomEl);

//inserisco i valori random negli input in html
firstNumber.innerHTML = firstRandomNumber;
secondNumber.innerHTML = secondRandomNumber;
thirdNumber.innerHTML = thirdRandomNumber;
fourthNumber.innerHTML = fourthRandomNumber;
fifthNumber.innerHTML = fifthRandomNumber;

//recupero le card dove sono i numeri dall'html
const randomNumberCard = document.getElementById("randomNumberCard");
const insertNumberCard = document.getElementById("insertNumberCard");

//creo funzione per cancellare gli input random
function clearInput() {
	randomNumberCard.classList.add("d-none");
	insertNumberCard.classList.remove("d-none");
}

//setto un timeout per far scomparire gli imput dell'html dopo tot tempo
setTimeout(clearInput, 3000);

//creo un evento al click del bottone
//al click devo convalidare i numeri inseriti dall'utente con i numeri random

confirmButton.addEventListener("click", () => {
	//dichiaro un array di numeri corretti e una variabile per un counter di numeri corretti
	const correctNumbers = [];
	let countCorrect = 0;

	//recupero i valori che inserisce l'utente in un array
	const insertNumberArray = [
		document.getElementById("input-1").value,
		document.getElementById("input-2").value,
		document.getElementById("input-3").value,
		document.getElementById("input-4").value,
		document.getElementById("input-5").value,
	];

	console.log(insertNumberArray);
	//controllo per ogni numero scritto dall'utente

	insertNumberArray.forEach((input, index) => {
		//se corrisponde
		if (parseInt(input) === randomEl[index]) {
			//aggiungo al counter un elemento
			countCorrect += 1;
			//aggiungo all'array correctNumbers il numero random
			correctNumbers.push(randomEl[index]);
		}
	});

	//faccio comparire una scritta che dice quanti e quali numeri sono corretti
	const checkNumeri = document.getElementById("check-numeri");
	checkNumeri.innerHTML = `Hai indovinato ${countCorrect} numeri: ${correctNumbers.join(
		" , "
	)} `;
});
