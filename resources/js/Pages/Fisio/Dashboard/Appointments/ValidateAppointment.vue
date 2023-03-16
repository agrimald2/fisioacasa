<template>
  <div>
    <div class="row">
      <h6>Scanea el código QR de tu paciente</h6>
    </div>
    <div class="row">
      <h1>
        <i class="fa-solid fa-camera"></i>
      </h1>
    </div>
    <div class="mt-4">
      <h6>Ó</h6>
      <form @submit.prevent="validateCode">
        <label for="code">INGRESO MANUAL</label>
        <input
          id="search-input"
          v-model="code"
          type="tel"
          class="form-control"
          placeholder="Ingresa aquí el código de cita"
        />
        <button class="btn bg-orange mt-2" type="submit" @click="validateAppointment()">
          Validar Cita
        </button>
        <p class="color-orange" v-if="validatedCode">Código Incorrecto</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["appointment"],
  data() {
    return {
      code: "",
      appointment: this.appointment,
      validatedCode: false,
    };
  },
  methods: {
    validateAppointment() {
      axios
        .post(`/fisio/validateAppointment`, {
          code: this.code,
          appointment_id: this.appointment.id,
        })
        .then((response) => {
          if (!response.data) {
            this.validatedCode = true;
          } else {
            this.validatedCode = false;
            this.$emit("validateAppointment", response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  setup() {},
};
</script>

<style>
#preview {
  background: 1px solid black;
  width: 100%;
  height: 100%;
}
</style>
