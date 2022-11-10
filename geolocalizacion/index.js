let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5085300, lng:  -0.1257400  },
    zoom: 4,
  });
  const london = new google.maps.Marker({
    position: { lat: 51.5085300, lng: -0.1257400 },
    map,
    title: "Posicion inicial"
  })
  const ibiza = new google.maps.Marker({
    position: { lat: 38.9806800, lng: 1.3036200 },
    map,
    title: "Segunda posicion"
  })
  const lasVegas = new google.maps.Marker({
    position: { lat: 36.17497, lng: -115.13722},
    map,
    title: "Tercera Posicion"
  })
}
