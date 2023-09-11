function sumar(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos. ");
        return;
    }

    let suma = num1 + num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es : " + suma;
    resultadoElement.classList.add("mostrar")

    if (suma > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("calcular_suma").addEventListener("click", sumar);


/****************************************************************************** */

function resta(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos. ");
        return;
    }

    let resta = num1 - num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La resta es : " + resta;
    resultadoElement.classList.add("mostrar")

    if (resta > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("calcular_resta").addEventListener("click", resta);

/****************************************************************************** */

function multiplicar(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos. ");
        return;
    }

    let multiplicar = num1 * num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La multiplicación es : " + multiplicar;
    resultadoElement.classList.add("mostrar")

    if (multiplicar > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("calcular_multiplicacion").addEventListener("click", multiplicar);

/****************************************************************************** */

function division(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos. ");
        return;
    }

    let division = num1 / num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La división es : " + division;
    resultadoElement.classList.add("mostrar")

    if (division > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("calcular_division").addEventListener("click", division);