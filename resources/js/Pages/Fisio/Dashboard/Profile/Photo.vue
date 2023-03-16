<template>
  <div class="card mb-4 mb-xl-0">
    <div class="card-header" style="text-align: center">
      <h6>{{ fisioName }}</h6>
    </div>
    <div class="card-body text-center image_container">
      <form @submit.prevent="save">
        <input type="file" @change="onFileChange" id="file-input" style="display: none" />
        <label v-if="!photoDataUrl" for="file-input">
          <img
            v-if="!photoTemp"
            class="img-account-profile rounded-circle mb-2 avatar"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt="Profile Photo"
            style="height: 7.5rem !important; width: 7.5rem !important"
          />
          <img
            v-else
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="photoTemp"
            alt="Profile photo"
            style="height: 7.5rem !important; width: 7.5rem !important"
          />
        </label>
        <label v-else for="file-input">
          <img
            v-if="!photoTemp"
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="`/img/fisioPhotos/` + photoDataUrl"
            alt="Profile photo"
            style="height: 7.5rem !important; width: 7.5rem !important"
          />
          <img
            v-else
            class="img-account-profile rounded-circle mb-2 avatar"
            :src="photoTemp"
            alt="Profile photo"
            style="height: 7.5rem !important; width: 7.5rem !important"
          />
        </label>
        <div class="small font-italic text-muted mb-4">
          Selecciona una foto JPG or PNG
        </div>
        <button v-if="photoTemp" class="btn btn-primary bg-blue" type="submit">
          SUBIR ESTA FOTO
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ["photoUrl", "fisioName"],

  data() {
    return {
      photoFile: null,
      photoDataUrl: this.photoUrl,
      photoTemp: null,
      fisioName: this.fisioName,
    };
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
      const formData = new FormData();
      formData.append("photo", this.photoFile);

      await this.$inertia.post("/fisio/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Reload the page or update the profile data
    },
  },
};
</script>
