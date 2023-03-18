<template>
  <GuestLayout>
    <div class="row pre_container">
      <div class="row center mb-3">
        <img src="/img/logo-large.png" alt="" />
      </div>
      <div class="row center no-row">
        <div v-if="!showForm" class="row register_container center py-2">
          <div class="row">
            <h6 style="text-align: center" class="mt-1">Ingresa tu DNI</h6>
          </div>
          <div class="row">
            <input
              class="form-control my-2"
              type="tel"
              placeholder="DNI"
              aria-label="default input example"
              v-model="dni"
            />
            <loader v-if="loading" />
            <button
              v-if="dni.length == 8 && !loading"
              @click="validateDNI()"
              class="btn btn-orange mt-1"
            >
              Siguiente
            </button>
          </div>
        </div>
        <div v-if="showForm" class="row form_container center">
          <div class="col-5 left_side"></div>
          <div class="col-12 col-md-7 right_side">
            <div v-if="!dni" class="row mt-2">
              <label for="dni">DOCUMENTO DE IDENTIDAD</label>
              <input
                class="form-control"
                autocomplete="off"
                type="tel"
                placeholder="DNI"
                aria-label="default input example"
                v-model="dni"
              />
            </div>
            <div class="row mt-2">
              <label for="name">NOMBRES</label>
              <input
                class="form-control"
                autocomplete="off"
                id="name"
                type="text"
                placeholder="NOMBRE COMPLETO"
                aria-label="default input example"
                v-model="name"
              />
            </div>
            <div class="row mt-2">
              <label for="name">APELLIDOS</label>
              <input
                class="form-control"
                autocomplete="off"
                id="surname"
                type="text"
                placeholder="APELLIDOS"
                aria-label="default input example"
                v-model="surname"
              />
            </div>
            <div class="row mt-2">
              <label for="birthdate">FECHA DE NACIMIENTO</label>
              <input
                id="birthdate"
                class="form-control"
                type="date"
                v-model="birthdate"
              />
            </div>
            <div class="row mt-2">
              <label for="startDate">SEXO</label>
              <div class="row center">
                <div class="wrapper">
                  <input
                    type="radio"
                    value="M"
                    name="select"
                    id="option-1"
                    v-model="sex"
                  />
                  <input
                    type="radio"
                    value="F"
                    name="select"
                    id="option-2"
                    v-model="sex"
                  />
                  <label for="option-1" class="option option-1">
                    <div class="dot"></div>
                    <span>Masculino</span>
                  </label>
                  <label for="option-2" class="option option-2">
                    <div class="dot"></div>
                    <span>Femenino</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <label for="phone">WHATSAPP (Número Peruano)</label>
              <input
                autocomplete="off"
                class="form-control"
                id="phone"
                type="tel"
                pattern="9[0-9]{0,8}"
                placeholder="CELULAR"
                aria-label="default input example"
                v-model="phone"
              />
            </div>
            <div class="row mt-2">
              <label for="email">EMAIL</label>
              <input
                autocomplete="off"
                class="form-control"
                id="email"
                type="tel"
                placeholder="CORREO ELECTRÓNICO"
                aria-label="default input example"
                v-model="email"
              />
            </div>
            <!--
                <div class="row mt-2">
                <label for="password">CONTRASEÑA</label>
                <input
                    class="form-control"
                    id="password"
                    type="password"
                    placeholder="CORREO ELECTRÓNICO"
                    aria-label="default input example"
                    v-model="password"
                />
                </div>
            -->
            <div class="row mt-2">
              <loader v-if="loading" />
              <button
                v-if="email && phone && !loading"
                class="btn btn-orange mt-3"
                @click="createPatient()"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
<script>
import loader from "../../Modules/UI/Loader.vue";
import axios from "axios";
import GuestLayout from "../../Layouts/GuestLayout.vue";
export default {
  data() {
    return {
      loading: false,
      dni: "",
      document: "",
      name: "",
      surname: "",
      birthdate: "",
      sex: "",
      email: "",
      phone: "",
      //    password: "",
      title: "HOLA",
      showForm: 0,
      fisio: [],
    };
  },
  components: {
    GuestLayout,
    loader,
  },
  methods: {
    validateDNI() {
      this.loading = true;
      axios
        .get("/appointment/validateDNI", {
          params: {
            dni: this.dni,
          },
        })
        .then((response) => {
          if (response.data == "SI") {
            window.location.href = "/appointment/" + this.dni;
          } else if (response.data == "ANTIGUO") {
            //TODO Seleccionar Fisioterapeuta antiguo
            window.location.href = "/appointment/" + this.dni;
            this.loading = false;
          } else {
            this.showForm = 1;
            this.fisio = response.data;
            this.name = response.data.name;
            this.surname = response.data.surname;
            this.birthdate = response.data.birthdate;
            this.sex = response.data.sex;
            this.email = response.data.email;
            this.phone = response.data.phone;
            //this.password = response.data.password;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    createPatient() {
      this.loading = true;
      axios
        .post("/appointment/createPatient", {
          document: this.dni,
          name: this.name,
          surname: this.surname,
          birthdate: this.birthdate,
          sex: this.sex,
          email: this.email,
          phone: this.phone,
          //    password: this.password,
        })
        .then((response) => {
          window.location.href = "/appointment/" + this.dni;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.pre_container {
  --bs-gutter-x: 0rem !important;
}
body {
  overflow-x: hidden;
}
img {
  width: 20rem !important;
}
.register_container {
  height: 100%;
  width: 30vh;
  border: 1px solid grey;
  border-radius: 5%;
  background-color: whitesmoke;
}

.form_container {
  height: 100%;
  width: 90vh;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: whitesmoke;
  text-align: center;
  padding-left: 0px;
}

.left_side {
  height: 100%;
  background-size: cover;
  background-image: url("/img/fisioterapeuta.png");
  border-radius: 10px;
}
.right_side {
  padding: 1rem 2.5rem;
}

.btn-next {
  background-color: #ed6c14;
  color: white;
}

.wrapper {
  display: inline-flex;
  background: #fff;
  height: 50px;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 2.5px;
  padding: 10px 7.5px;
  box-shadow: 2.5px 1.5px 15px rgba(0, 0, 0, 0.2);
}
.wrapper .option {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 5px;
  border-radius: 2.5px;
  cursor: pointer;
  padding: 0 5px;
  border: 1px solid lightgrey;
  transition: all 0.3s ease;
}
.wrapper .option .dot {
  height: 10px;
  width: 10px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .option .dot::before {
  position: absolute;
  content: "";
  top: 2px;
  left: 2px;
  width: 6px;
  height: 6px;
  background: #00699e;
  border-radius: 25%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}
input[type="radio"] {
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border-color: #00699e;
  background: #00699e;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot {
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before {
  opacity: 1;
  transform: scale(1);
}
.wrapper .option span {
  font-size: 10px;
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span {
  color: #fff;
}

.no-row {
  --bs-gutter-x: 0rem !important;
}

@media (max-width: 721px) {
  .left_side {
    display: none;
  }
}
</style>
