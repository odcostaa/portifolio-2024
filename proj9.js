function js_9() {
    var array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    alert("Existem 30 números em sequencia. Digite um número, e será imprimido na tela o mesmo, e todos os números maiores que este número até o 30.");
    alert("Atenção, inserir um número incorrespondente acarretará no não funcionamento do script.")

    var usuario_escolha = parseInt(prompt("Insira um número entre 1 e 30"));

    var array_maior_14 = [];

    for (var i = 0; i < array_numeros.length; i++) {
        if (array_numeros[i] >= usuario_escolha) {
            array_maior_14.push(array_numeros[i]);
        }
    }

    document.getElementById("resultado").innerHTML = array_maior_14.join(", ");
}