function js_8() {
    var array_numeros = [];

    do {

        do {
            var usuario_numero = parseInt(prompt("Insira números para encontrar a média."));

            if (isNaN(usuario_numero)) {
                alert("Utilize apenas números");
            }
        } while (isNaN(usuario_numero));
        //a pergunta se repetirá caso o prompt nao seja um número.

        array_numeros.push(usuario_numero);

        var resp = prompt("Deseja continuar? Sim ou Não?").toLowerCase();

    } while (resp == "sim");

    function EncontrarMedia() {

        var soma = 0
        //definindo variavel local apenas para executar o calculo que nao sera exibido

        for (var i = 0; i < array_numeros.length; i++) {
            soma += array_numeros[i];
        }

        result_media = soma / array_numeros.length;
        // definir uma variavel sem o var, let, ou const, é definoda automaticamente comno escopo global.
        //entao, se eu colocasse var, let ou const, o alert() fora da função nao identificaria a variavel.
    } EncontrarMedia();

    document.getElementById("resultado").innerHTML = (`A média dos números selecionados é: ${result_media.toFixed(2)}`);
}