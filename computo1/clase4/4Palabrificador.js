import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const Palabrificador = () => {
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {
        const regex = "Ezequiel"
        console.log(cadenaTexto.replace(regex, 'Humberto'));
        interfaz.close()
        
        

    })

}

Palabrificador()