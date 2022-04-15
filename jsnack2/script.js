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
const firstWordOutput = (`La nostra stringa ha ${firstWord.length} lettere`);
let secondWord = prompt ('Inserisci un altra parola');
const secondWordOutput = (`La nostra stringa ha ${secondWord.length} lettere`);

console.log(firstWordOutput, secondWordOutput);


