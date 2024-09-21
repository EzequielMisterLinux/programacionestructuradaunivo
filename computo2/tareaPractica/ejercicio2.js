import readline from "readline";

const interfaz = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


const calcularDescuento = (compra) => {
    if (compra > 100) {

        let descuento = compra-(compra*10)/100

        console.log(`felicidades obtuvo un descuento del 10%\nSu total a pagar es : ${descuento}`);
        
    }else if (compra >=50 && compra <=100) {
        let descuento = compra-(compra*5)/100

        console.log(`felicidades obtuvo un descuento del 5%\nSu total a pagar es : ${descuento}`);
    }else if (compra < 50) {
        console.log(`su total a pagar es ${compra}`);
        
    } else {
        console.log("porfavor ingrese numeros validos!!!");
        
    }
}

const repetirPregunta=() => interfaz.question("porfavor ingrese su total de la compra: ",(compra) => {
    let total = parseFloat(compra)
    calcularDescuento(total)
    repetirPregunta()
    
})

repetirPregunta()

