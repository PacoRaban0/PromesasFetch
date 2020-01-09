fetch('https://reqres.in/api/users/1')
    .then(resp => {
        //Se clona la respuesta por que 
        //una promesa no puede ser ñeida dos veces
        resp.clone().json()
            .then(console.log);
        resp.json()
            .then(console.log);
    });