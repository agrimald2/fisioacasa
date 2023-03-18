<template>
  <div>
    <button
      class="btn btn-orange mt-1 mx-auto my-1"
      style="padding: 0.4rem 0.4rem; border-radius: 5px"
      data-toggle="modal"
      data-target="#paymentModal"
    >
      Agendar
    </button>
    <div
      style="max-width: 100vw; max-height: 100vh; padding-top: 10vw"
      class="modal fade"
      id="paymentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="paymentModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="card mx-auto mb-2">
              <h5 class="heading text-center color-blue font-bold text-xl">
                PAGA TU CITA {{ location }}
              </h5>
              <p class="heading text-center" style="color: black">
                Con el Fisioterapeuta
                <span class="info"> {{ appointmentInfo.fisio.name }} </span> el día
                <span class="info">{{ formattedDate }} </span> a las
                <span class="info">{{ appointmentInfo.start_time }}</span>
              </p>
              <p class="center">
                Precio : S/.{{ appointmentInfo.fisio.appointment_price }}
              </p>
            </div>
            <div class="card mx-auto" style="padding-top: 0">
              <form class="row card-details">
                <div class="col-12">
                  <div class="form-group mb-0">
                    <p class="text-warning mb-2">Número Tarjeta</p>
                    <input
                      type="text"
                      name="card-num"
                      placeholder="1234 5678 9012 3457"
                      size="17"
                      id="cno"
                      minlength="19"
                      maxlength="19"
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-warning mb-0">Nombre en Tarjeta</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Titular de la tarjeta"
                      size="17"
                    />
                  </div>
                  <div class="form-group pt-2">
                    <div class="row d-flex">
                      <div class="col-sm-2 col-6">
                        <p class="text-warning mb-0">Mes</p>
                        <input
                          type="text"
                          name="exp"
                          placeholder="MM"
                          size="2"
                          id="exp"
                          minlength="2"
                          maxlength="2"
                        />
                      </div>
                      <div class="col-sm-3 col-6">
                        <p class="text-warning mb-0">Año</p>
                        <input
                          type="text"
                          name="exp"
                          placeholder="YYYY"
                          id="exp"
                          size="4"
                          minlength="4"
                          maxlength="4"
                        />
                      </div>
                      <div class="col-sm-3">
                        <p class="text-warning mb-0">CVV</p>
                        <input
                          type="tel"
                          pattern="[0-9]*"
                          name="cvv"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="1"
                          minlength="3"
                          maxlength="3"
                        />
                      </div>
                      <div class="row mt-4">
                        <loader v-if="loading" />
                        <button
                          v-if="!loading"
                          type="button"
                          class="btn btn-primary paytext"
                          @click="payAppointment()"
                        >
                          PAGAR S/{{ appointmentInfo.fisio.appointment_price }}
                          <i class="fas fa-arrow-right px-3 py-2"></i>
                        </button>
                      </div>
                      <div class="row mt-2">
                        <button
                          type="button"
                          class=""
                          data-dismiss="modal"
                          style="text-decoration: underline"
                        >
                          Atrás
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import loader from "../../Modules/UI/Loader.vue";
import { ref } from "vue";
import { format } from "date-fns";
import { addDays } from "date-fns";
import esLocale from "date-fns/esm/locale/es/index.js";
import { utcToZonedTime } from "date-fns-tz";

export default {
  props: ["appointmentInfo", "Appdate", "patient", "location"],
  data() {
    return {
      loading: false,
      appointmentInfo: this.appointmentInfo,
      Appdate: this.Appdate,
      patient: this.patient,
    };
  },
  computed: {
    formattedDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      const date = utcToZonedTime(new Date(this.Appdate), "America/Lima");
      const modifiedDate = addDays(date, 1);
      return format(modifiedDate, "eee d 'de' MMMM", { locale: esLocale, ...options });
    },
  },
  watch: {},
  mounted() {},
  components: {
    loader,
  },
  methods: {
    payAppointment() {
      this.loading = true;
      axios
        .post(`/appointment/payAppointment`, {
          patient_id: this.patient.id,
          fisio_id: this.appointmentInfo.fisio.id,
          schedule_id: this.appointmentInfo.id,
          date: this.Appdate,
          start_time: this.appointmentInfo.start_time,
          end_time: this.appointmentInfo.end_time,
          price: this.appointmentInfo.fisio.appointment_price,
          fisio_win: this.appointmentInfo.fisio.fisio_price,
          transport_price: this.appointmentInfo.fisio.transport_price,
          fisio_name: this.appointmentInfo.fisio.name,
          location_id: this.location,
        })
        .then((response) => {
          console.log("pagado");
          window.location.href = "/appointment/thanks/" + response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.card {
  border: none;
  min-width: 350px;
  border-radius: 15px;
  padding: 25px;
  padding-bottom: 5px !important;
}

.card img {
  transform: translate(160px, -10px);
}
.card img:hover {
  cursor: pointer;
}
.text-warning {
  font-size: 12px;
  font-weight: 500;
  color: #ed6c14 !important;
}
#cno {
  transform: translateY(-10px);
}
input {
  border-bottom: 1.5px solid #e8e5d2 !important;
  font-weight: bold;
  border-radius: 0;
  border: 0;
}
.form-group input:focus {
  border: 0;
  outline: 0;
}
.col-sm-5 {
  padding-left: 90px;
}
.btn {
  background: #ed6c14 !important;
  border: none;
  border-radius: 30px;
}
.btn:focus {
  box-shadow: none;
}
input {
  width: 100%;
  margin-bottom: 10px;
}
img {
  width: 70%;
}
.no-row {
  --bs-gutter-x: 0rem !important;
}

.color-orange {
  color: #ed6c14;
}
.color-blue {
  color: #00699e;
}
.paytext {
  font-size: 1.2rem;
}
</style>
