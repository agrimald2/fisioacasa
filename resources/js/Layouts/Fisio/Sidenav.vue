<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="navbar-brand m-0 text-center" href="#">
        <div class="row">
          <div class="col-4">
            <img :src="`/img/fisioPhotos/` + fisio.profile_photo_path" alt="" />
          </div>
          <div
            class="col-8"
            style="display: flex; justify-content: center; align-items: center"
          >
            <span class="ms-1 font-weight-bold">{{ fisio.name }} </span>
          </div>
        </div>
      </a>
    </div>
    <hr class="horizontal dark mt-0" />
    <div
      v-bind:class="{ collapse: isMobile }"
      class="navbar-collapse w-auto"
      id="sidenav-collapse-main"
      style="height: auto"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/fisio/dashboard">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/appointments">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Citas</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/patients">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Pacientes</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
            Mi perfil
          </h6>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/profile">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Mi Perfil</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/price">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Precios</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/location">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Ubicaciones</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fisio/schedules">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-bars"></i>
            </div>
            <span class="nav-link-text ms-1">Horarios</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer mx-3 mt-3 pt-3"></div>
  </aside>
</template>
<script>
export default {
  name: "Sidenav",
  props: ["fisio"],

  data() {
    return {
      isMobile: window.innerWidth <= 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
@media (max-width: 721px) {
  .sidenav {
    display: none !important;
  }
}
</style>
