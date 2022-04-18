/*
 JSnack 6
 
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

// PROCEDIMENTO
// 
// 1. CREARE UNA VARIABILE CON "PARSEINT-PROMPT" IN CUI RICHIEDERE DEI NUMERI
// 2. FARE IN MODO CHE SE L'UTENTE NON SCRIVE NUMERI, ESEGUE UN "ALERT" RIPETENDOSI IL CICLO FINCHE NON SCRIVE UN NUMERO
// 3. CREARE 3 VARIBIALI DOVE UNO RISULTA IL NUMERO ELEVATO AL CUBO,UNO E' IL CALCOLO DA ESEGUIRE E L'ALTRO E' IL NUMERO PRIMO PRIMA DEL CALCOLO
// 4. UTILIZZARE "WHILE" PER EFFETTUARE IL CICLO CHE SI INTERROMPE IN BASE AL NUMERO SCRITTO
// 5. UTILIZZARE IL MATH.POW


let userNumber = parseInt(prompt('Inserire la quantità dei numeri che si vuole sapere il calcolo elevato al cubo'));

while (isNaN(userNumber)) {
  alert('Non hai inserito un numero. Riprovare');
  userNumber = parseInt(prompt('Inserire la quantità dei numeri che si vuole sapere il calcolo elevato al cubo'));
}

let powerNumber;
let x = 1;
let scaleNumber = 0;


while (x <= userNumber) {

  scaleNumber = scaleNumber + 1;
  console.log(scaleNumber);

  document.getElementById('insert-number').innerHTML += `${scaleNumber} <br>`;
  document.getElementById('description-number').innerHTML += `Elevato al cubo è: <br>`;

  powerNumber = Math.pow(x, 3);
  x++;
  document.getElementById('power-number').innerHTML += `${powerNumber} <br>`;
  console.log('I numeri sono:' ,powerNumber);
};