import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const NewUser = () => {
    interfaz.question("whats is your name: " , (name) => {
        interfaz.question("whats is your middlename: ", (middlename) => {
            interfaz.question("whats is your age: ", (age) => {
                if (age >= 18) {
                    console.log(`your fullname is : ${name} ${middlename} your age is ${age}`)
                    console.log("youre age is hight")
                    return NewUser()
                    
                }else{
                    console.log(`your fullname is : ${name} ${middlename} your age is ${age}`)
                    console.log("you are age is low");
                    
                    return NewUser()
                }
                
            })
        })
    })

}

NewUser()