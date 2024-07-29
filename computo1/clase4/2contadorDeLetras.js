import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const ContadorDeLetras = () => {
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {

        console.log(`su cadena de texto tiene ${cadenaTexto.length} de caracteres`);
        interfaz.close()
        
        

    })

}

ContadorDeLetras()