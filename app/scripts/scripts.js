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

const d = document

const parrafo = d.getElementById("text");


const calculadorafunciones = d.getElementById("calculator");
calculadorafunciones.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        const tipo = e.target.getAttribute("data-type");
        const valor = e.target.getAttribute("data-value");
            parrafo.textContent += valor;
        //console.log(tipo + valor);
        if(e.target.getAttribute === "equal"){
            calculator()
        }
    }
})
//problema

