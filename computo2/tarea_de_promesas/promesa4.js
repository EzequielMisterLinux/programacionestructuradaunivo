/*

4. Desarrolla una función que verifique si hay suficiente stock de un producto en una tienda. La función
debe aceptar la cantidad solicitada. La promesa debe resolverse con el mensaje "Stock suficiente
para [cantidad]" si la cantidad solicitada es menor o igual a 100. Si la cantidad solicitada es mayor a
100, la promesa debe ser rechazada con el mensaje "Stock insuficiente".

*/



const verificarStock = () => {

    return new Promise((resolve, reject) => {
        let stock = 99

        console.log("verificando stock");

        setTimeout(() => {
            if (stock < 100) {
                reject("stock insuficiente en el inventario")
            } else {
                resolve("stock suficiente en el inventario")
            }
        }, 3000);
    })
}


verificarStock()
    .then((verificacion) => {
        console.log(verificacion);
    })
    .catch((err) => {
        console.error(err);
    })