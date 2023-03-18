<template>
  <div>
    <FisioterapeutasLayout :fisio="fisio">
      <Header :title="title" :subtitle="subtitle" />
      <Indications :mainIndication="mainIndication" :subIndication="subIndication" />
      <div class="col-12 col-md-8">
        <div class="mb-2 mb-xl-0">
          <div class="card" v-if="actual_fare">
            <div class="card-body text-center row">
              <h5 class="text-align">TARIFA ACTUAL</h5>
              <hr />
              <div class="row margin-center">
                <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-capitalize font-weight-bold">
                            Precio Final
                          </p>
                          <h5 class="font-weight-bolder mb-0">S/. {{ actual_fare }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-capitalize font-weight-bold">
                            Ganancia Neta
                          </p>
                          <h5 class="font-weight-bolder mb-0">S/. {{ actual_win }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-body text-center row">
              <h5 class="text-align mt-4">ACTUALIZAR TARIFA</h5>
              <hr class="bg-orange" />
              <div class="col-12 col-md-6 mt-2">
                <label for="search-input">QUIERO GANAR</label>
                <input
                  id="search-input"
                  v-model="amountExpected"
                  type="tel"
                  class="form-control text-center"
                  placeholder="S/."
                />
              </div>
              <div class="col-12 col-md-6 mt-2">
                <label for="search-input">PRECIO FINAL </label>
                <input
                  disabled
                  id="search-input"
                  v-model="finalAmount"
                  type="tel"
                  class="form-control text-center"
                  placeholder="S/."
                />
              </div>
              <h5 class="mt-4">¿CUÁNTO TE PAGAMOS?</h5>
              <h6 v-if="finalAmount">S/ {{ parseInt(amountExpected) + 15 }}</h6>
              <h5 class="mt-4">¿QUÉ INCLUYE EL PRECIO FINAL?</h5>
              <p class="list">Te damos S/15 para que te movilices</p>
              <p class="list">% De nuestra comisión</p>
              <p class="list">Gastos de la plataforma</p>
              <button @click="updatePrice" class="btn bg-orange mt-2">
                GUARDAR TARIFA - S/{{ finalAmount }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </FisioterapeutasLayout>
  </div>
</template>
<script>
import axios from "axios";

import FisioterapeutasLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import Header from "../../../../Modules/UI/Header.vue";
import Indications from "../../../../Modules/UI/Indications.vue";

export default {
  props: ["actual_fare", "actual_win","fisio"],
  data() {
    return {
      amountExpected: null,
      finalAmount: 0,
      transport: 15,
      appointment_price: 0,
      comision: 20,
      gateawayComision: 4,
      title: "Agrega tu precio",
      subtitle: "Este será tu precio por sesión inicial",
      mainIndication: "¿CUÁNTO QUIERES GANAR?",
      subIndication:
        "La plataforma calculará el precio final para el cliente, agregando nuestras comisiones y gastos por cada servicio brindado.",
    };
  },
  components: {
    FisioterapeutasLayout,
    Header,
    Indications,
  },
  computed: {
    finalAmount() {
      let initialAmount = parseInt(this.amountExpected);
      let comision = this.comision;
      let transport = this.transport;

      if (!initialAmount) {
        return 0;
      }

      initialAmount += initialAmount * (comision / 100);
      let sellCost = (initialAmount += transport);
      initialAmount += sellCost * (18 / 100);
      let gateaway = sellCost * (this.gateawayComision / 100) + 1;

      initialAmount += gateaway;

      this.appointment_price = initialAmount = Math.ceil(initialAmount / 5) * 5;
      return this.appointment_price;
    },
  },
  methods: {
    updatePrice() {
      axios
        .post(`/fisio/updatePrice`, {
          appointment_price: this.appointment_price,
          fisio_price: this.amountExpected,
          transport_price: this.transport,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
