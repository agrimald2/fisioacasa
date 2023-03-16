<template>
  <FisioterapeutasLayout :fisio="fisio">
    <Header :title="title" :subtitle="subtitle" />
    <div class="card mb-4">
      <Filters :locations="locations" />
    </div>
    <div class="card mb-4">
      <Appointments :appointments="appointments"/>
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import Filters from "./Filters.vue";
import Appointments from "./Appointments.vue";
import Header from "../../../../Modules/UI/Header.vue";

export default {
  name: "Schedules",
  props: ["fisio", "appointments", "locations"],
  components: {
    FisioterapeutasLayout,
    Filters,
    Appointments,
    Header,
  },

  data() {
    return {
      title: "Gestiona tus citas",
      subtitle: "Puedes filtrar por nombre, ubicación, estato y fechas",
    };
  },
};
</script>

<style scoped>
.date {
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
