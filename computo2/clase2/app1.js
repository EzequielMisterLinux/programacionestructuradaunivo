import readline from "readline";


const leerLinea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const db = []


const questionRecursive = () => leerLinea.question("please insert price product ", (num1) => {
    leerLinea.question("please insert your name" , (name) => {

        const n1 = parseFloat(num1)
            
            if (n1 >= 10) {
                
                let discount = 0.10
            
                const newPrice = n1-(n1*discount)
    
                console.log(`Hi !! ${name} your total is ${newPrice}`);
                
                const recursiveNewQuestion =() => leerLinea.question("desea hacer otra compra\ningrese 1 para si y 2 para no " ,(opcion) => {
                    const op = parseFloat(opcion)
                    if (op == 1) {
                        questionRecursive()
                    }else if(op==2){
                        console.log("gracias por usar este programa ");
                        
                        leerLinea.close()
                    }else{
                        console.log("porfavor ingrese una opcion valida ");
                        recursiveNewQuestion()
                    
                        
                    }
                })
                recursiveNewQuestion()
    
            
            }else if (isNaN(n1)) {
                    console.log("please insert numbers ");
        
                    questionRecursive()
            }else{

        }
   
    })

})

questionRecursive()
