fetch('https://reqres.in/api/users/1000')
    .then(resp => {
        // //Se clona la respuesta por que 
        // //una promesa no puede ser leida dos veces
        // resp.clone().json()
        //     .then(console.log);
        // resp.json()
        //     .then(console.log);

        //Verifiva que la propidad ok de las respuesta haya sido buena
        //Esto pasa cuando si hay respuesta pero es error 400
        //Se hace esto por qeu el error no va a catch
        if( resp.ok ){
            return resp.json();
        }else{
            //los objetos error se crean para lanzarlos con throw
            //Lanza una excepcion throw
            //crea un error 
            throw new Error('No existe el usuario 1000');
        }
    })
    .then( console.log )
    .catch(error =>{
        console.log('Error en la peticion');
        console.log(error);
    });