<template>
  <div class="col-12 col-md-12">
    <label class="location_label" for="search-input"
      >Dirección <span class="examples">(Agrega Número de Calle)</span></label
    >
    <input
      id="search-input"
      type="text"
      class="form-control"
      placeholder="Calle fisioacasa 123"
      ref="autocompleteSearch"
    />
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
  data() {
    return {
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
      const input = this.$refs.autocompleteSearch;

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
  },
  mounted() {
    this.initAutocomplete();
  },
};
</script>
