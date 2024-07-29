import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const CountString = () => {
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {
        
        console.log(`Tu cadena de texto tiene ${cadenaTexto.split(' ').length} palabras`);
        interfaz.close()
        
        

    })

}

CountString()