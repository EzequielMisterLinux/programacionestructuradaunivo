import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,

    process.stdout
)


interfaz.question("whats is your age", (asw)=> {
    console.log("lol", asw);
    
})