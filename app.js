
alert('Boas vindas ao jogo do número misterioso');
let numeroMaximo = 10000
let numeroMisterioso = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroMisterioso)
let chute;
let tentativas = 1;

while (chute != numeroMisterioso) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroMisterioso) {
       break;
    } else {
        if (chute > numeroMisterioso) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroMisterioso} com ${tentativas} ${palavraTentativa}`);


