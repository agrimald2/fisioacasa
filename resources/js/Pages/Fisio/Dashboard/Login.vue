<template>
  <GuestLayout>
    <div class="row">
      <div class="row center mb-3">
        <img src="/img/logo-large.png" alt="" />
      </div>
      <div class="row center no-row">
        <div class="row form_container center">
          <div class="row mt-2">
            <label for="email">EMAIL</label>
            <input
              class="form-control"
              id="email"
              type="tel"
              placeholder="CORREO ELECTRÓNICO"
              aria-label="default input example"
              v-model="email"
            />
          </div>
          <div class="row mt-2">
            <label for="password">CONTRASEÑA</label>
            <input
              class="form-control"
              id="password"
              type="password"
              placeholder="CORREO ELECTRÓNICO"
              aria-label="default input example"
              v-model="password"
            />
          </div>
          <div class="row mt-2 mb-3">
            <button v-if="email && password" class="btn btn-orange mt-3" @click="login()">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script>
import axios from "axios";
import GuestLayout from "../../../Layouts/GuestLayout.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    GuestLayout,
  },
  methods: {
    login() {
      axios
        .post("/fisio/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          window.location.href = "/fisio/dashboard";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.pre_container {
  --bs-gutter-x: 0rem !important;
}
body {
  overflow-x: hidden;
}
img {
  width: 20rem !important;
}

.form_container {
  height: 100%;
  width: auto;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding-left: 0px;
}
</style>
