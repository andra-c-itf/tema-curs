let crew= {
    data: {
        membersPhoto: []
    },
    
    init: function () {
        axios
        .get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
        
        crew.data.membersPhoto = response.data;
        crew.getPhoto();
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    },

    getPhoto: function () {
        let photoDiv = document.querySelector('#photo')
        for (let i = 0; i < crew.data.membersPhoto.length; i++) {

            let photoSpan = document.createElement('span');

            let img = document.createElement('img')
            let memberPhoto = crew.data.membersPhoto[i].image;
            img.setAttribute('src', memberPhoto);
            img.style.height = '300px';
            img.style.width = '300px';
            img.style.objectFit = 'scale-down';
    
            photoSpan.appendChild(img);
            photoDiv.appendChild(photoSpan);
        }
    }
}

crew.init();

var map = L.map('map').setView([45.9432, 24.9668], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);