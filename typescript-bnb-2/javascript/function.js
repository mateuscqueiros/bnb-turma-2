"use strict";
// Passando um tipo para o parâmetro
function printLengthOfText(text) {
    console.log(text.length);
}
printLengthOfText('Olá mundo');
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log(`${greeting}, ${triple(value)}!`);
}
greetTripled('Olá!', 5);
