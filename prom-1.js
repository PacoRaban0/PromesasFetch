function sumarUno( numero, callback ){
    setTimeout(() => {
        callback( numero + 1);
    }, 800);
}

sumarUno(5, nuevoValor => {
    sumarUno(nuevoValor, nuevoValor2 =>{
        sumarUno(nuevoValor2, nuevoValor3=>{
            console.log( nuevoValor3 );
        });
        console.log( nuevoValor2 );
    });
    console.log( nuevoValor );
});
