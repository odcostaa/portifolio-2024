function js_2() {
    var idade_usuario = parseFloat(prompt("Insira sua idade"));

    var idade_usuario = idade_usuario < 0 ? document.getElementById("resultado").innerHTML = ("Idade incorrespondente com a realidade, entre ao mundo antes de fazer o teste!") :
        idade_usuario <= 12 ? document.getElementById("resultado").innerHTML = ("Você é uma criança.") :
            idade_usuario < 18 ? document.getElementById("resultado").innerHTML = ("Você é adolescente.") :
                idade_usuario <= 64 ? document.getElementById("resultado").innerHTML = ("Você é adulto.") :
                    idade_usuario >= 65 && idade_usuario < 121 ? document.getElementById("resultado").innerHTML = ("Você ta velho.") :
                        document.getElementById("resultado").innerHTML = ("Idade incorrespondente com a realidade, por favor, reviva e faça novamente!");
}