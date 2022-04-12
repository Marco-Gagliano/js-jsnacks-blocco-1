/*
 JSnack 2
 
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// PROCEDIMENTO
// 
// 1. CREAZIONE PROMPT INSERENDOP DELLE FRASI
// 2. LAVORARE SUGLI "IF, ELSE IF" DICHIARANDO CHE IL SOFTWARE STAMPA IL NUMERO PIU' ALTO UTILIZZANDO "LENGTH"
// 3. FARE IN MODO CHE VIENE STAMAPATA LA PAROLE PIU' CORTA E POI QUELLA LUNGA

let firstWord = prompt ('Inserisci una parola');
let secondWord = prompt ('Inserisci un altra parola');

console.log(firstNum, secondNum);

let firstView = document.querySelector('#first-word').innerHTML = `${firstNum}`;
let secondView = document.querySelector('#second-word').innerHTML = `${secondNum}`;

console.log(firstView, secondView);


if (firstNum > secondNum) {
  document.querySelector('.winning-word').innerHTML = `The Winner is ${firstNum}`;
}

else if(firstNum < secondNum){
  document.querySelector('.winning-word').innerHTML = `The Winner is ${secondNum}`;
}

else {
  document.querySelector('.winning-word').innerHTML = `The Winner is Nodoby`;
}