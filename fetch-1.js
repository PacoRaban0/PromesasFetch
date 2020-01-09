fetch('https://reqres.in/api/users')//Respuesta puede ser cualquier cosa
//Dependera el tratamiento a aplicar
    .then(resp =>resp.json())
    .then(respObj=>{
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    });

//Usando cross domain
//Para que funcione necesito extension para habilitar corss domain
fetch('https://www.wikipedia.org')
    .then(resp=>resp.text()) //Tratamiento a la respuesta 
    .then(html => {
        console.log(html);
    });