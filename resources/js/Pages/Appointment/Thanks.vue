<template>
  <GuestLayout>
    <div class="row no-row container center">
      <div class="center my-2 row">
        <img src="/img/logo-large.png" alt="" />
      </div>
      <div class="row center card col-12 col-md-8 px-md-8 text-center pt-4 no-row">
        <div class="row center text-center py-2">
          <h4 class="font-bold text-xl color-orange">CITA CONFIRMADA</h4>
        </div>
        <hr />
        <div class="row mt-4">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="row mt-2">
          <p>
            Tu cita ha sido confirmada con el fisioterapeuta
            <strong>{{ appointment.fisio.name }} </strong>
          </p>
          <p>
            El día <strong>{{ formattedDate }}</strong>
          </p>
          <p>
            A las <strong>{{ appointment.start_time }}</strong>
          </p>
          <i class="conf mt-2"
            >Recibirás un mensaje de confirmación a tu Whatsapp, al igual que tu link de
            acceso a la plataforma.</i
          >

          <div class="btn-orange btn mb-2"> <a href="http://fisioacasa.pe"> Ir a fisioacasa </a></div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<script>
import GuestLayout from "../../Layouts/GuestLayout.vue";
import { format } from "date-fns";
import { addDays } from "date-fns";
import esLocale from "date-fns/esm/locale/es/index.js";
import { utcToZonedTime } from "date-fns-tz";

export default {
  components: {
    GuestLayout,
  },
  props: ["appointment"],
  data() {
    return {};
  },
  computed: {
    formattedDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      const date = utcToZonedTime(new Date(this.appointment.date), "America/Lima");
      const modifiedDate = addDays(date, 1);
      return format(modifiedDate, "eee d 'de' MMMM", { locale: esLocale, ...options });
    },
  },
};
</script>
<style scoped>
i {
  font-size: 3rem;
  color: #ed6c14;
}

.conf {
  font-size: 0.85rem;
  color: black;
  margin-bottom: 1rem;
}

.no-row {
  --bs-gutter-x: 0rem !important;
}

img {
  width: 70%;
}

@media (min-width: 1200px) {
  img {
    width: 35%;
    margin-bottom: 2rem;
  }
}
</style>
