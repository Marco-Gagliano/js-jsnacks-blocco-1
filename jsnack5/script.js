/*
 JSnack 5
 
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

// PROCEDIMENTO:
// 
// 1. CREARE UN ARRAY IN CUI ANDRANNO I NUMERI DISPARI
// 2. CREARE UN PROMPT CHE RICHIEDE 6 VOLTE UN NUMERO
// 3. CREARE UN CALCOLO IN CUI SE UN NUMERO NON E' DIVISIBILE LAVORANDO SU UN "IF" DENTRO UN "DO,WHILE", VA NELL'ARRAY
// 

const numbersArray = [];

console.log('I numeri dispari sono', numbersArray);

const numbersRequest = 7;
let i = 1;
let numbersRequired;

do {

  numbersRequired = parseInt(prompt('Inserisci un numero da 0 a 999.999.999.999.999.999.999'));
  console.log('Il numero inserito è', numbersRequired);

  if(numbersRequired % 2) {
    document.getElementById('odd-numbers').innerHTML = `I numeri dispari sono:${numbersArray}`
    numbersArray.push(numbersRequired);
  } i++;
} 

while (i <= numbersRequest); 