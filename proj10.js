function js_10() {
    var array_palavras = [];

    do {
        do {
            var user_palavras = prompt("Insira palavras");

            if (isNaN(user_palavras) && user_palavras.trim() !== "") {
                array_palavras.push(user_palavras.trim());
            } else {
                alert("Utilize apenas palavras");
            }

        } while (isNaN(user_palavras) && user_palavras.trim() === "");

        var resp = prompt("Deseja continuar inserindo palavras? (sim/não)");

    } while (resp.toLowerCase() == "sim");

    var repetidas = [];
    var contadorRepetidas = 0;

    for (var i = 0; i < array_palavras.length; i++) {
        for (var j = i + 1; j < array_palavras.length; j++) {
            if (array_palavras[i] === array_palavras[j] && repetidas.indexOf(array_palavras[i]) === -1) {
                repetidas.push(array_palavras[i]);
                contadorRepetidas++;
            }
        }
    }

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "Palavras que se repetem: " + repetidas.join(", ") + "<br>Quantidade de palavras repetidas: " + contadorRepetidas;
}
