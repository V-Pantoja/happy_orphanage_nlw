// create map
const map = L.map("mapid").setView([-22.7605206,-47.4155656], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
   .addTo(map);

// create icon
const icon = L.icon({
   iconUrl: "./public/imagens/map-marker.svg",
   iconSize: [58,68],
   iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;


   //remove icon
   marker && map.removeLayer(marker)

   // add icon layer
   marker = L.marker([lat, lng], { icon })
   .addTo(map)
})

// adicionar o campo de fotos
function addPhotoField() {
   // pegar o container de fotos #images
   const container = document.querySelector('#images')
   // pegar o container para duplicar .new-upload
   const fieldsContainer = document.querySelectorAll('.new-image')
   // realizar o clone da ultima imagem adicionada
   const newfieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
   // adicionar o clone ao container de #images
   container.appendChild(newfieldContainer)
}

