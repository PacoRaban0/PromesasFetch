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

sumarLento(5).then(console.log);
sumarRapido(10).then(console.log); //Se ejecuta mas rapido por 300ms de timeout. No importa que este despues