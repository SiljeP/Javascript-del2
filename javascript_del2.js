// var tekst = "Hej verden";

// alert(tekst);

//  opgave 3
//  var start = "Hej ";
//  var slut = "verden.";
//  var sammen = start + slut;

// document.write(sammen);
//opgave 4
// var tal1 = 28;
// var tal2 = 1;
// var tallet = tal1 + tal2
// document.write(tallet);

//opgave 5

// var tekst = "Dette er en tekst ";
// var tal3 = 1337;
// var teksttal = tekst + tal3;
// document.write(teksttal);

// Opgave 6

// var tal1 = 15;
// var tal2 = 5;

// document.write(tal1 + tal2);
// document.write(tal1 - tal2);
// document.write(tal1 * tal2);
// document.write(tal1 / tal2);

// // opgave 7
// var skrivtal = prompt("skriv et tal");
// document.write(skrivtal);

// // Øvelse 8

// if(isNaN(skrivtal)){
//     alert(skrivtal + " er IKKE et tal");
// }
// // Øvelse 9
// else{ 
//     alert(skrivtal + " er et tal")
// }

// Øvelse 10

// var talprompt = prompt("skriv et tal, tak");
// while(isNaN(talprompt)){
//     talprompt = prompt("Skriv et tal");
// }

// Øvelse 11

// var tal11 = 40;
// var tekst11 = " Dette er 40 tekst"
// var boo11 = true;

// document.write(typeof(tal11));
// document.write(typeof(tekst11));
// document.write(typeof(boo11));

// Øvelse 12

// var ovelse12 = prompt("hvad er det her")
// document.write(typeof(ovelse12));

// Øvelse 13

// var probox1 = prompt("Det her er prompt box 1")
// var probox2 = prompt("Det her er prompt box 2")
// document.write(probox1 + probox2)

// Den sætter hvad end man skriver i promptboksen sammen hvis det er tekst eller nummer. altså regner det ikke ud men sætter det ved siden af hinanden.

// Øvelse 14
// var i = 1;
// while(i < 5){
//     document.write(i++);
// }
// Den skriver nu 1234 ud som jo alle sammen er mindre end 5. genialt. Den udskriver kun 1 gang.

// Opgave 15

var tal15 = 1;
while(tal15 < 4){
    
     if(tal15%2 == 0){
         document.write("Tallet "+ tal15 +" er lige")
     } else{
         document.write("Tallet "+ tal15 +" er ulige")
     }
    // console.log(tal15);
    tal15++;
}