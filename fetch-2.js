//Fetch
//POST


let usuario ={
    nombre: 'Paco',
    edad: 32
}

//liga peticion, segundo argumento propiedades fetch
fetch('https://reqres.in/api', {
    method: 'POST', //peticion
    body: JSON.stringify(usuario), //que queremos mandar (Json en forma de string)
    headers:{ //Tipo de data como se esta enviando
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json() )
.then(console.log)
.catch(error => { //Capturo el error y lo muestro
    console.log('Error en la peticion');
    console.log(error);
});