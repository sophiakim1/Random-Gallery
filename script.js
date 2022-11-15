const galleryApp = {};

galleryApp.getPhotos = () => {

    const url = "https://api.unsplash.com/photos/random?client_id=PJOhNeB5oO8fTyN3bQhpVZMuk-dTrqFxSND3SmkyZN0&count=10";

    fetch(url)
        .then((res) => {
            return res.json();
        }).then((jsonData) => {
            galleryApp.displayPhotos(jsonData);
        })
};

galleryApp.displayPhotos = (dataFromApi) => {
    console.log(dataFromApi);

    const ul = document.querySelector('#gallery');

    dataFromApi.forEach((jsonData) => {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = jsonData.urls.small;

        li.appendChild(img);
        ul.appendChild(li);
    })
}

galleryApp.init = () => {
    galleryApp.getPhotos();
};

galleryApp.init();