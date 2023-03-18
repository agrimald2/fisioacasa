<template>
  <Header :title="title" :subtitle="subtitle" />

  <div class="col-12 card">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body row">
        <div
          v-for="(location, index) in locations"
          :key="index"
          class="col-12 col-md-3 margin-center"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="btn bg-orange">
            {{ location.name }}
          </div>
          <div @click="deleteLocation(location.id)" class="btn delete_icon">
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "../../../../Modules/UI/Header.vue";

export default {
  props: ["locations"],
  components: {
    Header,
  },
  data() {
    return {
      title: "Ver Ubicaciones",
      subtitle: "Puedes ELIMINAR una ubicación haciendo CLICK en ella",
    };
  },
  methods: {
    deleteLocation(id) {
      axios
        .post(`/fisio/deleteLocation/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.delete_icon{
    margin-bottom: 15px;
    margin-left: 10px;
    padding: 10px;
    font-size: 12px;
    background-color: #00699e;
    color: white;
    border-radius: 5px;
}
</style>
