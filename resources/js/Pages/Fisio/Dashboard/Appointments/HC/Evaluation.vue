<template>
  <div class="row text-center card bg-blue py-2 margin-center">
    <h5 class="font-bold text-xl color-white">Llenar Evaluacion</h5>
  </div>
  <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card mb-2">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Documentación</p>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Enfermedad Actual</p>

            <label for="edad" class="mt-2">Tiempo de la Enfermedad</label>

            <select class="form-control" v-model="disease_time">
              <option value="De 1 a 5 años">De 1 a 5 años</option>
              <option value="De 7 a 10 años">De 7 a 10 años</option>
              <option value="De 11 a 15 años">De 11 a 15 años</option>
              <option value="Más de 16 años">Más de 16 años</option>
            </select>

            <label for="estado">Inicio de enfermedad</label>
            <br />
            <select class="form-control" v-model="start_way">
              <option value="Brusco">Brusco</option>
              <option value="Brusco">Insidioso</option>
            </select>

            <label for="edad">Anamnesis</label>
            <textarea class="form-control text-area" name="" id="" v-model="anamnesis" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">
              Evaluación inicial
            </p>
            <label for="edad" class="mt-2">¿Cómo encontraste al paciente?</label>
            <input type="text" class="form-control" v-model="initial_patient_status" />

            <label for="edad" class="mt-2">Ectoscopía (De 5 en 5)</label>
            <input type="tel" class="form-control" v-model="ectoscopy" />

            <label for="estado">Estado general</label>
            <br />
            <select class="form-control" v-model="general_status">
              <option value="Bueno">Bueno</option>
              <option value="Malo">Malo</option>
              <option value="Regular">Regular</option>
            </select>

            <label for="edad" class="mt-4">Observación</label>
            <textarea class="form-control text-area" v-model="observation" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Realizado</p>
            <label for="edad" class="mt-2">¿Qué técnica aplicaste?</label>
            <input type="text" class="form-control" v-model="applied_techniques" />

            <label for="edad" class="mt-4">Regiones del cuerpo tratadas</label>
            <Multiselect
              v-model="body_regions"
              :options="bodyParts"
              mode="tags"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
            ></Multiselect>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Situación Final</p>
            <label for="edad" class="mt-4">¿Cómo dejaste al paciente?</label>
            <textarea
              class="form-control text-area"
              id=""
              v-model="final_patient_status"
            />

            <label for="edad" class="mt-4">Recomendaciones</label>
            <Multiselect
              v-model="selectedRecomendations"
              :options="recomendations"
              mode="tags"
              :close-on-select="false"
              :searchable="true"
              :create-option="true"
            ></Multiselect>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">
              Indicadores de bienestar
            </p>
            <div class="row">
              <div class="col-xl-4 col-12">
                <label for="">Tolerancia al dolor</label>
                <input type="number" class="form-control" v-model="wellness_1" />
              </div>
              <div class="col-xl-4 col-12">
                <label for="">Movilidad - Flexibilidad</label>
                <input type="number" class="form-control" v-model="wellness_2" />
              </div>
              <div class="col-xl-4 col-12">
                <label for="">Fuerza</label>
                <input type="number" class="form-control" v-model="wellness_3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-orange bg-orange mt-3" @click="createClinicalHistory()">
    Guardar Historia Clínica
  </button>
</template>
<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect";
export default {
  props: ["fisio_id", "appointment_id", "patient_id"],
  components: {
    Multiselect,
  },
  data() {
    return {
      value: "",
      selectedRecomendations: [],
      bodyParts: [
        "Cabeza",
        "Cuello",
        "Columna Cervical",
        "Hombros",
        "Codo",
        "Mano",
        "Muñeca",
        "Espalda",
        "Columna dorsal",
        "Cintura",
        "Columna lumbar",
        "Cadera",
        "Rodilla",
        "Tobillo",
        "Pie",
      ],
      recomendations: [
        "Realizar Ejercicio de estiramientos",
        "Caminar 30 minutos al día",
      ],
      appointment_id: this.appointment_id,
      patient_id: this.patient_id,
      ectoscopy: null,
      general_status: null,
      observation: null,
      disease_time: null,
      start_way: null,
      anamnesis: null,
      initial_patient_status: null,
      applied_techniques: null,
      body_regions: [],
      final_patient_status: null,
      wellness_1: null,
      wellness_2: null,
      wellness_3: null,
    };
  },
  methods: {
    createClinicalHistory() {
      axios
        .post(`/fisio/createClinicalHistory`, {
          appointment_id: this.appointment_id,
          patient_id: this.patient_id,
          ectoscopy: this.ectoscopy,
          general_status: this.general_status,
          observation: this.observation,
          disease_time: this.disease_time,
          start_way: this.start_way,
          anamnesis: this.anamnesis,
          initial_patient_status: this.initial_patient_status,
          applied_techniques: this.applied_techniques,
          body_regions: this.body_regions,
          final_patient_status: this.final_patient_status,
          recomendations: this.selectedRecomendations,
          wellness_1: this.wellness_1,
          wellness_2: this.wellness_2,
          wellness_3: this.wellness_3,
        })
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
<style src="@vueform/multiselect/themes/default.css"></style>
