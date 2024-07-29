import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const Mayusculador = () => {
    interfaz.question("ingrese su cadena de texto a transformar a mayuscula: " , (cadenaTexto) => {

        console.log(`su cadena de texto en Mayus es: ${cadenaTexto.toUpperCase()} `);
        interfaz.close()
        
        

    })

}

Mayusculador()