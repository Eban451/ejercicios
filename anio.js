function calcBisiesto(anio){
    if (anio > 0){
        if (anio % 4 == 0 && anio % 100 > 0 || anio % 400 == 0){
            console.log(anio + " Es un año bisiesto");
        }
        else {
            console.log(anio + " No es un año bisiesto");
        }
    }
    else{
        console.log("Ingrese un año válido");
    }
};

calcBisiesto(4);
calcBisiesto(1234);
calcBisiesto(543);
calcBisiesto(2000);
