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

  <button
    @click="goToAppointments"
    v-if="isMobile"
    style="position: fixed; right: 5vw; top: 1vh; font-size: 2rem"
  >
    <i
      class="fa-solid fa-comment-medical color-orange text-xl"
      style="font-size: 2rem"
    ></i>
  </button>

  <BottomMenu v-if="isMobile" />
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
