<template>
  <FisioLayout :fisio="fisio">
    <div class="row">
      <CreateLocations />
    </div>
    <div class="row">
      <SeeLocations :locations="locations" />
    </div>
  </FisioLayout>
</template>

<script>
import FisioLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import CreateLocations from "./CreateLocation.vue";
import SeeLocations from "./SeeLocations.vue";

export default {
  props: ['locations',"fisio"],

  components: {
    FisioLayout,
    CreateLocations,
    SeeLocations,
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
