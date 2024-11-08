function valorProductos(cantidad, precio){
    if (cantidad < 5){
        resultado = cantidad * precio;
    }
    else if (cantidad > 5 && cantidad <= 10){
        resultado = cantidad * (precio - (precio * 0.05));
    }else if (cantidad > 10 && cantidad <= 20){
        resultado = cantidad * (precio - (precio * 0.1));
    }else if (cantidad > 20) {
        resultado = cantidad * (precio - (precio * 0.20));
    }
    else {
        resultado = 0;
    }
    return resultado;
}

let cantidad = 0;
let precio =2000;
let compra = valorProductos(cantidad,precio);
console.log("El valor de la compra es: " + compra)
