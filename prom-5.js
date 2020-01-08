function sumarLento( numero ) {
    return new Promise (function(resolve, reject){
       setTimeout(() => {
           reject( numero + 1);
       }, 800);
    });
}

//Usando ES6 funciones flecha
let sumarRapido = numero =>{
    return  new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( numero + 1 );
        }, 1000);
    });
}

//Promise race

//Compiten por saber quien es la que responda primero. Solo una resp y si ambas al mismo tiempo, elige la de la izquierda
//Si la primera promesa en acabar da error, cancela todos los procesos
Promise.race( [ sumarLento(5), sumarRapido(10)] )
    .then (
        respuesta => {
            console.log(respuesta);
        }
    )
    .catch(console.log);