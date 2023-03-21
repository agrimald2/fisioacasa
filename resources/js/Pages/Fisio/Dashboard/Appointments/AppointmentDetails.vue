<template>
  <FisioterapeutasLayout :fisio="fisio">
    <Header :title="title" :subtitle="subtitle" />
    <div v-if="appointment.status == 0" class="row margin-center">
      <div v-if="!displayForm" class="col-12 col-md-4">
        <div class="card mb-4 mb-xl-0 orange-border">
          <div class="card-body text-center">
            <Validate
              @validateAppointment="showHistoryClinicForm"
              :appointment="appointment"
            />
          </div>
        </div>
      </div>
      <div v-if="!displayForm" class="col-12 col-md-8">
        <AppointmentInfo :appointment="appointment" :clinicalHistories="clinicalHistories" />
      </div>
      <Evaluation
        v-if="displayForm"
        :fisio_id="fisio.id"
        :appointment_id="appointment.id"
        :patient_id="appointment.patient_id"
      />
    </div>
    <div v-else class="row margin-center">
      <AppointmentInfo :appointment="appointment" :clinicalHistories="clinicalHistories" />
    </div>
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import Header from "../../../../Modules/UI/Header.vue";
import Validate from "./ValidateAppointment.vue";
import AppointmentInfo from "./AppointmentInfo.vue";
import Evaluation from "./HC/Evaluation.vue";
//import SeeHistory from "./SeeHistory.vue";

export default {
  name: "Schedules",
  props: ["fisio", "appointment", "clinicalHistories"],
  components: {
    FisioterapeutasLayout,
    Header,
    Validate,
    AppointmentInfo,
    Evaluation,
    //    SeeHistory,
  },

  data() {
    return {
      title: "DETALLES DE LA CITA",
      subtitle: "Encontrarás toda la información referente",
      mainIndication: "",
      displayForm: false,
    };
  },
  methods: {
    showHistoryClinicForm() {
      this.displayForm = true;
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
