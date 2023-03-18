<template>
  <div>
    <FisioterapeutasLayout :fisio="fisio">
      <div class="row" style="--bs-gutter-x: 0.75rem">
        <hr class="hr-orange" />
        <EditProfile
          v-if="status == 0"
          :fisio="fisio"
          :degrees="degrees"
          :especialties="especialties"
          :universities="universities"
          :hasAcademic="hasAcademic"
          :hasDocumentation="hasDocumentation"
        />
        <SentInformation v-else-if="status == 1" />
        <NotApproved v-else-if="status == 3" />

        <div class="row margin-center" v-if="status == 2">
          <ResumeData />
          <div class="row my-4 margin-center p-0">
            <PendingAppointments v-if="pendingAppointments.length != 0" :appointments="pendingAppointments" />
            <div v-else class="col-sm-6 md-col-12">
              <div class="card mb-4 text-center">
                <p class="color-orange font-bold">No tienes citas pendientes</p>
              </div>
            </div>
            <PastAppointments v-if="pastAppointments.length != 0" :appointments="pastAppointments"/>
            <div v-else class="col-sm-6 md-col-12">
              <div class="card mb-4 text-center">
                <p class="color-orange font-bold">Aún no haz realizado ninguna cita</p>
              </div>
            </div>
          </div>
          <div class="row my-4 margin-center p-0">
            <h4>Novedades y Consejos</h4>
            <News />
          </div>
        </div>
      </div>
    </FisioterapeutasLayout>
  </div>
</template>
<script>
import EditProfile from "./Profile/EditProfile.vue";
import FisioterapeutasLayout from "../../../Layouts/Fisio/FisioLayout.vue";
import SentInformation from "./SentInformation.vue";
import NotApproved from "./NotApproved.vue";
import ResumeData from "./ResumeData.vue";
import PendingAppointments from "./PendingAppointments.vue";
import PastAppointments from "./PastAppointments.vue";
import News from "./News.vue";
export default {
  props: [
    "fisio",
    "degrees",
    "especialties",
    "universities",
    "resume_url",
    "criminal_record_url",
    "hasAcademic",
    "hasDocumentation",
    "pendingAppointments",
    "pastAppointments",
  ],
  data() {
    return {
      status: this.fisio.status,
    };
  },
  components: {
    FisioterapeutasLayout,
    EditProfile,
    SentInformation,
    NotApproved,
    ResumeData,
    PendingAppointments,
    PastAppointments,
    News,
  },
  methods: {
    logout() {
      this.$inertia.post("/logout");
    },
  },
};
</script>

<style>
.notDone {
  color: #8392ab;
  border: 2px solid #ed6c14;
  background-color: #f1f1f1;
  border-radius: 10px;
}
.register_container {
  height: 100%;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding-left: 0px;
}
</style>
