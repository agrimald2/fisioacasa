<template>
  <Header :title="title" :subtitle="subtitle" />
  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />

  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center">
        <div class="form-group">
          <div class="row">
            <div class="col-12 col-md-6">
              <label for="search-input">DIRECCIÓN EXACTA</label>
              <input
                id="search-input"
                v-model="address"
                type="text"
                class="form-control"
                placeholder="Nombre"
              />
            </div>
            <div class="col-12 col-md-6">
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
          :disabled="!address_name || !address"
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
    };
  },
  methods: {
    addLocation() {
      axios
        .post(`/fisio/addLocation`, {
          address: this.address,
          address_name: this.address_name,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {},
};
</script>
