// Passando um tipo para o parâmetro
function printLengthOfText(text: string) {
  console.log(text.length);
}

printLengthOfText('Olá mundo');

function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Olá!', 5);
