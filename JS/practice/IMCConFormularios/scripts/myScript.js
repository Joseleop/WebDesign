let _imc;
let _value;

function imcCalc() {

    //Tomamos los value del formulario y los asignamos a las variables de _weight y _height
    let _weight = Number(document.getElementById("inputWeight").value);
    let _height = Number(document.getElementById("inputHeight").value);

    //Con el if verificamos que los datos introducidos son (números && son enteros && son mayores que 0) 
    if (!isNaN(_weight) && !isNaN(_height) && Number.isInteger(_weight) && Number.isInteger(_height) && _weight > 0 && _height > 0) {
        //Si todo va bien y está verificado, hacemos la operación del cáculo de IMC -los datos están tomados del formulario
        _imc = _weight / ((_height / 100) * (_height / 100));

        //Creamos el condicional para asignar un estado en la clasificación
        if (_imc < 18.5) {
            _value = "Clasificación: Bajo peso";
        } else if (_imc >= 18.5 && _imc < 25) {
            _value = "Clasificación: Peso normal";
        } else if (_imc >= 25 && _imc < 30) {
            _value = "Clasificación: Sobrepeso";
        } else {
            _value = "Clasificación: Obesidad";
        }

        //Rellenamos el HTML con la variable _height (Directamente la que toma del input)
        document.getElementById("heightText").innerHTML = "Tu altura es " + (_height);
        //Rellenamos el HTML con la variable _weight (Directamente la que toma del input)
        document.getElementById("weightText").innerHTML = "Tu peso es " + (_weight);
        //Borramos los datos del formulario (quedan almacenados en la variable)
        document.getElementById("inputWeight").value = "";
        document.getElementById("inputHeight").value = "";
        //Rellenamos el HTML con el resultado de la operación y el estado en la clasificación -hecha en el if anterior-
        document.getElementById("result").innerHTML = "Tu IMC es " + (_imc.toFixed(2)) + " | " + (_value);
    
    // Si la verificación de los datos no es correcta, pasamos al else y mandamos este alert.
    } else {
        alert("Por favor, rellene el formulario con los datos correctos")
    }

}
