function sumarLento( numero ) {
    return new Promise (function(resolve, reject){
       setTimeout(() => {
           resolve( numero + 1);
       }, 800);
    });
}

//Usando ES6 funciones flecha
let sumarRapido = numero =>{
    return  new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( numero + 1 );
        }, 300);
    });
}

function returnTrue(){
    return true;
}

//Arreglo de acualquier cosa recibida por promise all
let cosas=[sumarLento(5), sumarRapido(10), returnTrue(), 'hola mundo'];

//Si una promesa falla, todas fallan. SOLO PROMESAS. Todas se muestran a la vez
Promise.all( cosas ) //Se meustran segun fueron declaradas
    .then(console.log)
    .catch(console.log);