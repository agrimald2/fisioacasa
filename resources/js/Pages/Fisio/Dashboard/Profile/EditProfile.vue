<template>
  <h5 style="text-align: center">
    Por favor, <i>completa tus datos</i> para proceder al siguiente paso
  </h5>
  <div class="row no-pd margin-center">
    <div class="col-md-4 col-12">
      <Photo :photoUrl="fisio.profile_photo_path" :fisioName="fisio.name" />
    </div>
    <div class="col-md-8 col-12">
      <div class="card">*Acá debería ir un Tutorial*</div>
    </div>

    <div class="col-md-6 col 12 info_container">
      <AcademicInfo
        :degrees="degrees"
        :especialties="especialties"
        :universities="universities"
        :completed="hasAcademic"
      />
    </div>

    <div class="col-md-6 col-12 info_container">
      <Documentation :completed="hasDocumentation" />
    </div>
    <div class="row mt-2 text-center margin-center">
      <span v-if="!(hasDocumentation && hasAcademic)">
        Completa todas las secciones para enviar a revisión:
        <span v-if="!hasAcademic" style="color: red">Información Académica, </span>
        <span v-if="!hasDocumentation" style="color: red">Sube todos tus documentos</span>
      </span>
      <button
        @click="sendToRevision()"
        class="btn btn-next mt-3"
        :disabled="!(hasDocumentation && hasAcademic)"
      >
        Enviar para revisión
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import Photo from "./Photo.vue";
import AcademicInfo from "./AcademicInfo.vue";
import Documentation from "./Documentation.vue";
export default {
  props: [
    "fisio",
    "degrees",
    "especialties",
    "universities",
    "hasDocumentation",
    "hasAcademic",
  ],
  name: "Profile",

  components: {
    Photo,
    AcademicInfo,
    Documentation,
  },

  data() {
    return {};
  },

  methods: {
    sendToRevision() {
      axios
        .post(`/fisio/sendToRevision`)
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
.info_container {
  padding: 2rem;
}

button:disabled,
button[disabled] {
  border: 2px solid #999999;
  background-color: #ed6c14;
  color: white;
}

@media (max-width: 721px) {
  .personal_right {
    padding-right: 0rem;
  }
  .no-pd {
    padding-right: 0;
  }
}
</style>
