import readline from "readline";

const newInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


const nuevaPreguntaRecursiva = () => newInterface.question("porfavor ingrese la primer nota " ,(nota)=> {

    let letra;

    


    const n =parseFloat(nota)

    if (n> 100 || n < 0) {
        console.log("numero fuera rango ");
        nuevaPreguntaRecursiva()
    }

    else if (n == 100 || n >= 90) {
        
        letra = "A"
        console.log(`tu nota es ${letra}`)
        nuevaPreguntaRecursiva()

    }else if(n == 80 || n < 90){

        letra = "B"
        console.log(`tu nota es ${letra}`)
        nuevaPreguntaRecursiva()

    }else if(n == 60 || n < 80){
        letra = "C"
        console.log(`tu nota es ${letra}`)
        nuevaPreguntaRecursiva()
    
    }else if(n < 60){
        letra = "F"
        console.log(`tu nota es ${letra}`)
        nuevaPreguntaRecursiva()
    
    }else {
        console.log("porfavor ingrese numeros xd");
        nuevaPreguntaRecursiva()
    }
    
    
})

nuevaPreguntaRecursiva()