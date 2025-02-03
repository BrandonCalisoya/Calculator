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

let firstValue;
let operation;
let secondValue;

let pantallavalores;

let resultx;

const d = document

const parrafo = d.getElementById("text");


const calculadorafunciones = d.getElementById("calculator");
calculadorafunciones.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        const tipo = e.target.getAttribute("data-type");
        const valor = e.target.getAttribute("data-value");
        
        if(tipo == "operador" ){
            firstValue = parrafo.textContent
            console.log(typeof firstValue);
        }else{
            parrafo.textContent += valor;

        }

        if (e.target.getAttribute === "equal"){
            //se suman ambos valores
        }
        //console.log(tipo + valor);
        if(tipo == "equal"){
            console.log("funciona el equal")
        }
    }
})
//problema

console.log(firstValue)

//en la pantalla tiene que verse el primer valor.. luego agregarse la operacion


// si la operacionn tiene los dos valores
function operationIsReady(){
    if(firstValue !== "" && secondValue !=="" ){
        return true;
    }

}

//la calculadora debe hacer lo siguiente, primero que nada... debe funcionar con 2 valores
/*una while que tenga la condicion de si la operacion esta lista.. es decir... 
debe tener 2 valores y su operador..

cuando se presiones equal.. ambos interaccionan..

aun no pondremos la funcionalidad para que actue con mas valores.. en caso de que se tenga que usar eval() se puede emplear
pero la idea es no usarlo, porque facilita el trabajo.. solo necesito practicar la logica de las cosas.

luego podemos usar un sistema de arrays para que ingresen varios valores
[valor1, operador(agregar un identifcador),valor2, operador(identificador), valor3(identificador).....]
los identificadores daran la prioridad para hacer el valor anterior y el valor siguiente

por ejemplo..

idenfificador de mayor prioridad == se hace mas antes que los demas.. como () o X (en este caso, como no hay parentesis, no usaremos logica para parentesis,
en caso de que querramos hacer una calculadora cientifica.. puede ser)*/



