/*
2. Desarrolla una función que valide si una persona tiene la edad suficiente para acceder a cierto
contenido. La función debe aceptar una edad y devolver una promesa que se resuelve con el mensaje
"Edad válida para acceder al contenido" si la edad es 18 o mayor. Si la edad es menor de 18, la
promesa debe ser rechazada con el mensaje "Edad insuficiente para acceder al contenido

*/


const validarEdad = () => {
    return new Promise((resolve, reject) => {

        let edad = 18

        console.log("esperando validacion");
        setTimeout(() => {

            if (edad >= 18) {
            
                resolve("eres mayor de edad puedes acceder al contenido oculto")
            }
            else{
                reject("no eres mayor de edad no puedes acceder al contenido oculto")
            }
        }, 3000);

    })
}


validarEdad()
    .then((dato) => {
        console.log(dato);
    })
    .catch((err) => {
        console.error(err);
    })
