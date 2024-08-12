import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)
const gradosConvertion = (Fahrenheit) => {


    return (Fahrenheit * 5/9 ) +32
}


const recursion = () => interfaz.question("porfavor ingrese su conversion ", (num1) => {
    if (isNaN(num1)) {
        console.log("porfavor ingrese datos numericos no letras");
        recursion()
    }else{
        console.log(`su resultado es : ${gradosConvertion(num1)}`);
    }

    interfaz.question("porfavor ingrese 1 para hacer otra conversion o 2 para salir ", (op) => {
        if (op ==1) {
            recursion()
        }else if (op==2) {
            console.log("gracias por usar el conversor ");
            interfaz.close()
        }else {
            console.log("porfavor ingrese una opcion valida!!!");
            recursion()
        }
    })
})

recursion()