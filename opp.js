
//1.//Lag følgende funksjon:

//Funksjonen skal ta inn et tall som parameter og returnere
//"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
//(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
//funksjonen)


// Skriv koden for oppgave 1 her

 function check (tall)
  {
    if (tall % 2 === 0) 
        
    {
        return "Partall";
    }
//hvis tallet er et apartall//
    else
         { 
        return "Oddetall";
    }
    //hvis tallet er et oddetall//
    }


    
    console.log (check(5));


/*2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!" */

 
function cool (text) {


return text.toUpperCase() + "!"; 
   
}

console.log (cool("Dette er kult"));



/*3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding. */




// Funksjonen dagtid tar to argumenter: navn (navn) og time (tid)
function dagtid (navn, time) {
    if (time === undefined) {
        return "Fail: ugyldig tid"; // Returnerer feil hvis tiden er ikke definert
    }

 // Sjekker om tiden er utenfor området (0-23)

if (time < 0 || time > 23) {
    return "Ugyldig tid";
}

// Sjekker hvilken del av dagen basert på verdien av time

 if ( time >= 0 && time <= 5 ) {
    return `God natt ${navn}`;
}

else if ( time >= 6 && time <= 11 ) {
    return `God morgen ${navn}`;
}

else if ( time >= 12 && time <= 17 ) {
    return `God dag ${navn}`;
}

else  {
    return `God kveld ${navn}`;
}
 }


 // Funksjonskall med forskjellige navn og tider

console.log(dagtid("Tommy", 13));
console.log(dagtid("Christian", 23 ));
console.log(dagtid("Channel", 8));
console.log(dagtid("Celine", 10));
console.log(dagtid("Hugo", 19 ));
console.log(dagtid("Bruno", 7 ));
console.log(dagtid("Rihanna", 1 ));
console.log(dagtid("Hugo", 24 ));
console.log(dagtid("Olaf", 54 ));
console.log(dagtid("Beyonce", 4 ));





/*4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"]. */


let arr = ["apple", "banana", "dragonfruit", "orange", "watermelon", "kiwi", "pear"];

function fruits(arr) {
  let result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(fruits(arr));

//


/*Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function replaceWord (text) {
    return text.trim().replace("vanskelig","gøy"); 
}

console.log(replaceWord("Javascript er vanskelig"));


function fixText (text) {
    return text.trim().replace("vanskelig", "gøy");
}

console.log(fixText("Det er vanskelig å bruke metoder"));


function cutSpace (text) {
    return text.trim().replace("veldig "+"vanskelig","gøy");

}

console.log(cutSpace("Javascript er veldig vanskelig"));


/*

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

//const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e". */



// Skriv koden for oppgave 6 her

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

items.shift();

items.splice(2,1, "Linjal");

items.splice(0,2,"Markeringspenn");

    let result = items.join(" | ")

console.log(result);

//////
let withE = items.filter(function(element) {
    return element.includes("e");
});

console.log(withE);