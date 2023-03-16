<template>
  <FisioLayout :fisio="fisio">
    <div class="row margin-center">
      <CreateSchedules :locations="locations" />
    </div>
    <div class="row">
      <SeeSchedules :schedules="schedules" />
    </div>
  </FisioLayout>
</template>

<script>
import FisioLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import CreateSchedules from "./CreateSchedules.vue";
import SeeSchedules from "./SeeSchedules.vue";

export default {
  props: ["locations", "schedules","fisio"],
  components: {
    FisioLayout,
    CreateSchedules,
    SeeSchedules,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteItem() {
      // Add code here to delete the item from the database or data source
      this.showModal = false;
    },
  },
};
</script>

<style scoped></style>
