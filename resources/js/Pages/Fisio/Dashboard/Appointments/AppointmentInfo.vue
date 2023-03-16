<template>
  <div class="row">
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Paciente</p>
              <h5 class="font-weight-bolder mb-0">{{ appointment.patient.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">
                Santiago de Surco
              </p>
              <h5 class="font-weight-bolder mb-0">{{ appointment.address }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Fecha y hora</p>
              <h5 class="font-weight-bolder mb-0">
                {{ appointment.date }} -
                {{ appointment.start_time }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-4 mb-xl-0 mb-4 mt-2">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Tarifa</p>
              <h5 class="font-weight-bolder mb-0">S/. {{ appointment.price }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-2 mt-2">
    <div class="card-body text-center row">
      <div class="row">
        <h5 class="patientName">HISTORIA CLÍNICA</h5>
        <h6>20 años - M</h6>
        <hr />
      </div>
      <div class="row">
        <p v-if="!clinicalHistories">
          *El paciente aún no cuenta con historia clínica para visualizar*
        </p>
        <div
          class="col-12 col-md-6 hc_label"
          v-for="clinicalHistory in clinicalHistories"
          :key="clinicalHistory.id"
        >
          <button class="btn bg-orange" type="submit">
            VER HC {{ clinicalHistory.created_at.slice(0, 10) }}
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <p>
          <i
            >*Si no validas tu cita y llenas tu historial clínico, la cita no será
            contabilizada*</i
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["appointment", "clinicalHistories"],
  components: {
    moment,
  },
  methods: {
    formatDate(date) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
<style scoped>
.patientName {
  text-transform: uppercase;
}
</style>
