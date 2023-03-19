<template>
  <div class="card mb-4 mb-xl-0 border-orange">
    <div class="card-header" style="text-align: center; padding-bottom: 0">
      <h6 class="color-blue text-xl font-bold">{{ fisioName }}</h6>
    </div>
    <div class="card-body text-center image_container" style="padding-bottom: 0">
      <form @submit.prevent="save">
        <input type="file" @change="onFileChange" id="file-input" style="display: none" />
        <label v-if="!photoDataUrl" for="file-input">
          <img
            v-if="!photoTemp"
            class="img-account-profile rounded-circle mb-2 avatar"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt="Profile Photo"
            style="height: 8.5rem !important; width: 8.5rem !important"
          />
          <img
            v-else
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="photoTemp"
            alt="Profile photo"
            style="height: 8.5rem !important; width: 8.5rem !important"
          />
        </label>
        <label v-else for="file-input">
          <img
            v-if="!photoTemp"
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="`/img/fisioPhotos/` + photoDataUrl"
            alt="Profile photo"
            style="height: 8.5rem !important; width: 8.5rem !important"
          />
          <img
            v-else
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="photoTemp"
            alt="Profile photo"
            style="height: 8.5rem !important; width: 8.5rem !important"
          />
        </label>
        <div v-if="!loading" class="small font-italic mb-4 color-blue">
          Selecciona una foto JPG or PNG
        </div>
        <div v-else class="small font-italic mb-4 color-orange">
          Foto Subida con éxito!
        </div>
        <loader v-if="loading" />
        <button
          v-if="photoTemp && !loading"
          class="btn btn-primary bg-blue"
          type="submit"
        >
          SUBIR ESTA FOTO
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Loader from "../../../../Modules/UI/Loader.vue";

export default {
  props: ["photoUrl", "fisioName"],

  data() {
    return {
      loading: false,
      photoFile: null,
      photoDataUrl: this.photoUrl,
      photoTemp: null,
      fisioName: this.fisioName,
    };
  },
  components: {
    Loader,
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.photoFile = file;
        this.photoTemp = URL.createObjectURL(file);
      }
    },
    async save() {
      this.loading = true;
      const formData = new FormData();
      formData.append("photo", this.photoFile);

      await this.$inertia.post("/fisio/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Reload the page or update the profile data;
      window.location.reload();
    },
  },
};
</script>
<style scoped>
img {
  border: 5px solid #00699e;
}
</style>
