<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
</script>

<template>
  <AppLayout title="Fisioterapeutas">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Detalles Fisioterapeuta
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4 text-xl font-bold"
        >
          {{ fisio.name }} {{ fisio.surname }}
        </div>
      </div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
          <div class="relative overflow-x-auto">
            <div class="card mb-4 mb-xl-0 no-border">
              <div
                class="card-body text-center image_container margin-center"
                style="padding-bottom: 0"
              >
                <div class="mb-2">
                  <span
                    v-if="fisio.status == 0"
                    class="badge badge-sm bg-gray-400 p-2 uppercase"
                    >Registrado</span
                  >
                  <span
                    v-else-if="fisio.status == 1"
                    class="badge badge-sm bg-gray-400 p-2 uppercase"
                    >Documentos</span
                  >
                  <span
                    v-else-if="fisio.status == 2"
                    class="badge badge-sm bg-orange p-2 uppercase"
                    >Aprobado</span
                  >
                  <span v-else class="badge badge-sm bg-red-500 p-2 uppercase"
                    >Denegado</span
                  >
                </div>
                <div class="margin-center">
                  <img
                    class="img-account-profile rounded-circle mb-2 avatar margin-center"
                    :src="`/img/fisioPhotos/` + fisio.profile_photo_path"
                    alt="Profile Photo"
                    style="height: 8.5rem !important; width: 8.5rem !important"
                  />
                </div>
                <div class="margin-center text-xl">
                  {{ fisio.phone }} / {{ fisio.email }} / {{ fisio.birthdate }} /
                  {{ fisio.sex }}
                </div>
              </div>
            </div>

            <div class="card mb-4 mb-xl-0 mt-2 border-orange">
              <div
                v-for="degree in fisio.academic_data"
                :key="degree.id"
                class="card-body text-center text-xl margin-center"
                style="padding-bottom: 0"
              >
                <h6 class="color-blue font-bold mb-1">INFORMACIÓN ACADÉMICA</h6>
                <ul>
                  <li>{{ degree.especialty }}</li>
                  <li>{{ degree.degree }}</li>
                  <li>{{ degree.university }}</li>
                  <li>{{ degree.graduation_year }}</li>
                </ul>
              </div>
            </div>

            <div class="card mb-4 mb-xl-0 mt-2 no-border">
              <div class="card-body text-center margin-center" style="padding-bottom: 0">
                <h6 class="color-blue font-bold mb-1 text-xl">DOCUMENTACIÓN</h6>
                <div
                  @click="downloadfile(fisio.criminal_record_path)"
                  class="mt-2 btn btn-orange mr-2"
                >
                  CURRICULUM
                </div>
                <div class="mt-2 btn btn-orange mr-2">ANT. PENALES</div>
                <div class="mt-2 btn btn-orange mr-2">ANT. POLICIALES</div>
                <div class="mt-2 btn btn-orange mr-2">HABILIDAD PROFESIONAL</div>
              </div>
            </div>

            <div class="card mb-4 mb-xl-0 mt-4 no-border">
              <div class="card-body text-center margin-center" style="padding-bottom: 0">
                <div @click="approve()" class="btn bg-green-600 color-white font-bold mr-2 p-2">
                  <i class="fa-solid fa-check fa-xl"></i>
                </div>
                <div @click="fisioDeny()" class="btn bg-red-600 color-white font-bold mr-2 p-2">
                  <i class="fa-solid fa-x fa-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script>
import axios from "axios";

export default {
  props: ["fisio"],
  data() {
    return {};
  },
  components: {},
  methods: {
    downloadfile(file) {
      axios
        .get(`/admin/fisios/deny`, {
          file: file,
        })
        .then((response) => {
          //window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    approve() {
      axios
        .post(`/admin/fisios/approve`, {
          id: this.fisio.id,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fisioDeny() {
      axios
        .post('/admin/fisios/deny', {
          id: this.fisio.id,
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
img {
  border: 5px solid #00699e;
}
.no-border {
  border: none;
}
</style>
