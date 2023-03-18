<template>
  <div class="row center no-pd">
    <h5 class="text-center color-blue">
      Documentación
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
        <div class="row right_side margin-center" style="padding: 10px 0">
          <form @submit.prevent="submit">
            <div class="col-12 mt-2 doc_input_container">
              <div class="mb-3">
                <label for="resume_path" class="form-label"
                  ><h6 for="resume_path" class="docs_label">CURRICULUM VITAE</h6></label
                >
                <input
                  class="form-control inputs"
                  type="file"
                  id="resume_path"
                  name="resume"
                  @change="onResumeChange"
                />
              </div>
            </div>
            <div class="col-12 mt-2 doc_input_container">
              <div class="mb-3">
                <label for="criminal_record_path" class="form-label"
                  ><h6 for="criminal_record_path" class="docs_label">
                    CERTIFICADO DE ANTECEDENTES PENALES
                  </h6></label
                >
                <input
                  class="form-control inputs"
                  type="file"
                  id="criminal_record_path"
                  name="criminal_record"
                  @change="onCriminalRecordChange"
                />
              </div>
            </div>
            <div class="col-12 mt-2 doc_input_container">
              <div class="mb-3">
                <label for="police_record_path" class="form-label"
                  ><h6 for="police_record_path" class="docs_label">
                    CERTIFICADO DE ANTECEDENTES POLICIALES
                  </h6></label
                >
                <input
                  class="form-control inputs"
                  type="file"
                  id="police_record_path"
                  name="police_record"
                  @change="onPoliceRecordChange"
                />
              </div>
            </div>
            <div class="col-12 mt-2 doc_input_container">
              <div class="mb-3">
                <label for="profesional_hability_path" class="form-label"
                  ><h6 for="profesional_hability_path" class="docs_label">
                    CERTIFICADO DE HABILIDAD PROFESIONAL
                  </h6></label
                >
                <input
                  class="form-control inputs"
                  type="file"
                  id="profesional_hability_path"
                  name="profesional_hability"
                  @change="onProfesionalHabilityChange"
                />
              </div>
            </div>
            <loader v-if="loading" />
            <button v-if="enableButton && !loading" type="submit" class="btn btn-blue">
              Subir Documentos
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "../../../../Modules/UI/Loader.vue";

export default {
  props: ["completed"],
  setup() {},
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,
      resume: null,
      criminalRecord: null,
      police_record: null,
      profesional_hability: null,
    };
  },
  methods: {
    onResumeChange(event) {
      this.resume = event.target.files[0];
    },

    onCriminalRecordChange(event) {
      this.criminalRecord = event.target.files[0];
    },

    onPoliceRecordChange(event) {
      this.police_record = event.target.files[0];
    },

    onProfesionalHabilityChange(event) {
      this.profesional_hability = event.target.files[0];
    },

    async submit() {
      this.loading = true;
      const formData = new FormData();
      formData.append("resume", this.resume);
      formData.append("criminal_record", this.criminalRecord);
      formData.append("police_record", this.police_record);
      formData.append("profesional_hability", this.profesional_hability);

      await this.$inertia.post("/fisio/addDocumentationData", formData);
    },
  },
  computed: {
    enableButton() {
      if (
        this.resume &&
        this.criminalRecord &&
        this.police_record &&
        this.profesional_hability
      )
        return (
          this.resume !== "" &&
          this.criminalRecord !== "" &&
          this.police_record !== "" &&
          this.profesional_hability !== ""
        );
    },
  },
};
</script>
<style scoped>
.docs_label {
  margin-right: 1rem;
  color: whitesmoke;
}
.inputs {
  background-color: #f0f0f0;
}
</style>
