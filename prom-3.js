function sumarUno( numero ){
    var promesa = new Promise( (resolve, reject) =>{//resolve ejecuta bien, reject ejecuta error

        if(numero >= 7){
            reject('El numero es muy alto')
        }
        setTimeout(() => {
            resolve( numero + 1 )
        }, 800);

    })

    return promesa; //Se tiene que retornar la promesa
}

//ejecutando funcion
sumarUno(5)
    //Forma utilizando un return de la respuesta de la promesa
    .then (nuevoNumero => {
        console.log(nuevoNumero); //imprime 6
        return sumarUno( nuevoNumero );
    })
    //Forma en la que nuevoValor toma el valor del retorno automaticamente de la promesa. Sin poner return
    .then( nuevoValor => sumarUno ( nuevoValor ) )
    //El argumento de sumarUno es tomado automaticamente por el el then de la proimesa anterior
    .then ( sumarUno ) //Este es el chido*************
    //Verifica xd
    .then(nuevoNumero =>{
        console.log( nuevoNumero );//imprime 9
    })

    //Se puede manejar un carh por promesa o en general, como esta
    .catch( error => {
        console.log('Error en la promesa');
        console.log(error); //imprime lo que obtuvo del return del reject
    });