/*
 JSnack 4
 
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// PROCEDIMENTO: 
// 
// 1. CREARE LA LISTA DEI NOMI IN UN ARRAY
// 2. CREARE UN CONSTANTE IN CUI SI CHIARA LA LISTA DI CHI E' INVITATO E CHI NO
// 3. LAVORARE SU "IF" E "ELSE IF" PER CREARE LE CONDIZIONI
// 4. STAMPARE SU HTML

alert ("Benvenuto alla festa a tema 'Il Grande Gatsby'. Prego, inserisca le sue generalità per verificare se è nella lista")

const listParty = [
'Mihai Badia',
'Riccardo Becattini',
'Manuel Benini',
'Giancarlo Croce',
'Silvia Dugato',
'Carlo Duminuco Del Monte',
'Francesco Ercoli',
'Marco Gagliano',
'Cristina Gasperini',
'Chiara Grillo',
'Manuela Ienuso',
'Michele Iliescu',
'Renato Lami',
'Davide Manciucca',
'Salvatore Olivieri',
'Leonardo Pellegrini',
'Agostino Piquè',
'Davide Pizzolla',
'Antonio Pollo',
'Ivan Russo',
'Amanjit Singh',
'Sebastiano Visco'
];
const listChecked = document.getElementById('checklist');
const listPartyChecked = document.getElementById('list-checked');
const listPartyDenied = document.getElementById('list-denied');


listChecked.addEventListener('click' , function(){

const userList = document.getElementById ('written-list').value;
let register = false;

for (let i = 0; i < listParty.length; i++){
  if(listParty[i] === userList);
  register = true
}

if(register) {
  listPartyChecked.innerHTML = "Sei sulla lista. Benevuto alla festa a tema 'Il Grande Batsy'. Buon Divertimento!";
  listPartyChecked.classList.add('checked');
  listPartyDenied.classList.remove('denied');
  listPartyDenied.innerHTML = ' ';
  }
  

else {
  listPartyDenied.innerHTML = "Purtroppo non sei sulla lista. La prossima volta prenotati. Sarà per la prossima volta. Ti Aspettiamo";
  listPartyDenied.classList.add('denied');
  listPartyChecked.classList.remove('checked');
  listPartyChecked.innerHTML = ' ';
  }
})



