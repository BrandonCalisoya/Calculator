//tareas
/*
que los botones ingresen el valor al input

crear funciones para los botones
"/"division donde
"x" multiplicacion done 
"-" resta done 
"+" suma done

"%" modulo done ()falta mejorar

"DEL" que borra el ultimo valor ingresado done

"C" que borra el contenido y lo deja a 0.

"." tiene que llevar el punto para una decimal

"=" debe dar el resultado, al igual que el enter 
- tiene que interactuar con el h3 de arriba , cuando se obtenga resultados tiene que hacerse una copia del resultado del ejercicio anterior
- interaccion puede ser SOLO con los numeros, y cuando se use los signos, no deben aparecer en las pantallas

cada que se presione un boton de signo o se va añadiendo numeros en un array

*/ 
/*
function isANumber(args){
    //tiene que ser un numero
    if(args==="/[^0-9]"){
        console.log("debe ser un numero")
    }
}

//is a empty array?
function isArrayEmpty(args){
    if(args.length ==0){
        console.log("debe tener un valor al menos")
        return true
    }
    return false
}

//calculadora sn switch
function calculator(operation, ...args){
    if(isArrayEmpty(args)) return 0;

    switch (operation) {
        case "add":
            return args.reduce((accumulator, current )=>accumulator + current)
        case "substract":
            return args.reduce((accumulator, current )=>accumulator - current)
        case "multiply":
            return args.reduce((accumulator, current )=>accumulator * current)
        case "divide":
            return args.reduce((accumulator, current )=>{
                if(current === 0) return "no se puede dividir entre 0 lol"

                return accumulator / current})

        case "module":
            //tener en cuenta que no funciona con el array
            return accumulator % current;
        default:
            throw new Error("no aguante tanto poder.")
    }

}
/*

console.log("funciona suma " + calculator("add", 1,2,3,4,5))
console.log("funciona resta " + calculator("substract", 1,2,3,4,5))
console.log("funciona multi " + calculator("multiply", 1,2,3,4,5))
console.log("funciona  div " + calculator("divide", 1,2,3,4,5))
*/


/*
//console.log(deleteLastValue("hola"))

//  * borra el ultimo valor ingresado
function deleteLastValue(string){
    const lenghString = string.length;
    string = string.slice(0,lenghString-1 );
    return string;

    //mejorar agregar correcciones extra.
    //  no puede borrar signos, solo debe ingresarse numeros en strings
    
}
function isHaveADecimal(){
    //para implementarse
}

function deleteAll(string){
    string = "0";
    return string;
}

function result (){
    //when press = bring to user the result final
}


function add (...args){
    return calculator("add",...args)
}
function substract(...args){
    return calculator("substract", ...args)
}
function multiply(...args){
    return calculator("multiply", ...args)
}
function divide(...args){
    return calculator("divide", ...args)
}

*/
/*

parte interaccion DOM

    * los botones tienen que dar numeros done
    *funcionalidad a los signos
    *funcionalidad de los botones C-DEL
    * "." solo debe aceptar 1 en la string (if que diga que si la string ya tiene un punto, no debe aceptar otro...)(no necesariamente tiene que ser un error)
    * cuadro input solo debe aceptar numeros
    * cuadro de arriba debe agregar la operacion hecha en la anterior ejemplo "1+2+3+4+5 = valor final"
                                                                                   nuevo valor ingresado
    * 
*/

let aux;
let firstValue="";
let operation="";
let secondValue="";

let operatorWindow;

let pantallavalores;

let resultx = false;


//arreglo 2
let itsNewOperation= true;
while(!itsNewOperation){


    itsNewOperation = false;
}

const d = document

const numberWindow = d.getElementById("text");
const lastResult = d.getElementById("lastResult");

const calculadorafunciones = d.getElementById("calculator");
calculadorafunciones.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        const tipo = e.target.getAttribute("data-type");
        const valor = e.target.getAttribute("data-value");
        
    

        if(tipo === "number"){
            if(resultx === true){
                numberWindow.textContent = ""
                resultx = false
            }
            
            numberWindow.textContent += valor;
            
        }else if(tipo === "operador"){

            operation = valor;
            firstValue = numberWindow.textContent;
          
            //reset del valor de pantalla
            numberWindow.textContent = "";
            
            
            
            
            
        }else if(tipo === "equal"){
            secondValue = numberWindow.textContent
            numberWindow.textContent = "";

            numberWindow.textContent = operationPrueba(operation, firstValue,secondValue);
            firstValue = "";
            secondValue = "";
            lastResult.textContent= numberWindow.textContent;

            resultx = true;
            /*si quiero hacer una nueva operacion
                necesito primero... el valor principal guardarlo en el window de arriba
                luego.. borrar el window principal para tener una nueva operation
                pero como le hago? caundo vuelva a presionar los numeros... deberian primero dejar los 

            
            */
            
        }else if(tipo === "CE"){

            numberWindow.textContent = deleteLastValue(numberWindow.textContent)
        }else if (tipo === "C"){
            numberWindow.textContent = "";
        }
        

        
    }
})

function operationPrueba (operador, valor1, valor2){
    valor1 =Number(valor1);
    valor2 = Number(valor2)


    if(operador ==="add")return valor1 + valor2;
    if(operador ==="substract")return valor1 - valor2;
    if(operador ==="multiply")return valor1 * valor2;
    if(operador ==="divide"){
        if(valor2 == 0){
            console.log("no se puede divividr entre 0")
        }
        return valor1 / valor2;
    }
        
    if(operador ==="divide")return valor1 % valor2;

}
//en la pantalla tiene que verse el primer valor.. luego agregarse la operacion


// si la operacionn tiene los dos valores
function operationIsReady(){
    if(firstValue !== "" && secondValue !=="" ){
        return true;
    }

}


function deleteLastValue(value){
    value = value.slice(0,-1)
    console.log(value)
    return value;
    
}

/*tarea para la siguiente,
    en la pantalla debe visualizarse la operacion que se realice
        posiblemente con una variable alterna que permite ver la pantalla o poner cada valor con sus variables. y no tocar el textcontent de ese cuadro
*/