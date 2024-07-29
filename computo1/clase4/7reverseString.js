import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const ReverseString = () => {
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {
        
        console.log(`Tu cadena INVERTIDA ES: ${cadenaTexto.split("").reduce((acc, char) => char + acc, "")
} `);
        interfaz.close()
        
        

    })

}

ReverseString()