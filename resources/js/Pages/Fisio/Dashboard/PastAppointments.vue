<template>
  <div class="col-sm-6 md-col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 pt-1">
        <h6 class="color-blue text-md">Citas Pasadas</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Paciente
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Ganancia
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Status
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Fecha y Hora
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="appointment in appointments" :key="appointment.id">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{ appointment.patient.name }}</h6>
                      <p class="text-xs text-secondary mb-0">
                        +51 {{ appointment.patient.phone }}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">
                    S/ {{ appointment.fisio_win }}
                  </p>
                  <p class="text-xs text-secondary mb-0">
                    + S/{{ appointment.transport_price }} transporte
                  </p>
                </td>
                <td class="align-middle text-center text-sm">
                  <span v-if="appointment.status == 0" class="badge badge-sm bg-blue"
                    >Confirmada</span
                  >
                  <span
                    v-else-if="appointment.status == 1"
                    class="badge badge-sm bg-orange"
                    >Realizada</span
                  >
                  <span v-else class="badge badge-sm" style="background-color: red"
                    >Anulada</span
                  >
                </td>
                <td class="align-middle text-center">
                  <p class="text-xs font-weight-bold mb-0">{{ appointment.date }}</p>
                  <p class="text-xs text-secondary mb-0">
                    {{ appointment.start_time }}
                  </p>
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="font-weight-bold text-xs btn bg-orange btn-orange"
                    data-toggle="tooltip"
                    data-original-title="Ver user"
                    @click="seeDetails(appointment.id)"
                  >
                    Ver
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["appointments"],
  methods: {
    seeDetails(id) {
      window.location.href = "/fisio/appointment/" + id;
    },
  },
};
</script>
<style scoped>
.table-responsive {
  border-top: 3px solid #ed6c14;
}
</style>
