/*
 JSnack 9
 
 Calcola la somma e la media dei primi 10 numeri.
*/

// PROCEDIMENTO:
// 
// 1. CREARE 3 CONST DI CUI 1 CONTIENE IL NUMERO 10, 1 CHE SARA' LA SOMMA TOTALE DEI PRIMI 10 NUMERI E 1 CHE SARA' LA MEDIA DEI PRIMI 10 NUMERI
// 2. DETERMINARE IL CALCOLO LA SOMMA DEI PRIMI 10 NUMERI TRAMITE CALCOLO
// 3. DETERMINARE IL CALCOLO DELLA MEDIA DELLA SOMMA DEI PRIMI 10 NUMERI
// 4. STAMPARE SU HTML


const btnResult = document.getElementById('show');
btnResult.addEventListener('click' , function(){

const numbers = 10;
let sumNumbers = 0;
let averageNumbers = 0;

for(let i = 1; i <= numbers; i++) {

  sumNumbers += i;
  console.log(sumNumbers);

  averageNumbers = sumNumbers / numbers;
  console.log(averageNumbers);

  document.getElementById('sum-numbers').innerHTML = `La somma dei numeri é: ${sumNumbers}`;
  document.getElementById('average-numbers').innerHTML = `La media dei numeri é: ${averageNumbers}`;
}});

