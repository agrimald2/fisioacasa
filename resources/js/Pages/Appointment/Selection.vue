<template>
  <GuestLayout>
    <div class="row no-row center my-4 mb-8">
      <div class="row mb-2">
        <h5 class="text-xl text-center color-white">
          HOLA <span class="font-bold"> {{ patient.name }}!</span> BIENVENIDO A
        </h5>
      </div>
      <div class="row center mb-3">
        <img class="logo-img" src="/img/logo-large.png" alt="" />
      </div>
      <div class="row center no-row" style="width: 90vw">
        <div class="row pre_container center">
          <div class="row center">
            <h5 class="center" style="color: white">¿QUÉ NECESITAS?</h5>
            <div class="row no-row register_container center my-1 py-2">
              <div class="row form-group pt-2 my-0">
                <label for="exampleFormControlSelect1">SELECCIONA TU ESPECIALIDAD</label>
                <div class="d-flex align-items-center">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    v-model="selectedEspecialty"
                  >
                    <option
                      v-for="specialty in especialties"
                      :key="specialty.id"
                      :value="specialty.name"
                    >
                      {{ specialty.name }}
                    </option>
                  </select>
                  <div class="d-flex align-items-center mx-1 bg-blue px-2 py-2 rounded">
                    <i class="fa fa-caret-down ml-2" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row no-row register_container center mb-2">
              <div class="row form-group pt-2 my-0">
                <label for="exampleFormControlSelect1">SELECCIONA TU UBICACIÓN</label>
                <div class="d-flex align-items-center">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>CASA PRINCIPAL - Madre Selva 121</option>
                    <option>CASA MARCELO - Jr. Tasso 469</option>
                    <option>OFICINA SANI - Av. José Galvez Barrenechea 468</option>
                  </select>
                  <div class="d-flex align-items-center mx-1 bg-blue px-2 py-2 rounded">
                    <i class="fa fa-caret-down ml-2" aria-hidden="true"></i>
                  </div>
                </div>

                <!--
                <button class="btn btn-orange mt-1 w-50 mx-auto my-1" id="addOption">
                  Añadir Otra
                </button>
                -->
              </div>
              <div class="row">
                <div class="container row pb-2">
                  <div class="form-group col-6">
                    <label for="dateInput">DÍA</label>
                    <flat-pickr
                      v-model="selectedDate"
                      :config="config"
                      class="form-control"
                      id="date"
                      ref="flatpickr"
                    />
                  </div>
                  <div class="form-group col-6">
                    <label for="hourInput">HORA</label>
                    <select class="form-control" id="hourInput" v-model="selectedHour">
                      <option v-for="hour in hours" :key="hour">{{ hour }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              :disabled="!selectedDate || !selectedEspecialty || !selectedHour"
              class="btn btn-orange mt-1 w-50 mx-auto my-1 hover-orange"
              id="addOption"
              @click="searchFisio"
            >
              ENCONTRAR
            </button>

            <div v-if="loading" class="row mt-4">
              <loader />
            </div>

            <h5 v-if="showList" class="text-center mb-2 mt-1" style="color: white">
              SELECCIONA TU FISIOTERAPEUTA
            </h5>
            <div v-if="showList" class="row no-row register_container center py-2">
              <div class="row px-2 center">
                <div
                  class="card my-2 col-12 col-md-5 mx-md-4"
                  v-for="schedule in schedulesWithFisios"
                  :key="schedule.id"
                >
                  <div class="d-flex">
                    <div class="p-2">
                      <div
                        class="profilePhoto"
                        :style="{
                          'background-image': `url(/img/fisioPhotos/${schedule.fisio.profile_photo_path})`,
                        }"
                      ></div>
                      <h6>{{ schedule.fisio.name }}</h6>
                    </div>
                    <div class="p-2 flex-grow-1">
                      <h4 class="card-title" style="margin-bottom: 0">
                        <strong class="text-xl"
                          >S/{{ schedule.fisio.appointment_price }}</strong
                        >
                      </h4>
                      <p class="card-text">
                        <span class="fa fa-star colored"></span>
                        <span class="fa fa-star colored"></span>
                        <span class="fa fa-star colored"></span>
                        <span class="fa fa-star colored"></span>
                        <span class="fa fa-star"></span>
                      </p>
                      <PaymentModal
                        :appointmentInfo="schedule"
                        :Appdate="selectedDate"
                        :patient="patient"
                      />

                      <br />
                      <a href="#" class="moreInfo">
                        Más Info <i class="fa-solid fa-circle-info"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <a>
                  <i
                    class="center mb-2"
                    style="text-decoration: underline; color: #ed6c14"
                  >
                    Ver más
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<script>
import loader from "../../Modules/UI/Loader.vue";
import axios from "axios";
import GuestLayout from "../../Layouts/GuestLayout.vue";
import FlatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import PaymentModal from "./PaymentModal.vue";

export default {
  props: ["patient", "especialties"],
  data() {
    return {
      loading: false,
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
      ],
      config: {
        enableTime: false,
        //dateFormat: 'Y-m-d',
        //mode: 'week',
        weekNumbers: true,
        locale: Spanish,
        readonly: false,
        minDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      },
      showList: false,
      selectedHour: null,
      selectedDate: null,
      selectedEspecialty: null,
      schedulesWithFisios: null,
    };
  },
  components: {
    GuestLayout,
    FlatPickr,
    PaymentModal,
    loader,
  },
  methods: {
    searchFisio() {
      this.loading = true;
      axios
        .post("/appointment/searchFisio", {
          selectedHour: this.selectedHour,
          selectedDate: this.selectedDate,
          selectedEspecialty: this.selectedEspecialty,
        })
        .then((response) => {
          this.showList = true;
          this.schedulesWithFisios = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.hover-orange:hover{
    border: 2px solid #ed6c14;
}
#addOption {
  padding: 0.5rem 1rem;
}
.left_side {
  height: 77vh;
  background-size: cover;
  background-image: url("../../assets/images/fisioterapeuta.png");
  border-radius: 10px;
}

.pre_container {
  --bs-gutter-x: 0rem !important;
}
body {
  overflow-x: hidden;
}
.logo-img {
  width: 30%;
}
.register_container {
  height: 100%;
  width: 90vh;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding-left: 0px;
}

.no-row {
  --bs-gutter-x: 0rem !important;
}

.profilePhoto {
  width: 100px;
  height: 100px;
  /*border: 1px solid gainsboro;*/
  margin-bottom: 2px;
  border-radius: 5px;
  background-size: cover;
  background-color: #00699e;
}

.moreInfo {
  text-decoration: underline;
  font-size: 0.8rem;
  color: #00699e;
  font-weight: 600;
}

.card-text {
  margin-bottom: 2px;
}

.colored {
  color: #ed6c14;
}
@media (max-width: 721px) {
  .left_side {
    display: none;
  }
  .logo-img {
    width: 70%;
  }
}
</style>
