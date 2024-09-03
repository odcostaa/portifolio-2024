function js_6() {
    const number = 6;
    var user_number = 0;


    user_number = parseInt(prompt("Insira um número de 1 a 10"));

    if (user_number > 10 || user_number <= 0) {
        document.getElementById("resultado").innerHTML = ("Número inválido. Digite um número de 1 a 10");
    } else if (user_number != 6) {
        document.getElementById("resultado").innerHTML = (`Número incorreto! Tente novamente.`);
    }

    if (user_number == 6) {
        document.getElementById("resultado").innerHTML = ("Parabéns! Você acertou o número!");
    }




}