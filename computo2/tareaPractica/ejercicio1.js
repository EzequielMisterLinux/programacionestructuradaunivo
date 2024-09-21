import readline from "readline";

const interfaz = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

const verificarEdad = (edad) => {

    if (edad < 13) {
        console.log(`Hola tienes ${edad} de edad y eres menor de edad`);
        
    }else if (edad >= 13 && edad <18 ) {
        console.log(`Hola tienes ${edad} de edad y eres adolescente`);
        
    }else if (edad >= 18 && edad <65 ) {
        console.log(`Hola tienes ${edad} de edad y eres adulto`);
        
    }else if (edad >= 65 ) {
        console.log(`Hola tienes ${edad} de edad y eres adulto mayor`);
        
    } 
    else {
        console.log("porfavor ingrese numeros no letras!!!");
        
    }


}


const repetirPregunta =() =>interfaz.question("Hola porfavor ingrese su edad: ",(num) => {
    let edad = parseInt(num)

    verificarEdad(edad)
    repetirPregunta()
})

repetirPregunta()