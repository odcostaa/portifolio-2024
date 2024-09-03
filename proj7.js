function js_7() {
    let numeros_array = [];


    while (numeros_array.length != 5) {
        var user_number = parseInt(prompt("Insira cinco números"));

        if (isNaN(user_number)) {
            alert(`Você deve usar apenas números.`)
        } else {
            numeros_array.push(user_number)
        }
    }

    let maior_n = Math.max(...numeros_array);
    let menor_n = Math.min(...numeros_array);

    // document.write(`Números inseridos = ${numeros_array} <br>`);
    // document.write(`Maior número = ${maior_n} <br>`);
    // document.write(`Menor número = ${menor_n} <br>`);

    document.getElementById("resultado").innerHTML = (`Números inseridos = ${numeros_array}<br> Maior número = ${maior_n}<br>    Menor número = ${menor_n}.`)
}