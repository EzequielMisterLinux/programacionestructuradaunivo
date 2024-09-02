import leerlinea from "readline"


const newInterface = leerlinea.createInterface(
    process.stdin,
    process.stdout
)


let Username = "admin"

let password = "1234"


const menuOptions = () => {
    console.log("this are options for system");
    console.log("send money");
    console.log("about account");
}

const validarFuncion = (user, pass) => {

    if (user == Username && password == pass) {
        menuOptions()
        return `welcome to dashboard: ` 
        

    } else {
        interfaceRecursive()
        return "this user or password is invalid: ";
        
    }

}


const interfaceRecursive = () => newInterface.question("please insert your username: ", (user) => {
    newInterface.question("please insert your password: " , (pass) => {
        console.log(validarFuncion(user, pass));
        

    })
})


interfaceRecursive()