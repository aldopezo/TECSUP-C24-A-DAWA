const buscarMayor = (numero1, numero2, numero3) => {
    if (numero1 == numero2 && numero1 == numero3) {
        return("Los numeros ingresados son iguales: " + numero1)
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                return("El numero mayor es: " + numero1)
            } 
        } else if (numero2 > numero3) {
            return("El numero mayor es: " + numero2)
        } else {
            return("El numero mayor es: " + numero3)
        }
    }
};

let numero1 = prompt("Ingrese un numero: ");
let numero2 = prompt("Ingrese un segundo numero: ");
let numero3 = prompt("Ingrese un tercer numero: ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

console.log(buscarMayor(numero1, numero2, numero3))