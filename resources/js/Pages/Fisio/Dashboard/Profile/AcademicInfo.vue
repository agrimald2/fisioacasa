<template>
  <div class="row center no-pd" style="margin-left: -0.45rem">
    <h5 class="text-center color-blue">
      Información Académica
      <span>
        <i
          v-if="completed"
          style="color: lightgreen; font-size: 1.5rem"
          class="fa-solid fa-check-double"
        ></i>
        <i
          v-else
          style="color: red; font-size: 1.5rem"
          class="fa-solid fa-circle-exclamation"
        ></i>
      </span>
    </h5>
    <div class="row center no-pd no-row">
      <div class="row register_container center no-pd margin-center bg-orange">
        <div class="col-12 right_side">
          <div class="row">
            <div class="col-12 mt-2">
              <label for="resume_path" class="form-label"><h6 for="resume_path" class="docs_label">GRADO</h6></label>
              <select
                id="degree"
                class="form-select inputs"
                aria-label="Default select example"
                v-model="degree"
              >
                <option selected>Elegir Grado</option>
                <option
                  v-for="(degree, index) in degrees"
                  :key="index"
                  :value="degree.name"
                >
                  {{ degree.name }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="resume_path" class="form-label"><h6 for="resume_path" class="docs_label">UNIVERSIDAD</h6></label>
              <select
                id="university"
                class="form-select inputs"
                aria-label="Default select example"
                v-model="university"
              >
                <option selected>Elegir Universidad</option>
                <option
                  v-for="(university, index) in universities"
                  :key="index"
                  :value="university.name"
                >
                  {{ university.name }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="resume_path" class="form-label"><h6 for="resume_path" class="docs_label">AÑO DE EGRESO</h6></label>
              <select
                id="graduation_year"
                class="form-select inputs"
                aria-label="Default select example"
                v-model="graduation_year"
              >
                <option selected>Elegir Año</option>
                <option v-for="index in 30" :key="index" :value="currentYear + 1 - index">
                  {{ currentYear + 1 - index }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="resume_path" class="form-label"><h6 for="resume_path" class="docs_label">ESPECIALIDAD</h6></label>
              <select
                id="especialty"
                class="form-select inputs"
                aria-label="Default select example"
                v-model="especialty"
              >
                <option selected>Elegir Especialidad</option>
                <option
                  v-for="(especialty, index) in especialties"
                  :key="index"
                  :value="especialty.name"
                >
                  {{ especialty.name }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <label for="resume_path" class="form-label"><h6 for="resume_path" class="docs_label">REGISTRO DE ESPECIALIDAD</h6></label>
              <input
                class="form-control inputs"
                id="especialty_register"
                type="text"
                placeholder="REGISTRO DE ESPECIALIDAD"
                aria-label="default input example"
                v-model="especialty_register"
              />
            </div>
          </div>
          <div class="row mt-2">
            <button
              v-if="enableButton"
              @click="addAcademicData()"
              class="btn btn-next mt-3 bg-blue"
              style="background"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["degrees", "especialties", "universities", "completed"],
  data() {
    return {
      degrees: this.degrees,
      especialties: this.especialties,
      universities: this.universities,
      currentYear: null,

      degree: this.degree,
      university: this.university,
      graduation_year: this.graduation_year,
      especialty: this.especialty,
      especialty_register: this.especialty_register,
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
  computed: {
    enableButton() {
      if (
        this.degree &&
        this.university &&
        this.graduation_year &&
        this.especialty &&
        this.especialty_register
      )
        return (
          this.degree !== "" &&
          this.university !== "" &&
          this.graduation_year !== "" &&
          this.especialty !== "" &&
          this.especialty_register !== ""
        );
    },
  },
  methods: {
    addAcademicData() {
      axios
        .post(`/fisio/addAcademicData`, {
          degree: this.degree,
          university: this.university,
          graduation_year: this.graduation_year,
          especialty: this.especialty,
          especialty_register: this.especialty_register,
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
<style scoped>
.right_side {
  padding: 1rem;
}
.docs_label{
    color: whitesmoke;
}
.inputs{
    background-color: #F0F0F0;
}
</style>
