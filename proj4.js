function js_4() {
    var i = 0
    var resultado = "";

    for (i = 1; i <= 10; i++) {
        resultado += i;

        if(i < 10){
            resultado += ", "
        }
    }

    document.getElementById("resultado").innerHTML = (`${resultado}`);
}