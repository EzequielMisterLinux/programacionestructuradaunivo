import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const Sumar = (num1, num2) => {

    if (isNaN(num1)|| isNaN(num2)) {
        console.log("porfavor ingrese datos numericos");
    } else {
        return num1 + num2
    }

}


const resta = (num1, num2) => {
    return num1 - num2
}

const multiplicacion = (num1, num2) => {
    return num1 * num2
}


const division = (num1, num2) => {
    return num1 / num2
}

const Operacion = () => {
    interfaz.question("ingrese su operacion \n1:sumar \n2:restar \n3:multiplicar \n4:dividir\n5:salir\n", (operation) => {
        if (operation == 1) {
            interfaz.question("porfavor ingrese el primer numero: ", (num1) => {

                interfaz.question("porfavor ingrese el segundo numero: ", (num2) => {
                    const n1 = parseFloat(num1)
                    const n2 = parseFloat(num2)
        
                    console.log("su operacion es:" ,Sumar(n1, n2));
                    Operacion()
                })
            })
        
            
        }else if (operation == 2) {
            interfaz.question("porfavor ingrese el primer numero: ", (num1) => {
                interfaz.question("porfavor ingrese el segundo numero: ", (num2) => {
                    const n1 = parseFloat(num1)
                    const n2 = parseFloat(num2)
        
                    console.log("su operacion resta es:" ,resta(n1, n2));
                    Operacion()
                })
            })
        
        }else if (operation == 3) {
         
            interfaz.question("porfavor ingrese el primer numero: ", (num1) => {
                interfaz.question("porfavor ingrese el segundo numero: ", (num2) => {
                    const n1 = parseFloat(num1)
                    const n2 = parseFloat(num2)
        
                    console.log("su operacion multiplicacion es:" ,multiplicacion(n1, n2));
                    Operacion()
                })
            })
            
        }else if (operation == 4){
            interfaz.question("porfavor ingrese el primer numero: ", (num1) => {
                interfaz.question("porfavor ingrese el segundo numero: ", (num2) => {
                    const n1 = parseFloat(num1)
                    const n2 = parseFloat(num2)
        
                    console.log("su operacion division es:" ,division(n1, n2));
                    Operacion()
                })
            })
        }else if (operation == 5 ){
            console.log("\ngracias por usar la calculadora" );
            interfaz.close()
        }else{
            console.log("porfavor ingrese un valor valido\n");
            Operacion()
        }
    })
}

Operacion()