 /*
 JSnack 1
 
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

// PROCEDIMENTO:
// 1. CREARE DUE PROMPT INSERENDO DEI NUMERI IN ENTRAMBI I CASI
// 2. LAVORARE SUGLI "IF, ELSE IF" DICHIARANDO CHE IL SOFTWARE STAMPA IL NUMERO PIU' ALTO


const firstNum = parseInt(prompt ('Inserisci un numero'));
const secondNum = parseInt(prompt ('Inserisci un altro numero'));

console.log(firstNum, secondNum);

const firstView = document.getElementById('first-number').innerHTML = `The first number is: ${firstNum}`;
const secondView = document.getElementById('second-number').innerHTML = `The second number is: ${secondNum}`;

console.log(firstView, secondView);


if (firstNum > secondNum) {
  document.querySelector('.winning-number').innerHTML = `The Winner is ${firstNum}`;
}

else if(firstNum < secondNum){
  document.querySelector('.winning-number').innerHTML = `The Winner is ${secondNum}`;
}

else {
  document.querySelector('.draw-number').innerHTML = `Draw`;
}


