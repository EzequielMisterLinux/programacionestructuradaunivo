/*
6. Crea una función que simule un proceso de compra en línea. La función debe aceptar el monto de la
compra. La promesa debe resolverse con el mensaje "Compra completada por [monto]" si el monto
es mayor a 0. Si el monto es 0 o menor, la promesa debe ser rechazada con el mensaje "Monto
inválido para la compra"
*/


import readline from "readline";

const nuevaInterfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

const interfazRecursiva = () => nuevaInterfaz.question("porfavor ingrese el monto de la compra: ", (monto) => {
    const totalPagar  = parseFloat(monto)

    const verificarMonto =() => {

        return new Promise((resolve, reject) => {
            console.log("verificando monto...");

            setTimeout(() => {
                if (totalPagar === 0 || isNaN(totalPagar)) {

                    reject("Monto invalido porfavor ingrese un monto valido...")
                }else {
                    resolve(`su monto total a pagar es ${totalPagar}`)
                }
            }, 3000);
        })
    }

    verificarMonto()
        .then((data) => {
            console.log(data);

        })
        .catch((err) => {
            console.error(err);
        })

        .finally(() => {
            interfazRecursiva()
        })
})

interfazRecursiva()