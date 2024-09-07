/*
1. Crea una promesa que verifique si una variable llamada número es igual a 5. Si es así, la promesa
debe resolverse con el mensaje "El número es 5". Si no es igual a 5, la promesa debe ser rechazada
con el mensaje "El número no es 5".

*/

const verificarVariable = () => {

    return new Promise((resolve, reject)=> {

        let num = 4

        if (num === 5) {
            
            resolve("el numero es igual a 5 ")
        }else{
            reject("el numero no es igual a 5")
        }
    })
}

verificarVariable()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })