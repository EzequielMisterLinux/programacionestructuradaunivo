import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const Capitalizador = () => {
    interfaz.question("ingrese su cadena de texto a capitalizar: " , (cadenaTexto) => {

        console.log(`su texto Capitalizado: ${cadenaTexto.charAt(0).toUpperCase()+ cadenaTexto.slice(1)} `);
        interfaz.close()
        
        
    })

}

Capitalizador()