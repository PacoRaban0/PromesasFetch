fetch('no-encontrado.html')
    .then(resp => resp.text() )
    .then( html =>{
        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(error =>{ //No se dispara si es un error 400
        console.log('Error en la peticion');
        console.log(error);
    });