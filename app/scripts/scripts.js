//tareas
/*
que los botones ingresen el valor al input

crear funciones para los botones
"/"division
"x" multiplicacion
"-" resta
"+" suma

"%" modulo

"DEL" que borra el ultimo valor ingresado

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
function isArrayEmpty(args){
    if(args.length ==0){
        console.log("debe tener un valor al menos")
        return true
    }
    return false
}


function calculator(operation, ...args){
    if(isArrayEmpty(args)) return 0;

    return args.reduce((accumulator, current )=>{
        if(operation ==="add"){
            return accumulator+ current;
        }if (operation === "substract") {
            return accumulator - current;
        } else {
            throw new Error("no soporté xdddd")
        }
    })
}

function add (...args){
    return calculator("add",...args)
}
function substract(...args){
    return calculator("susbtract", ...args)
}
function substract(...args){
    return calculator("multiply", ...args)
}
function substract(...args){
    return calculator("divide", ...args)
}