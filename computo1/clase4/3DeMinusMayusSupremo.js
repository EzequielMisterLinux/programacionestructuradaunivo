import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const Mayusculador = () => {

    interfaz.question("ingrese una opcion 1: transformar cadena 2: cerrar programa", (opcion) =>{
        if (opcion == 1) {
            interfaz.question("ingrese su cadena de texto a transformar a mayuscula: " , (cadenaTexto) => {

                console.log(`su cadena de texto en Mayus es: ${cadenaTexto.toUpperCase()} `);
                Mayusculador()
                
                
        
            })
        }else if(opcion ==2){
            interfaz.close()
        }
    })

}

Mayusculador()