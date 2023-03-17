<template>
  <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    id="navbarBlur"
    navbar-scroll="true"
  >
    <div class="container-fluid py-1 px-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          <li class="breadcrumb-item text-sm">
            <a class="opacity-5 text-dark" href="#">Fisioterapeuta</a>
          </li>

          <li
            v-for="(breadCrumb, key) in breadCrumbList"
            :key="key"
            class="breadcrumb-item text-sm"
            :class="{ 'text-dark active': key + 1 == breadCrumbTotal }"
          >
            <router-link
              v-if="key + 1 != breadCrumbTotal"
              class="opacity-5 text-dark"
              :to="{ name: breadCrumb.link }"
              >{{ breadCrumb.name }}</router-link
            >
            <span v-else>{{ breadCrumb.name }}</span>
          </li>
        </ol>
        <div v-for="(breadCrumb, key) in breadCrumbList" :key="key">
          <h6 class="font-weight-bolder mb-0" v-if="key + 1 == breadCrumbTotal">
            {{ breadCrumb.name ?? "N/A" }}
          </h6>
        </div>
      </nav>
      <div
        v-bind:class="{ collapse: isMobile }"
        class="navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
        id="navbar"
      >
        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              disabled
              :placeholder="fisio.surname"
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a href="#" class="nav-link text-body p-0" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="nav-item px-3 d-flex align-items-center">
            <a href="#" class="nav-link text-body p-0">
              <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
            </a>
          </li>
          <li class="nav-item d-none dropdown px-3 d-flex align-items-center">
            <a
              href="#"
              class="nav-link text-body p-0"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-bell cursor-pointer"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div class="my-auto">
                      <img src="#" class="avatar avatar-sm me-3" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="text-sm font-weight-normal mb-1">
                        <span class="font-weight-bold">New message</span> from Laur
                      </h6>
                      <p class="text-xs text-secondary mb-0">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div class="my-auto">
                      <img src="#" class="avatar avatar-sm bg-gradient-dark me-3" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="text-sm font-weight-normal mb-1">
                        <span class="font-weight-bold">New album</span> by Travis Scott
                      </h6>
                      <p class="text-xs text-secondary mb-0">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item d-flex align-items-center">
            <button @click="logout" class="nav-link text-body font-weight-bold px-0">
              <i class="fas fa-sign-out-alt me-sm-1"></i>
              <span class="d-sm-inline d-none">Salir</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";

export default {
  props: ["fisio"],

  name: "Sidenav",

  data() {
    return {
      breadCrumbList: [{ name: "Dashboard" }],
      breadCrumbTotal: 1,
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
    logout() {
      axios
        .post("/fisio/logout")
        .then((response) => {
          window.location.href = "/fisio/dashboard";
        })
        .catch((error) => {
          window.location.href = "/fisio/dashboard";

          console.error(error);
        });
    },
  },
};
</script>
