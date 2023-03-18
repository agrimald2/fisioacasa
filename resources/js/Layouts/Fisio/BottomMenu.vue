<template>
  <div class="bottomMenu row">
    <div class="col-4 row">
      <div @click="goToPrice()" class="col-6">
        <i class="fa-solid fa-hand-holding-dollar color-blue text-xl"></i>
      </div>
      <div @click="goToSchedules()" class="col-6">
        <i class="fa-solid fa-calendar color-blue text-xl"></i>
      </div>
    </div>
    <div class="col-4 row" style="justify-content: center">
      <a class="" href="/fisio/dashboard">
        <div class="flex items-center justify-center">
          <button
            @click="goToDashboard()"
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
      <div @click="goToLocations()" class="col-6">
        <i class="fa-solid fa-location-dot color-blue text-xl"></i>
      </div>
      <div @click="goToProfile()" class="col-6">
        <i class="fa-solid fa-circle-user color-blue text-xl"></i>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col-4:hover{
    cursor:pointer
}
.bottomMenu {
  z-index: 100000;
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
<script>
export default {
  setup() {},

  methods: {
    goToPrice() {
      window.location.href = "/fisio/price";
    },
    goToDashboard() {
      window.location.href = "/fisio/dashboard";
    },
    goToSchedules() {
      window.location.href = "/fisio/schedules";
    },
    goToLocations() {
      window.location.href = "/fisio/location";
    },
    goToProfile() {
      window.location.href = "/fisio/profile";
    },
    goToAppointments() {
      window.location.href = "/fisio/appointments";
    },
  },
};
</script>
