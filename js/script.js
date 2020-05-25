// Cliccabili
var buttonConfirm = document.getElementById('confirm');
var buttonCancel = document.getElementById('cancel');

// Variabili Biglietto
var ticketName = document.getElementById('name_result');
var ticketOffer = document.getElementById('offer_result');
var ticketPrice = document.getElementById('price_result');
var code = document.getElementById('code_result');
var cabin = document.getElementById('cabin_result');
var ticket = document.getElementById('ticket');

// Click su "Conferma"
buttonConfirm.addEventListener('click',
 function() {
   // Variabili Utente
   var name = document.getElementById('name').value;
   var destination = document.getElementById('destination').value;
   if (destination == 'bologna') {
     var km = 253
   }
   else if (destination == 'milano') {
     var km = 39
   }
   else {
     var km = 717
   }
   var age = document.getElementById('age').value;
   if (age < 18) {
     var price = (km * .21) * .8;
     var offer = 'Sconto Minorenni'
   }
   else if (age > 65) {
     var price = (km * .21) * .6;
     var offer = 'Sconto Over65'
   }
   else {
     var price = (km * .21)
     var offer = 'ND'
   }
   var classs = document.getElementById('class').value;
   if (classs == 'first') {
     var wagon = Math.floor(Math.random() * 3) + 1;
     var surplus = 1.50;
   }
   else {
     var wagon = Math.floor(Math.random() * 3) + 5;
     var surplus = 0;
   }
  ticketName.innerHTML = name;
  ticketOffer.innerHTML = offer;
  cabin.innerHTML = wagon;
  code.innerHTML = Math.floor(Math.random() * 9999) + 1;
  ticketPrice.innerHTML = (price + surplus ).toFixed(2) + ' Euro' ;
  ticket.style.display = 'flex';
 }
);
// Click su "Annulla"
buttonCancel.addEventListener('click',
function() {
  ticketName.innerHTML = '';
  ticketOffer.innerHTML = '';
  ticketPrice.innerHTML = '';
  cabin.innerHTML = '';
  code.innerHTML = '';
  ticket.style.display = 'none';
}
);
