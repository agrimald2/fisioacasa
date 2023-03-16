<template>
  <FisioterapeutasLayout :fisio="fisio">
    <Header :title="title" :subtitle="subtitle" />
    <div class="card">
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Nombre
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Celular
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Nacimiento
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Sexo
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patients" :key="patient.id">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p class="text-xs text-secondary mb-0">{{ patient.name }}</p>
                      <p class="text-xs text-secondary mb-0">{{ patient.surname }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ patient.phone }}</p>
                </td>
                <td class="align-middle text-center text-sm">
                  <p class="text-xs font-weight-bold mb-0">{{ patient.phone }}</p>
                </td>
                <td class="align-middle text-center">
                  <p class="text-xs font-weight-bold mb-0">
                    {{ patient.sex }}
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
  </FisioterapeutasLayout>
</template>

<script>
import FisioterapeutasLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import Header from "../../../../Modules/UI/Header.vue";

export default {
  name: "Schedules",
  props: ["fisio", "patients"],
  components: {
    FisioterapeutasLayout,
    Header,
  },

  data() {
    return {
      title: "Gestiona tus Pacientes",
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
