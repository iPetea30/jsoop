const country = 'Romania';
const continent = 'Europa';
let population = 49;
// console.log(country);
// console.log(continent);
// console.log(population);




// let myName = 'Numele meu este Petea';
// let age = 33;
// console.log(myName);
// console.log(age);

// let PI = 3.14;
// let Person = 'person';

let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// javaScriptIsFun = false;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// javaScriptIsFun = 23;
// console.log(typeof javaScriptIsFun);
// javaScriptIsFun = '23';
// console.log(typeof javaScriptIsFun);


//// tipuri de date
// let year;
// console.log(year);
// console.log(typeof undefined);

// year = 1989;
// console.log(typeof year);

// console.log(typeof null);

let isIsland = false;
const language = 'english';
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


//// let, const, var
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// var myAge = 20;
// myAge = 22;
// console.log(myAge);

// let myAge2 = 30;
// console.log(myAge2);

// language = 'portuguese';


//// operatorii de baza
let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2021;

// // console.log(ageJonas);
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 = 2 la puterea a 3 a. 2 * 2 * 2 = 8.

// const firstName = 'Ion';
// const lastName = 'Ciobanu';
// console.log(firstName);
// console.log(lastName);
// console.log(firstName + lastName + firstName + firstName + lastName); // + reprezinta concatenare - impreunare = IonCiobanuIonIonCiobanu
// console.log(firstName + " " + lastName); //Ion Ciobanu

// //Assigment operators
// let x = 10 + 5; // 15
// x+= 10; // x = x + 10 // 25
// console.log(x); //25
// x -= 5; // x = x - 5 // 20
// console.log(x); // 20
// x *= 5; // x = x * 5 // 100
// console.log(x); // 100

// x++ // x = x + 1
// x--;
// x--; 
// console.log(x); // 99

// //Comparison operators
// console.log(10 > 8); //false
// console.log(10 < 8); // true
// console.log(ageJonas > ageSarah); // true
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(isFullAge); // false // 16

// console.log(now - 1991 > now - 2021); // true // 

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 = country + ' is in ' + continent + ' and it`s ' + population + ' milion people speaks ' + language;
// console.log(description1);


///// Precedenta operatorilor
let suma = ageJonas - ageSarah;
console.log(suma);
console.log(now - 1991 > now - 2021);

let x, y;
// x = y = undefined;

// x = y = 25 - 10 -5;
// // x = y = undefined y = 10;
// // undefined 10;

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


///// CHALLENGE #1

// Mark și John încearcă să-și compare IMC (indicele de masă corporală), l-au calculat folosind formula:
// IMC = masa / inaltime ** 2 = masa / (inaltime * inaltime) (masa in kg și înălțimea în metri).
// Sarcinile tale:
// 1. Stocați masa și înălțimea lui Mark și John în variabile
// 2. Calculați ambele IMC folosind formula (le puteți chiar implementa pe ambele versiuni)
// 3. Creați o variabilă booleană „markHigherBMI” care să conțină informații despre faptul dacă Mark are un IMC mai mare decât John.
// Date de testare:

// § Date 1: Mark cântărește 78 kg și are 1,69 m înălțime.  John cântărește 92 kg și are 1,95
// m înaltime.
// § Data 2: Mark cântărește 95 kg și are 1,88 m înălțime. John cântărește 85 kg și are 1,76
// m înaltime.

// Data 1

// const masaMark = 78;
// const masaJohn = 92;

// const inaltimeMark = 1.69;
// const inaltimeJohn = 1.95;

// // const BMIMark = masaMark / inaltimeMark ** 2;
// // const BMIJohn = masaJohn / inaltimeJohn ** 2;
// const BMIMark = masaMark / (inaltimeMark ** 2);
// const BMIJohn = masaJohn / (inaltimeJohn ** 2);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // true

// Data 2

// let massMark = 95;
// let massJohn = 85;

// let heightMark = 1.88;
// let heightJohn = 1.76;

// // let BMIMark = massMark / heightMark ** 2;
// // let BMIJohn = massJohn / heightJohn ** 2;
// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);

// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // false


//// Stringuri si sabloane literale

// const numelePersoanei = "Ion";
// const job = "profesor";
// const anulNasterii = 1991;
// const currentYear = 2037;

// // const stringNou = "Eu sunt " + numelePersoanei + ", un " + job + " care are " + (currentYear - anulNasterii) + " ani."
// // console.log(stringNou);

// const stringMaiNou = `Eu sunt ${numelePersoanei}, un ${job} care are ${currentYear - anulNasterii} ani.`;
// console.log(stringMaiNou);

// // console.log("Asta este \n\
// // un string \n\
// // in mai multe randuri");

// console.log(`Asta este
// un string
// in mai multe randuri`);

// console.log("Cuvant." + " " + job);
// console.log(`Cuvant. ${job}`);

// EXERCITIU
// const description1 = `${country} is in ${continent} and its ${population} milion people speaks ${language}`;
// console.log(description1);



//// Luarea deciziilor. IF - ELSE

// const age = 16;

// if(age >= 18){
//     console.log("Esti destul de in varsta pentru a conduce o masina !🚗");
// } else {
//     console.log(`Nu ai varsta necesara! Trebuie sa mai cresti ${18 -age} ani.`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`Ai fost nascut in secolul ${century}.`);

// EXERCITIU
// if(population > 33){
//     console.log(`Populatia din ${country} este peste medie.`);
// } else {
//     console.log(`Populatia din ${country} este cu ${33 - population} milioane sub medie.`);
// }


///// CHALLENGE #2

// Folosiți exemplul IMC / BMI din Provocarea #1 și codul pe care l-ați scris deja și imbunatiti-l.
// Sarcinile tale:
// 1. Imprimați o ieșire pe consolă, spunând cine are IMC / BMI mai mare. Mesajul este fie „IMC-ul lui Mark este mai mare decât al lui John!” sau „IMC-ul lui John este mai mare decât al lui Mark!”
// 2. Utilizați un literal șablon pentru a include valorile IMC în rezultate. Exemplu: „Al lui Mark
// IMC (28,3) este mai mare decât cel al lui John (23,9)!"
// Sugestie: Folosiți o declarație if/else

// SUCCES

// const BMIMark = 28.3;
// const BMIJohn = 23.9;

// if(BMIMark > BMIJohn){
//     console.log("IMC-ul lui Mark este mai mare decat al lui John !");
// } else {
//     conesole.log("IMC-ul lui John este mai mare decat al lui Mark !");
// }


// § Data 2: Mark cântărește 95 kg și are 1,88 m înălțime. John cântărește 85 kg și are 1,76
// m înaltime.

// const masaMark = 95;
// const masaJohn = 85;

// const inaltimeMark = 1.88;
// const inaltimeJohn = 1.76;

// // const BMIMark = masaMark / inaltimeMark ** 2;
// // const BMIJohn = masaJohn / inaltimeJohn ** 2;
// const BMIMark = masaMark / (inaltimeMark ** 2);
// const BMIJohn = masaJohn / (inaltimeJohn ** 2);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // false


// if (markHigherBMI) {
//     console.log(`BMI-ul lui Mark, (${BMIMark}) este mai mare decat al lui John (${BMIJohn})!`);
// } else {
//     console.log(`BMI-ul lui John, (${BMIJohn}) este mai mare decat al lui Mark (${BMIMark})!`);
// }


//// Type Conversion and Coercion //Conversiunea si Coersiunea tipurilor de date

// Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 18, inputYear); // 2009

// const namePersoana = "Ion";
// console.log(Number(namePersoana)); // NaN
// console.log(typeof NaN); // number

// console.log(String(23), 23);// string 23, number 23

// // Type coersion
// console.log("Eu am " + 23 + " ani."); // string Eu am 23 ani
// console.log("23" - "10" - 3); // number 10
// console.log("23" / "2"); // number 11.5

// let n = "1" + 1; // string 11
// n -= 1; // string 11 - 1 = number 10
// console.log(n); // number 10

// let m = 2 + 3 + 4 + '5'; // string '95'
// console.log(m); // string '95'

// let k = '10' - '4' - '3' - 2 + "5"; // string '15'
// console.log(k); // string '15'

// EXERCITIU
// console.log("9" - "5"); // number 4
// console.log('19' - '13' + '17'); // string '617'
// console.log('19' - '13' + 17); // number 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 -2); // number 1143



//// Truthy or Falsy Values //Valori Truthy sau Falsy

// Falsy
// 5 valori falsy : 0, " ", undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("2341")); // true
// console.log(Boolean({})); // true

// const bani = 120;
// if (bani){ // bani = 0 => false
//     console.log("Ai ceva bani. Nu-i cheltui pe toti !");
// } else {
//     console.log("Du-te si gaseste-ti un job !");
// }

// let inaltime = 1.82;

// if(inaltime){
//     console.log("YAY! Variabila noastra este definita !");
// } else {
//     console.log("Variabila noastra nu este definita !");
// }



//// Equality operators == vs === //Operatori de egalitate == vs ====

// const age = "18";

// if (age === 18) console.log("Ai devenit un adult. (operator strict");
// if (age == 18) console.log("Ai devenit un adult. (operator liber)");

// const favourite = Number(prompt("Care este numarul tau favorit ?"));
// console.log(favourite); // 23 => string
// console.log(typeof favourite); // string '23'

// if (favourite == 23) { // true => string '23'
//     console.log("23 este un numar cool.");
// } else if (favourite == 7) {
//     console.log("7 este de asemenea un numar cool.");
// }

// if (favourite === 23) { // === => false => string'23' nu este egal cu number 23
//     console.log("23 este un numar cool.");
// } else if (favourite === 7) {
//     console.log("7 este de asemenea un numar cool.");
// } else if (favourite === 9) {
//     console.log("9 este de asemenea un numar bun.");
// } else {
//     console.log("Numarul pe care l-ai introdus nu este nici 9 nici 7 !");
// }

// if(favourite != 23) console.log("De ce nu ai ales numarul 23 ?"); // 9 != => se executa linia de cod

// EXERCITIU

// const numNeighbours = Number(prompt("How many neighbours does your country have?"));
// const numNeighbours = 10;

// if (numNeighbours === 1) {
//     console.log("Only 1 border neighbour.");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border neighbours.");
// } else {
//     console.log("No border neighbours");
// }



//// Basic Boolean Logic // logica Boolean

// Boolean operators : AND, OR, NOT
// A AND B => true only if both or all variables are true. False if one variable is false.
// A OR B => true if one or all variables are true. False only if all variables are false.
// NOT A, NOT B => if one variable A / B is true, than NOT A / NOT B changes to false.



//// Logical Operators // Operatori Logici

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND Logical Operator => false
// console.log(hasDriversLicense || hasGoodVision); // OR Logical Operator => true
// console.log(!hasDriversLicense); // NOT Logical Operator => false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sara ar trebui sa fie la volan.");
// } else {
//     console.log("Sara nu ar trebui sa conduca masina !");
// } // False => true && (AND) false => FALSE

// const isTired = true; // C
// if (hasDriversLicense && hasGoodVision && !isTired) { // true AND true AND false => false
//     console.log("Sara ar trebui sa fie la volan.");
// } else {
//     console.log("Sara nu ar trebui sa conduca masina !");
// } 


// EXERCITIU
// 1. Comentați codul anterior, astfel încât promptul să nu ne stea în cale
// 2. Să presupunem că Sarah caută o țară nouă în care să trăiască. Ea vrea să trăiască într-o
// țară care vorbește engleza, are mai puțin de 50 de milioane de locuitori și nu este o
// insulă.
// 3. Scrieți o declarație if pentru a o ajuta pe Sarah să descopere dacă țara dvs. este potrivită pentru ea.
// Va trebui să scrieți o condiție care să țină cont de toate criteriile lui Sarah. Luați
// timpul necesar și verificați o parte a soluției dacă este necesar.
// 4. Dacă țara ta este potrivită, înregistrează un șir ca acesta: „Ar trebui să locuiești în Portugalia :)”. Dacă
// nu, înregistrați „Portugalia nu îndeplinește criteriile dvs. :('
// 5. Probabil că țara ta nu îndeplinește toate criteriile. Deci, întoarce-te și temporar
// modifică unele variabile pentru a face condiția adevărată (cu excepția cazului în care locuiți în
// Canada :D)

// if (language === "english" && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`); // You should live in Romania :)
// } else {
//     console.log(`${country} does not fulfill your criteria.`);
// }



//// CHALLENGE #3
// Există două echipe de gimnastică, Delfinii și Koalas. Ei concurează împotriva fiecăruia
// de 3 ori. 
// Câștigătorul cu cel mai mare scor mediu câștigă un trofeu!
// Sarcinile tale:
// 1. Calculați scorul mediu pentru fiecare echipă, folosind datele de testare de mai jos
// 2. Comparați scorurile medii ale echipelor pentru a determina câștigătorul competiției, și imprimați-l pe consolă. Nu uitați că poate exista o remiză, așa că testați pentru asta
// de asemenea (remiză înseamnă că au același punctaj mediu)

// 3. Bonus 1: Includeți o cerință pentru un scor minim de 100. Cu această regulă, o echipa câștigă doar dacă are un scor mai mare decât cealaltă echipă și în același timp are un punctaj de cel puțin 100 de puncte. 
// Sugestie: Utilizați un operator logic pentru a testa valoarea minimă scor, precum și mai multe blocuri else-if.   

// 4. Bonus 2: Scorul minim se aplică și la o remiză! Deci o remiză are loc doar când
// ambele echipe au același scor și ambele au un scor mai mare sau egal cu 100 puncte. În caz contrar, nicio echipă nu câștigă trofeul

// Date de testare:
// § Date 1: Delfinii scor 96, 108 și 89. Koalas scor 88, 91 și 110

// § Bonus date 1: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 123

// § Bonus date 2: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 106


// SUCCES

// const scoreDolphins = (96 + 109 + 89) / 3;
// const scoreKoalas = (88 + 96 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas); // 97.666666, 96.3333333

// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins have won the the trophy ! 🏆");
// } else if (scoreKoalas > scoreDolphins){
//     console.log("Koalas have won the the trophy ! 🏆");
// } else if (scoreDolphins === scoreKoalas){
//     console.log("It was a tie ! 😆");
// }

// BONUS 1 + 2
// Includeți o cerință pentru un scor minim de 100. Cu această regulă, o echipa câștigă doar dacă are un scor mai mare decât cealaltă echipă și în același timp are un punctaj de cel puțin 100 de puncte. 
// Sugestie: Utilizați un operator logic pentru a testa valoarea minimă scor, precum și mai multe blocuri else-if.
// 4. Bonus 2: Scorul minim se aplică și la o remiză! Deci o remiză are loc doar când
// ambele echipe au același scor și ambele au un scor mai mare sau egal cu 100 puncte. În caz contrar, nicio echipă nu câștigă trofeul


// § Bonus date 1: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 123

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas); // 103.333333, 109

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins have won the the trophy ! 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas have won the the trophy ! 🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("It was a tie ! 😆");
// } else {
//     console.log("No one won the trophy !😭");
// }

//Koalas have won the the trophy ! 🏆

// § Bonus date 2: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 106

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas); // 103.333333, 103.333333

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins have won the the trophy ! 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas have won the the trophy ! 🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("It was a tie ! 😆");
// } else {
//     console.log("No one won the trophy !😭");
// }

//It was a tie ! 😆



//// The Switch statement

// const day = 'friday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day !');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day !');
// }



//// Statements and Expressions

// 3 + 4 // this is an expression because it will produces a value
// 1991 // this is an expression also 
// true && false && !false; // also an expression

// if ( 23  > 10) {
//     const str = '23 is bigger'; // '23 is bigger' is an expression and the hole row it's a statement.
// } // if / else blocks are a statement

// const me = 'Jonas'; // this is a statement;
// console.log(`I'm ${2037 - 1991} years old ${me}`);