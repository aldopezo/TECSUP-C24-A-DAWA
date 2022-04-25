const comision = (ventas) => {
    if (ventas < 150) {
        return ("No recibes comision")
    } else if (ventas <= 400) {
        return ("Tu comision es: S/." + ventas*0.1)
    } else {
        return ("Tu comision es: S/." + (50 + ventas*0.09))
    }
};

let ventas = prompt("Ingrese la cantidad de las ventas totales: ");

ventas = parseInt(ventas);

console.log(comision(ventas))