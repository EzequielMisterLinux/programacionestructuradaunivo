import readline from "readline";

const interfaz = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


const salarioDelEmpleado = (horasTrabajadas, pagoPorHora) => {
    if (horasTrabajadas > 40) {

        let horasExtras = horasTrabajadas - 40; 
        
        let pagoHorasExtras = horasExtras * (pagoPorHora * 1.5); 
        
        let pagoRegular = 40 * pagoPorHora; 
        
        let resultado = pagoRegular + pagoHorasExtras; 
        
        console.log(`Hola, el salario del empleado es: ${resultado}. Ha trabajado ${horasExtras} horas extras y recibe una bonificación del 50% por cada una!!!`);
    }else if (horasTrabajadas < 40) {
        
        let resultado = horasTrabajadas*pagoPorHora
        console.log(`Hola el salario del empleado es: ${resultado}`)
    } else {
        console.log("porfavor ingrese numeros validos!!!!");
        
    }
}


const repetirPregunta=() => interfaz.question("porfavor ingrese el total de horas trabajadas: ",(horasTrabajadas) => {
    interfaz.question("porfavor ingrese la tasa de pago por hora: ",(pagoPorHora)=> {
        let horas = parseInt(horasTrabajadas)
        let pagoTotal = parseFloat(pagoPorHora)

        salarioDelEmpleado(horas, pagoTotal)
        repetirPregunta()
    })
    
})

repetirPregunta()