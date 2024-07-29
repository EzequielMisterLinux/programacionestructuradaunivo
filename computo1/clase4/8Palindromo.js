import leerlinea from "readline"

const interfaz = leerlinea.createInterface(
    process.stdin,
    process.stdout
)

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return console.log("tu palabra no es palindroma");
            ;
        }
        j--;
    }
    return console.log("tu palabra si es palindroma");
    ;
}

const Palindroverificador = () => {
    
    interfaz.question("ingrese su cadena de texto: " , (cadenaTexto) => {
        
        isPalindrome(cadenaTexto);
        interfaz.close()
        
        

    })

}

Palindroverificador()