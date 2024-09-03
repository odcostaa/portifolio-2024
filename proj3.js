function js_3() {
    var inset_data = parseInt(prompt("Insira um número de 1 a 7"));

    if (inset_data > 7 || inset_data <= 0) {
        alert("Número inválido");
    }

    switch (inset_data) {
        case 1:
            document.getElementById("resultado").innerHTML = ("Domingo");
            break;
        case 2:
            document.getElementById("resultado").innerHTML = ("Segunda-Feira");
            break;
        case 3:
            document.getElementById("resultado").innerHTML = ("Terça-feira");
            break;
        case 4:
            document.getElementById("resultado").innerHTML = ("Quarta-feira");
            break;
        case 5:
            document.getElementById("resultado").innerHTML = ("Quinta-feira");
            break;
        case 6:
            document.getElementById("resultado").innerHTML = ("Sexta-feira");
            break;
        case 7:
            document.getElementById("resultado").innerHTML = ("Sábado");
            break;
    }
}
