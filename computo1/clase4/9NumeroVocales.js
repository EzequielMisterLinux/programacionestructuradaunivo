import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const NumeroVocales = () => {
    interfaz.question("ingrese su cadena de texto a contarle Vocales: " , (cadenaTexto) => {

        console.log(`su total de vocales: ${cadenaTexto.match(/[aeiou]/gi).length}` );
        interfaz.close()
        
        
    })

}

NumeroVocales()