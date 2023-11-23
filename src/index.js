function sumCalculator() {
    const numeroInput = document.getElementById('numeroInput').value;
    const numero = parseInt(numeroInput);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;

    }
    console.log(numero);

    sumOfDivisiveisInt(numero);
}

function sumOfDivisiveisInt(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            somatorio += i;
        }
    }

    alert(`O somatório dos números divisíveis por 3 ou 5 até ${numero - 1} é: ${somatorio}`);
}