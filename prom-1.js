//El callback es una funcion que se recibe como argumento
//Se va a ejeecutar con la llamada a callaback
function sumarUno( numero, callback ){
    if ( numero >= 7 ){
        callback('Número muy alto');
        return;
    }

    setTimeout(() => {
        callback( null, numero + 1);
    }, 800);
}

sumarUno(5,(error, nuevoValor) => {

    if(error){
        console.log(error);
        return;
    }

    sumarUno(nuevoValor,(error, nuevoValor2) =>{

        if(error){
            console.log(error);
            return;
        }

        sumarUno(nuevoValor2,(error, nuevoValor3) =>{

            if(error){
                console.log( error );
                return;
            }

            console.log( nuevoValor3 );//Impresion del ultimo anidamiento
        });
        console.log( nuevoValor2 );
    });
    console.log( nuevoValor );//Impresion del primer anidamiento
});
