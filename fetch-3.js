var img = document.querySelector("img");//selector a img

fetch('superman.png')
    .then(resp => resp.blob() ) //promesa tratada como blob
    .then(imagen => {

        var imgPath = URL.createObjectURL(imagen); //obtiene url de la imagen
        console.log(imgPath);
        img.src= imgPath; //asigna la url al atributo src
        
    });