import readline from "readline";

const interfaz = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


const aplicarDescuento = (nombreCliente, precioProducto) => {
    let descuento = 0;
    let total = precioProducto;
    let letraInicial = nombreCliente.charAt(0).toUpperCase(); 

    
    if (letraInicial === 'A') {
        descuento = 0.20;
    } else if (letraInicial === 'J') {
        descuento = 0.15; 
    } else if (letraInicial === 'C') {
        descuento = 0.10;
    }

    
    if (descuento > 0) {
        let montoDescuento = precioProducto * descuento;
        total = precioProducto - montoDescuento;
        console.log(`El cliente ${nombreCliente} tiene un descuento del ${descuento * 100}%. El total a pagar es: ${total}`);
    } else if (descuento <= 0) {
        console.log(`El cliente ${nombreCliente} no tiene descuento. El total a pagar es: ${total}`);
    }else{
        console.log("porfavor ingrese datos validos!!!");
        
    }
}

const repetirPregunta=() => interfaz.question("porfavor ingrese el nombre del usuario: ",(nombre) => {
    interfaz.question("porfavor ingrese total a pagar: ",(pago)=> {
        let name = nombre
        let pagoTotal = parseFloat(pago)
        if (isNaN(pagoTotal)) {
            console.log("porfavor ingrese numeros validos!!!");
            repetirPregunta()
        }else{
         
            aplicarDescuento(name, pagoTotal)
            repetirPregunta()
        }

    })
    
})

repetirPregunta()


