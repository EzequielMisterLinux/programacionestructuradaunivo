import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const SubCadena = () => {
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {
        
        console.log(cadenaTexto.substring(0, 4));
        interfaz.close()
        
        

    })

}

SubCadena()