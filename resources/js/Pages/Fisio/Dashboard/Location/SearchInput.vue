<template>
  <div class="col-12 col-md-6">
    <label for="search-input">DIRECCIÓN DE LA UBICACIÓN</label>
    <input
      id="search-input"
      type="text"
      ref="input"
      class="form-control"
      placeholder="Ingresa una ubicación"
    />
    <input v-model="vm.searchPlace" v-gmaps-searchbox:location="vm" />
    <pre>{{ vm }}</pre>
    <div id="map"></div>

  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  data() {
    return {
      msg: "Hello Vue Maps!",
      vm: {
        searchPlace: "",
        location: {},
      },
    };
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyB8qguqfNNiVO__4S-Vbom6SB8D_cUv1co",
      version: "weekly",
    });

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  },
  props: [],
  components: {},
};
</script>
