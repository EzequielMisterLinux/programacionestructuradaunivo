import leerlinea from "readline"


const newInterface = leerlinea.createInterface(
    process.stdin,
    process.stdout
)



const mesToStringxD  = () => {

    let fecha = new Date()

    let mes = fecha.getMonth()

    switch (mes+1) {
        case 1:

            console.log("el mes es enero");
            
            break;
        
        case 2: 

            console.log("el mes es febrero");

            break;
        

        case 3:
            
            console.log("el mes es marzo");

            break;
        
        case 4: 

            console.log("el mes es abril");

            break;

        case 5:
            console.log("el mes es mayo");

            break;
        
        case 6:
            console.log("el mes es junio");
            
            
            break;

        case 7:
            console.log("el mes es julio");

            
            break;
        
        case 8: 
            console.log("el mes es agosto");


            break;
        

        case 9:
            console.log("el mes es septiembre");

            break;
        
        case 10: 
            console.log("el mes es octubre");

            break;

        case 11:
            console.log("el mes es noviembre");

            break;
        
        case 12:
            console.log("el mes es diciembre");

            
            
            break;
    

        default:
            break;
    }
}

mesToStringxD()

