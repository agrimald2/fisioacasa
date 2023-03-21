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
  </div>
  <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">
              Motivo de consulta
            </p>
            <textarea class="form-control text-area" name="" id="" v-model="consult_reason" />
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
              Tiempo de enfermedad
            </p>
            <textarea class="form-control text-area" name="" id="" v-model="disease_time" />
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
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Forma de inicio</p>
            <textarea class="form-control text-area" name="" id="" v-model="start_way" />
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
              Evaluación (Exploración)
            </p>
            <textarea class="form-control text-area" name="" id="" v-model="evaluation" />
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
              Diagnóstico Fisioterapéutico
            </p>
            <textarea class="form-control text-area" name="" id="" v-model="fisio_diagnostic" />
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
              Programa de tratamiento
            </p>
            <textarea class="form-control text-area" name="" id="" v-model="treatment" />
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
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Evolución</p>
            <textarea class="form-control text-area" name="" id="" v-model="evolution" />
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
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Recomendaciones</p>
            <textarea class="form-control text-area" name="" id="" v-model="recomendations" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-6 col-12 mb-xl-0 mb-4 mt-2 margin-center">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">
              Indicadores de bienestar
            </p>
            <div class="row">
              <div class="col-xl-4 col-12">
                <label for="">Tolerancia al dolor (EVA)</label>
                <input type="number" class="form-control" v-model="w_pain" />
              </div>
              <div class="col-xl-4 col-12">
                <label for="">Movilidad</label>
                <input type="number" class="form-control" v-model="w_movility" />
              </div>
              <div class="col-xl-4 col-12">
                <label for="">Fuerza</label>
                <input type="number" class="form-control" v-model="w_strength" />
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
      appointment_id: this.appointment_id,
      patient_id: this.patient_id,
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

      consult_reason: null,
      disease_time: null,
      start_way: null,
      evaluation: null,
      fisio_diagnostic: null,
      treatment: null,
      evolution: null,
      recomendations: null,
      w_pain: null,
      w_movility: null,
      w_strength: null,
    };
  },
  methods: {
    createClinicalHistory() {
      axios
        .post(`/fisio/createClinicalHistory`, {
          appointment_id: this.appointment_id,
          patient_id: this.patient_id,
          consult_reason: this.consult_reason,
          disease_time: this.disease_time,
          start_way: this.start_way,
          evaluation: this.evaluation,
          fisio_diagnostic: this.fisio_diagnostic,
          treatment: this.treatment,
          evolution: this.evolution,
          recomendations: this.recomendations,
          w_pain: this.w_pain,
          w_movility: this.w_movility,
          w_strength: this.w_strength,
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
