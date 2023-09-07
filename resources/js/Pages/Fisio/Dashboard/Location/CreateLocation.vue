<template>
  <Header :title="title" :subtitle="subtitle" />
  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />

  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center">
        <div class="form-group">
          <div class="row">
            <div class="mt-2 card col-12 col-md-8 p-4 border-orange">
              <div class="col-12">
                <label for="search-input">DIRECCIÓN EXACTA</label>
                <input
                  id="search-input"
                  type="text"
                  class="form-control"
                  placeholder="DIRECCIÓN"
                  ref="autocompleteInput"
                />
              </div>
              <div v-if="place" class="row">
                <div class="col-6 col-md-4">
                  <label for="search-input">N°</label>
                  <input
                    id="search-input"
                    v-model="address_number"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div class="col-6 col-md-8">
                  <label for="search-input">LOCALIDAD</label>
                  <input
                    id="search-input"
                    disabled
                    v-model="place.address_components[2].long_name"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                  />
                </div>
              </div>
            </div>
            <div class="mt-2 card col-12 col-md-4">
              <label for="search-input">NOMBRE DE LA UBICACIÓN</label>
              <input
                id="search-input"
                v-model="address_name"
                type="text"
                class="form-control"
                placeholder="Nombre"
              />
            </div>
          </div>
        </div>
        <button
          :disabled="!address_name"
          style="color: white"
          @click="addLocation"
          class="btn bg-orange"
        >
          Agregar Ubicación
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "../../../../Modules/UI/Header.vue";
import Indications from "../../../../Modules/UI/Indications.vue";
import { ref } from "vue";

export default {
  props: [],
  components: {
    Header,
    Indications,
  },
  data() {
    return {
      title: "Agrega Ubicaciones",
      subtitle: "Busca la dirección exacta en Google Maps",
      mainIndication: "Agrega tus ubicaciones más frecuentes",
      subIndication:
        "Elige las zonas dónde quisieras ofrecer tus servicios en un radio de hasta 2.5KM. Ejemplo: Tu domicilio, Centro de trabajo, etc.",
      address: null,
      address_name: null,
      place: null,
      selectedLat: null,
      selectedLng: null,
      address_number: null,
    };
  },
  methods: {
    initAutocomplete() {
      const input = this.$refs.autocompleteInput;

      //Initially Limit to Lima
      const limaBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-12.3553, -77.1908), // southwest corner of boundary
        new google.maps.LatLng(-11.7233, -76.6338) // northeast corner of boundary
      );

      const options = {
        componentRestrictions: { country: "PE" },
        bounds: limaBounds,
        strictBounds: true,
        types: ["geocode"],
      };

      const autocomplete = new google.maps.places.Autocomplete(input, options);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        this.place = place;
        this.selectedAddress = place.formatted_address;
        this.selectedLat = place.geometry.location.lat();
        this.selectedLng = place.geometry.location.lng();
        this.address_number = place.address_components[0].long_name;
      });
    },
    addLocation() {
      axios
        .post(`/fisio/addLocation`, {
          address: this.place.formatted_address,
          address_number: this.address_number,
          name: this.address_name,
          latitude: this.selectedLat,
          longitude: this.selectedLng,
          urbanization: this.place.address_components[2].long_name,
          distric: this.place.address_components[3].long_name,
          city: this.place.address_components[5].long_name,
          postal_code: this.place.address_components[7].long_name,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.initAutocomplete();
  },
};
</script>
<style>
.pac-container {
  /*background-color: #ed6c14 !important;*/
  background-color: #efeeef !important;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  max-height: 300px;
  overflow-y: scroll;
  text-transform: uppercase;
  color: white !important;
}

.pac-container::-webkit-scrollbar {
  display: none;
}

.pac-icon {
  display: none;
  background-color: red; /*Color*/
}
.pac-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pac-item:hover {
  background-color: #f5f5f5;
}
</style>
