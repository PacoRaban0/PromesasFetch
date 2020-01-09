fetch('https://reqres.in/api/users')//Respuesta puede ser cualquier cosa
//Dependera el tratamiento a aplicar
    .then(resp =>{
        resp.json().then(console.log); 
    });