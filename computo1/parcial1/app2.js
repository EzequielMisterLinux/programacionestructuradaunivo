import leerlinea from "readline"


const newInterface = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

const convertToFahrenheit = (numF) => {
    let celsius = (numF - 32)*5/2

    return celsius
}



const InterfaceRecursive = () => newInterface.question("please insert your temperature in celsius\n" , (num1) => {
    let temperature = parseInt(num1)

    console.log(`your temperature in fahrenheit is ${convertToFahrenheit(temperature)}`);
    InterfaceRecursive()
})


InterfaceRecursive()