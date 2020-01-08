function sumarUno( numero ){
    var promesa = new Promise( (resolve, reject) =>{//resolve ejecuta bien, reject ejecuta error

        setTimeout(() => {
            resolve( numero + 1 )
        }, 800);

    })

    return promesa; //Se tiene que retornar la promesa
}

//ejecutando funcion
sumarUno(5).then( nuevoNumero => {
    console.log(nuevoNumero);//imprime 6
    return sumarUno( nuevoNumero ); //sirve para obtener la promesa y poder ejecutar el then como parametro que reciba
})
.then (nuevoNumero => {
    console.log(nuevoNumero); //imprime 7
    return sumarUno( nuevoNumero );
})
.then(nuevoNumero =>{
    console.log( nuevoNumero );//imprime 8
});