<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
</script>

<template>
  <AppLayout title="Fisioterapeutas">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Fisioterapeutas</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">FILTROS</div>
      </div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">#</th>
                  <th scope="col" class="px-6 py-3">Nombre</th>
                  <th scope="col" class="px-6 py-3">Celular</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                  <th scope="col" class="px-6 py-3">Tarifa</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b pointer"
                  v-for="(fisio, index) in fisios"
                  @click="go(fisio.id)"
                  :key="index"
                >
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {{ fisio.name }} {{ fisio.surname }}
                  </td>
                  <td class="px-6 py-4">{{ fisio.phone }}</td>
                  <td class="px-6 py-4">
                    <span
                      v-if="fisio.status == 0"
                      class="badge badge-sm bg-gray-400 p-2 uppercase"
                      >Registrado</span
                    >
                    <span
                      v-else-if="fisio.status == 1"
                      class="badge badge-sm bg-blue p-2 uppercase"
                      >Documentos</span
                    >
                    <span
                      v-else-if="fisio.status == 2"
                      class="badge badge-sm bg-orange p-2 uppercase"
                      >Aprobado</span
                    >
                    <span v-else class="badge badge-sm bg-red-500 p-2 uppercase"
                      >Denegado</span
                    >
                  </td>
                  <td class="px-6 py-4">
                    <span v-if="fisio.appointment_price"
                      >S/{{ fisio.appointment_price }}</span
                    >
                    <span v-else>---</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script>
import LinkGroup from "../Links/Group.vue";
import LinkItem from "../Links/Item.vue";

export default {
  props: ["fisios"],

  components: {
    LinkGroup,
    LinkItem,
  },
  methods: {
    go(id) {
      console.log("Hola");
      window.location.href = "/admin/fisio/"+id;
    },
  },
};
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
</style>
