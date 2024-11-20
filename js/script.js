let option;
const invoice = [];
let optionMenu;
let i=0;
let count;

function menu(){
    do{
        optionMenu = parseInt(prompt("Ingresa la opcion que deseas comer:\n1. Hamburguesa Americana \n2. Pizza \n3. Pollo Frito\n0. Salir"));
        switch(optionMenu){
            case 1:
                invoice[i]= "Hamburguesa Americana"
                i++
                break;
            case 2:
                invoice[i]= "Pizza"
                i++
                break
            case 3:
                invoice[i]= "Pollo Frito"
                i++
                break
            case 0:
                alert("Hasta luego")
                break
            default:
                alert("Ingresa un valor correcto")
        }
    }while(optionMenu != 0);
    return i;
}

do{
    option = parseInt(prompt("Bienvenido a FastFood\n1.Comprar \n0.Salir"));
    if(option == 1){
        count = menu();
        console.log("Usted Comio:")
        for(i=0 ;i < count; i++ ){
            console.log(invoice[i]);
        }
    }
    else if(option == 0){
        alert("Gracias por visitarnos hasta luego");
    }
    else{
        alert("Ingresa un valor valido");
    }
}while(option !== 0);

