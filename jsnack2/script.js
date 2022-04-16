/*
 JSnack 2
 
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// PROCEDIMENTO
// 
// 1. CREAZIONE PROMPT INSERENDOP DELLE FRASI
// 2. LAVORARE SUGLI "IF, ELSE IF" DICHIARANDO CHE IL SOFTWARE STAMPA IL NUMERO PIU' ALTO UTILIZZANDO "LENGTH"
// 3. FARE IN MODO CHE VIENE STAMPATA LA PAROLE PIU' CORTA E POI QUELLA LUNGA

const firstWord = prompt ('Inserisci una parola');
const secondWord = prompt ('Inserisci un altra parola');

console.log(firstWord, secondWord);

const firstWordOutput = (`La parola inserita contiene ${firstWord.length} lettere`);
const secondWordOutput = (`La parola inserita contiene ${secondWord.length} lettere`);

console.log(firstWordOutput, secondWordOutput);

const firstWrittenWord = document.querySelector('.first-word');
const secondWrittenWord = document.querySelector('.second-word');


if (firstWord > secondWord) {
  document.querySelector('.winner-word').innerHTML = `La parola più corta è "${secondWord}" perchè contiene ${secondWord.length} lettere`;
  document.querySelector('.loser-word').innerHTML = `La parola più lunga è "${firstWord}" perchè contiene ${secondWord.length} lettere`;
  
}

else if(firstWord < secondWord) {
  document.querySelector('.winner-word').innerHTML = `La parola più corta è "${firstWord}"  perchè contiene ${firstWord.length} lettere`;
  document.querySelector('.loser-word').innerHTML = `La parola più lunga è "${secondWord}" perchè contiene ${secondWord.length} lettere`;
}

else {
  document.querySelector('.equal-word').innerHTML = `sia ${firstWord} che ${secondWord} hanno lo stesso numero di lettere:${firstWord.length} e 
  ${secondWord.length}`;
};
