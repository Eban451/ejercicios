function proba(numero){
    if (numero > 1 && numero <= 100){
        if (numero > 5 && numero < 15 || numero == 70 || numero == 55){
            console.log("Buen número")
        }
        else{
            console.log("Mal número, escoge otro")
        }
    }
    else{
        console.log("Ingresa un número entre 2 y 100")
    }
}


proba(70);
proba(222);
proba(55);
proba(3);
proba(11);