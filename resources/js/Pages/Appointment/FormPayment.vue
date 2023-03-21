<template>
  <button
    class="btn btn-orange mt-1 mx-auto my-1"
    style="padding: 0.4rem 0.4rem; border-radius: 5px"
    data-toggle="modal"
    data-target="#paymentModal"
  >
    Agendar
  </button>
  <div
    style="max-width: 100vw; max-height: 100vh"
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
                <div class="form-group">
                  <p class="text-warning mb-0">Nombre en Tarjeta</p>
                  <input
                    v-model="name_titular"
                    type="text"
                    placeholder="Titular (NOMBRE)"
                    size="17"
                  />
                </div>
                <div class="form-group">
                  <p class="text-warning mb-0">Apellido en Tarjeta</p>
                  <input
                    v-model="last_name_titular"
                    type="text"
                    placeholder="Titular (APELLIDO)"
                    size="17"
                  />
                </div>
                <div class="form-group">
                  <p class="text-warning mb-0">Email en Tarjeta</p>
                  <input
                    type="email"
                    v-model="email"
                    name="email"
                    placeholder="Email del Titular"
                    size="17"
                  />
                </div>
                <div class="form-group mb-0">
                  <p class="text-warning mb-2">Número Tarjeta</p>
                  <input
                    type="text"
                    name="card-number_card"
                    :mask="mask_credit_card"
                    v-model="number_card"
                    placeholder="1234 5678 9012 3457"
                    size="17"
                    id="cno"
                    minlength="19"
                    maxlength="19"
                  />
                </div>
                <div class="form-group pt-2">
                  <div class="row d-flex">
                    <div class="col-sm-4 col-6">
                      <p class="text-warning mb-0">Mes</p>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        v-model="month_expiration"
                      >
                        <option
                          v-for="(item, index) in items_months"
                          :key="index"
                          :value="item.value"
                        >
                          {{ item.text }}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-4 col-6">
                      <p class="text-warning mb-0">Año</p>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        v-model="year_expiration"
                      >
                        <option v-for="i in 5" :key="i" :value="i + 22">
                          20{{ i + 22 }}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <p class="text-warning mb-0">CVV</p>
                      <input
                        name="cvc"
                        label="CVC"
                        type="number"
                        v-model="cvv2"
                        placeholder="&#9679;&#9679;&#9679;"
                        pattern="[0-9]*"
                        size="3"
                        minlength="3"
                        maxlength="3"
                      />
                    </div>
                    <div class="row mt-4">
                      <loader v-if="loading" />
                      <p v-if="failed" style="color: darkred; font-weight: bold">
                        ¡REVISA LOS DATOS DE LA TARJETA!
                      </p>
                      <button
                        v-if="!loading"
                        type="button"
                        class="btn btn-primary paytext"
                        @click="pay"
                        :disabled="!valid"
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
  data: () => ({
    failed: false,
    valid: true,
    number_card: "",
    mask_credit_card: "credit-card",
    rules_cvc: {
      required: (v) => !!v || "El cvc es requerido",
      min: (v) => (v && v.length >= 3) || "Mínimo 3 números",
      max: (v) => (v && v.length <= 4) || "Máximo 4 números",
    },
    items_months: [
      { text: "01 - Enero", value: "01" },
      { text: "02 - Febrero", value: "02" },
      { text: "03 - Marzo", value: "03" },
      { text: "04 - Abril", value: "04" },
      { text: "05 - Mayo", value: "05" },
      { text: "06 - Junio", value: "06" },
      { text: "07 - Julio", value: "07" },
      { text: "08 - Agosto", value: "08" },
      { text: "09 - Septiembre", value: "09" },
      { text: "10 - Octubre", value: "10" },
      { text: "11 - Noviembre", value: "11" },
      { text: "12 - Diciembre", value: "12" },
    ],
    amount: 150,
    name_titular: "",
    email: "",
    last_name_titular: "",
    month_expiration: "",
    year_expiration: "",
    cvv2: "",
    rules_year: [
      (v) => !!v || "El año de expiración es requerido",
      (v) => (v && v.length >= 2) || "Mínimo 2 números",
      (v) => (v && v.length <= 2) || "Máximo 2 números",
    ],
    emailRules: [
      (v) => !!v || "El correo electrónico es requerido",
      (v) => /.+@.+/.test(v) || "El correo electrónico debe de ser valido",
    ],
    token: "",
    endpoint_sandbox_openpay: "https://sandbox-api.openpay.pe/v1/",
    endpoint_payament: "/api/charge",
    deviceSessionId: "",
    openpay_id: "mrvfi7f4rsnkp9egkous",
    openpay_key: "pk_353a0f93f26c443f9b01e99970893fc5",
    openpay_sandbox_mode: true,
    mesageButton: "Pagar",
    iconButton: "attach_money",
    colorButton: "primary",
  }),
  mounted() {
    // sistema de fraude
    OpenPay.setId(this.openpay_id);
    OpenPay.setApiKey(this.openpay_key);
    OpenPay.setSandboxMode(this.openpay_sandbox_mode);
    this.deviceSessionId = OpenPay.deviceData.setup();
  },
  computed: {
    formattedDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      const date = utcToZonedTime(new Date(this.Appdate), "America/Lima");
      const modifiedDate = addDays(date, 1);
      return format(modifiedDate, "eee d 'de' MMMM", { locale: esLocale, ...options });
    },
  },
  methods: {
    createAppointment() {
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
    pay() {
      this.loading = true;
      // generate token para realizar el cargo
      OpenPay.token.create(
        {
          holder_name: this.name_titular + " " + this.last_name_titular,
          card_number: this.number_card,
          cvv2: this.cvv2,
          expiration_month: this.month_expiration,
          expiration_year: this.year_expiration,
        },
        (response) => {
          this.token = response.data.id;
          console.log("Pagado");
          this.createAppointment();
        },
        (error) => {
          console.log(error);
          console.log("No pasó la tarjeta");
          this.failed = true;
          this.loading = false;
          console.table(error);
          console.log(error.data.description);
        }
      );
      // payment in OpenPay
      axios
        .post(this.endpoint_payament, {
          name: this.name_titular,
          last_name: this.last_name_titular,
          amount: this.amount,
          email: this.email,
          token: this.token,
          deviceSessionId: this.deviceSessionId,
        })
        .then((response) => {
          this.mesageButton = "Pagado";
          this.loadingPay = false;
          this.iconButton = "check_circle";
          this.colorButton = "green";
        });
    },
  },
  components: {
    loader,
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
>
