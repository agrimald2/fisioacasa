<template>
  <div
    style="border: 1px solid #ed6c14 !important; width: 98%"
    class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-2 left-1/2 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
      <button
        @click="goToPrice()"
        data-tooltip-target="tooltip-home"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <i class="fa-solid fa-hand-holding-dollar color-blue text-xl"></i>
      </button>

      <button
        @click="goToSchedules()"
        data-tooltip-target="tooltip-wallet"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
      >
        <i class="fa-solid fa-calendar color-blue text-xl"></i>
      </button>

      <a class="py-2" href="/fisio/dashboard">
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
      <button
        @click="goToLocations()"
        data-tooltip-target="tooltip-settings"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <i class="fa-solid fa-location-dot color-blue text-xl"></i>
        <span class="sr-only">Settings</span>
      </button>

      <button
        @click="goToProfile()"
        data-tooltip-target="tooltip-profile"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          fill="#00699e"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          ></path>
        </svg>
        <span class="sr-only">Profile</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
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
