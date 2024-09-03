function js_5() {
    var user_number;
    var array_numeros = [];
    var soma = 0

    do {
        user_number = parseInt(prompt("Insira números inteiros. Quando desejar parar, digite 0."));

        if (isNaN(user_number)) {
            alert("Insira apenas números");
        } else if (user_number != 0) {
            array_numeros.push(user_number)
        }
    } while (user_number != 0);


    for (var i = 0; i < array_numeros.length; i++) {
        soma += array_numeros[i];
    }

    document.getElementById("resultado").innerHTML = (`Soma dos números = ${soma}`);

    var caneta = "a caneta é azul"

    console.log(caneta)
}