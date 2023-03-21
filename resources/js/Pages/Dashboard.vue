<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <link-group title="Datos de la aplicación">
            <link-item label="Fisioterapeutas" icon="fa-user-md" @click="go('admin.fisios')"/>
            <link-item label="Pacientes" icon="fa-hands-helping" @click="go('assistants.index')"/>
            <link-item label="Citas" icon="fa-hospital-user" @click="go('patients.index')"/>
            <link-item label="Estadística" icon="fa-building" @click="go('offices.index')" />
          </link-group>
          <link-group title="Registros Maestros">
            <link-item label="Transporte" icon="fa-user-md" @click="go('doctors.index')"/>
            <link-item label="Universidades" icon="fa-hands-helping" @click="go('assistants.index')"/>
            <link-item label="Especialidades" icon="fa-hospital-user" @click="go('patients.index')"/>
            <link-item label="Grados" icon="fa-building" @click="go('offices.index')" />
          </link-group>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script>
import LinkGroup from "../Pages/Admin/Links/Group.vue";
import LinkItem from "../Pages/Admin/Links/Item.vue";

export default {
  props: [],

  components: {
    LinkGroup,
    LinkItem,
  },
  methods: {
    go(routeName) {
      const url = route(routeName);
      this.$inertia.visit(url);
    },
  },
};
</script>
