<template>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    rel="stylesheet"
  />

  <Sidenav :fisio="fisio" />
  <main class="main-content mt-1 border-radius-lg">
    <Navbar :fisio="fisio" />
    <div class="container-fluid py-1">
      <div class="row">
        <slot />
      </div>
      <footer class="footer pt-3">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-left">
                © {{ new Date().getFullYear() }} made by
                <a href="https://e-pask.com" class="font-weight-bold" target="_blank"
                  >e-Pask</a
                >
              </div>
            </div>
            <div class="col-lg-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="#" class="nav-link text-muted" target="_blank"
                    >Fisioacasa.pe</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link text-muted" target="_blank"
                    >¿Cómo funciona?</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link text-muted" target="_blank">T&C</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link pe-0 text-muted" target="_blank"
                    >CONTACTO</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>

  <div class="bottomMenu row">
    <div class="col-4 row">
      <div class="col-6">
        <i class="fa-solid fa-hand-holding-dollar color-blue text-xl"></i>
      </div>
      <div class="col-6"><i class="fa-solid fa-calendar color-blue text-xl"></i></div>
    </div>
    <div class="col-4 row" style="justify-content: center">
      <a class="" href="/fisio/dashboard">
        <div class="flex items-center justify-center">
          <button
            data-tooltip-target="tooltip-new"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium bg-orange color-white rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              class="h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
          </button>
        </div>
      </a>
    </div>
    <div class="col-4 row">
      <div class="col-6"><i class="fa-solid fa-location-dot color-blue text-xl"></i></div>
      <div class="col-6">
        <i class="fa-solid fa-circle-user color-blue text-xl"></i>
      </div>
    </div>
  </div>
  <button
    @click="goToAppointments"
    v-if="isMobile"
    style="position: fixed; right: 5vw; top: 1vh; font-size: 2rem"
  >
    <img src="/img/blue-bg-logo.png" alt="" class="margin-center" style="width: 80%" />
  </button>
</template>
<script>
import Sidenav from "./Sidenav.vue";
import Navbar from "./Navbar.vue";
import BottomMenu from "./BottomMenu.vue";

export default {
  props: ["fisio"],
  name: "FisioterapeutasLayout",
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
  components: { Sidenav, Navbar, BottomMenu },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    goToAppointments() {
      window.location.href = "/fisio/appointments";
    },
  },
};
</script>
<style src="./FisioLayout.css"></style>
<style scoped>
.bottomMenu {
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: #f5f5f5;
  bottom: 0;

  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;

  --bs-gutter-x: 0 !important;
}
.main-content {
  padding-bottom: 7vh;
}

.w-10 {
  width: 50% !important;
}
</style>
