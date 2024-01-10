<script setup>
import { onMounted, ref } from "vue";
import LeafletMap from "leaflet";

const latitude = ref("");
const longitude = ref("");
const map = ref();
const mapContainer = ref();

onMounted(() => {
  map.value = LeafletMap.map(mapContainer.value).setView([52.13579860164035, 5.621247267710717], 7);
  LeafletMap.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      map.value.setView([latitude.value, longitude.value], 13);

      LeafletMap.marker([latitude.value, longitude.value],{draggable : true})
          .addTo(map.value)
          .on("dragend",(event)=> {
            console.log(event)
          });
    });
  }
}
</script>

<template>
  <button class="buttonLocationCheck" @click="getLocation()">Start Locatie Check</button>
  <div class="locationData">
    {{ latitude }} | {{ longitude }}
  </div>

  <div class="locationMap" ref="mapContainer"></div>
</template>

<style scoped>

  .buttonLocationCheck {
    font-family: Verdana, sans-serif;
    font-size: 20px;
    margin: 10px;
    border-radius: 20px;
    height: 100px;
    width: 200px;
    box-shadow: 0 2px 10px #000;
    border: none;
    background-color: yellow;
    color: black;
    font-weight: bold;
  }

  .buttonLocationCheck:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px black;
    transition: all 0.1s ease;
  }

  .locationData {
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .locationMap {
    width: 90%;
    height: 50vh;
    border-radius: 30px;
  }

</style>
