/*

3. Implementa una función que simule el envío de un correo electrónico. La función debe aceptar una
dirección de correo electrónico como parámetro y devolver una promesa que se resuelve con el
mensaje "Correo enviado a [dirección]" si se proporciona una dirección. Si no se proporciona una
dirección, la promesa debe ser rechazada con el mensaje "Dirección de correo no proporcionada".
Simula un tiempo de envío de 2 segundos.

*/

import readline from "readline";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const recursiveInterfaz =() =>interfaz.question("Por favor ingrese el correo electrónico del receptor: ", (mail) => {


    const enviarCorreo = (email) => {
        return new Promise((resolve, reject) => {
            console.log("Enviando correo...");
            setTimeout(() => {
                if (!email) {
                    reject("Dirección de correo no proporcionada");
                    
                } else {
                    resolve(`Correo enviado a ${email}`);
                    
                }
            }, 2000); 
        });
    };


    enviarCorreo(mail)
        .then((mensaje) => {
            console.log(mensaje);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            recursiveInterfaz()
        });
});

recursiveInterfaz()