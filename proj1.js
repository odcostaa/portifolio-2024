function js_1() {
    var numero_user = parseFloat(prompt("Insira um número"));

    var numero_user = numero_user > 0 ? document.getElementById("resultado").innerHTML = ("O número inserido é positivo!") :
        numero_user < 0 ? document.getElementById("resultado").innerHTML = ("O número inserido é negativo!") : document.getElementById("resultado").innerHTML = ("O número é nulo!");


}
