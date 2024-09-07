/*
5. Implementa una función que verifique si un código de descuento es válido. La función debe aceptar
un código de descuento y devolver una promesa. La promesa debe resolverse con el mensaje "Código
de descuento válido" si el código es "DESCUENTO2024". Si el código es diferente, la promesa debe
ser rechazada con el mensaje "Código de descuento inválido"

*/

import readline from "readline";

const leerLinea =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const interfazRecursiva = () => leerLinea.question("porfavor ingrese su monto a pagar: " , (monto) => {
    leerLinea.question("Porfavor ingrese su codigo de descuento: " , (descuento) => {
        const pagar = parseFloat(monto)

        const verificarDescuento = () => {
            return new Promise((resolve , reject) => {
                console.log("verificando codigo....");
                setTimeout(() => {
                    if (descuento === "DESCUENTO2024") {
                        let total = pagar * 0.80
                        resolve(`su total a pagar con 20% de descuento : ${total}`)
                    }else {
                        reject(`su codigo es invalido por lo tanto su total a pagar es: ${pagar}`)
                    }
                }, 3000);

            })
        }

        verificarDescuento()
            .then((info) => {
                console.log(info);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                interfazRecursiva()
            })
    })
})

interfazRecursiva()