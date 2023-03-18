<template>
  <Header :title="title" :subtitle="subtitle" />
  <Indications :mainIndication="mainIndication" :subIndication="subIndication" />
  <div class="col-12 col-md-8">
    <div class="card mb-2 mb-xl-0">
      <div class="card-body text-center">
        <div class="row">
          <div class="col-12">
            <div class="row center">
              <label class="">UBICACIÓN</label>
              <div class="col-12">
                <select
                  id="distric"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="location"
                >
                  <option selected disabled>Elige una ubicación</option>
                  <option
                    v-for="(location, index) in locations"
                    :key="index"
                    :value="location.id"
                  >
                    {{ location.name }}
                  </option>
                </select>
              </div>
              <div class="row">
                <label class="mt-2">DÍAS DE LA SEMANA</label>
                <div
                  class="col-12"
                  style="text-align: center; display: flex; justify-content: center"
                >
                  <div class="row center" style="margin-left: 1.5rem">
                    <div
                      class="col-4 center"
                      v-for="(day, index) in weekdays"
                      :key="index"
                    >
                      <div class="row">
                        <label class="toggler-wrapper style-7 days_label">
                          <input
                            type="checkbox"
                            v-model="selectedWeekdays"
                            :value="index"
                            @change="onChange"
                          />
                          <div class="toggler-slider mb-3">
                            <div class="toggler-knob"></div>
                          </div>
                          <div
                            class="row mt-4 text-center"
                            style="text-transform: uppercase"
                          >
                            {{ day }}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 mt-4">
                <label class="mt-2"
                  ><i class="fa-solid fa-clock" style="color: #00699e"></i> INICIO</label
                >
                <div
                  class="col-12 mt-1"
                  style="text-align: center; display: flex; justify-content: center"
                >
                  <div class="row center">
                    <select id="start" class="form-select" v-model="startTime">
                      <option v-for="hour in hours" :value="hour" :key="hour">
                        {{ hour }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 mt-4">
                <label class="mt-2"
                  ><i class="fa-solid fa-clock" style="color: #00699e"></i> FIN</label
                >
                <div
                  class="col-12 mt-1"
                  style="text-align: center; display: flex; justify-content: center"
                >
                  <div class="row center">
                    <select id="end" class="form-select" v-model="endTime">
                      >
                      <option v-for="hour in hours" :value="hour" :key="hour">
                        {{ hour }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <button
                  :disabled="!endTime || !startTime || !location || !selectedWeekdays"
                  style="color: white"
                  @click="createSchedules"
                  class="btn bg-orange"
                >
                  Añadir Bloques
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../Modules/UI/Header.vue";
import Indications from "../../../../Modules/UI/Indications.vue";
import axios from "axios";

export default {
  props: ["locations"],
  components: {
    Header,
    Indications,
  },
  data() {
    return {
      title: "Crea tu Horario",
      subtitle: "Por Ubicación - Día - Hora",
      mainIndication:
        "Por favor elige tus bloques disponibles en la semana, por día, hora de inicio y hora de finalización.",
      subIndication: "Puedes agregar distintos horarios en distintas ubicaciones",

      startTime: "",
      endTime: "",
      hours: Array.from({ length: 19 }, (_, i) => `${i + 5}:00`),
      selectedWeekdays: [],
      weekdays: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ],
      location: null,
    };
  },
  computed: {
    durations() {},
  },
  methods: {
    createSchedules() {
      axios
        .post(`/fisio/createSchedules`, {
          startTime: this.startTime,
          endTime: this.endTime,
          selectedWeekdays: this.selectedWeekdays,
          location: this.location,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onChange() {
    },
  },
};
</script>
<style scoped>
#start {
  width: 100px;
}
#end {
  width: 100px;
}
.toggler-wrapper {
  display: block;
  width: 45px;
  height: 25px;
  cursor: pointer;
  position: relative;
}

.toggler-wrapper input[type="checkbox"] {
  display: none;
}

.toggler-wrapper input[type="checkbox"]:checked + .toggler-slider {
  background-color: #ed6c14;
}

.toggler-wrapper .toggler-slider {
  background-color: #ccc;
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper.style-7 input[type="checkbox"]:checked + .toggler-slider {
  background-color: white;
}

.toggler-wrapper.style-7 input[type="checkbox"]:checked + .toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
  background-color: #ed6c14;
}

.toggler-wrapper.style-7 .toggler-slider {
  background-color: white;
  -webkit-box-shadow: 2px 4px 8px rgba(200, 200, 200, 0.5);
  box-shadow: 2px 4px 8px rgba(200, 200, 200, 0.5);
  border-radius: 5px;
}

.toggler-wrapper.style-7 .toggler-knob {
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  border-radius: 5px;
  left: 3px;
  top: 3px;
  background-color: #e6e6e6;
}
.days_label {
  margin-top: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
.col-3 {
}
</style>
