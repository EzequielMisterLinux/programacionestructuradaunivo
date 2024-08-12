import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const esMayor = (num1, num2) => {

    if (num1 > num2) {
        console.log(`El numero ${num1} es mayor a ${num2}`);
    }else if(num2 > num1){
        console.log(`EL numero ${num2} es mayor a ${num1}`);
    }else if(num1 == num2 || num2 == num1){
        console.log("ambos numeros son iguales");
    }else{
        console.log("porfavor ingrese datos validos");
    }


}


const llamadaRecursiva = () => interfaz.question("ingrese el primer numero", (num1) => {
    interfaz.question("ingrese el segundo numero", (num2) => {
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        if (isNaN(num1) || isNaN(num2)) {
            console.log("porfavor ingrese numeros validos!!");
            llamadaRecursiva()
        }else{
            console.log(esMayor(n1, n2));
            llamadaRecursiva()
        }
    })
})

llamadaRecursiva()