import readline from "readline";

const interfaz = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


const aplicarDescuento = (primerApellido, segundoApellido, precioProducto) => {
    let descuento = 0;
    let total = precioProducto;
    let ultimaLetra = segundoApellido.slice(-1).toUpperCase();


    
    if (ultimaLetra === 'S') {
        descuento = 0.20;
    } else if (ultimaLetra === 'A') {
        descuento = 0.15; 
    } else if (ultimaLetra === 'O') {
        descuento = 0.10;
    }

    
    if (descuento > 0) {
        let montoDescuento = precioProducto * descuento;
        total = precioProducto - montoDescuento;
        console.log(`El cliente ${primerApellido} ${segundoApellido} tiene un descuento del ${descuento * 100}%. El total a pagar es: ${total}`);
    } else if (descuento <= 0) {
        console.log(`El cliente ${primerApellido} ${segundoApellido} no tiene descuento. El total a pagar es: ${total}`);
    }else{
        console.log("porfavor ingrese datos validos!!!");
        
    }
}

const repetirPregunta=() => interfaz.question("porfavor ingrese el primer apellido del usuario: ",(primero) => {
    interfaz.question("porfavor ingrese el segundo apellido del usuario: ", (segundo)=> {
        interfaz.question("porfavor ingrese total a pagar: ",(pago)=> {
            let primerApellido = primero
            let segundoApellido = segundo
            let pagoTotal = parseFloat(pago)
            if (isNaN(pagoTotal)) {
                console.log("porfavor ingrese numeros validos!!!");
                repetirPregunta()
            }else{
             
                aplicarDescuento(primerApellido, segundoApellido, pagoTotal)
                repetirPregunta()
            }
    
        })
    })
    
})

repetirPregunta()


