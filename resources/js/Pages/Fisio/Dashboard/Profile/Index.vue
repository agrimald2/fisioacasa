<template>
  <div>
    <FisioterapeutasLayout :fisio="fisio">
      <Header :title="'MI PERFIL'" :subtitle="'Estos son tus datos personales'" />

      <div class="row" style="--bs-gutter-x: 0.75rem">
        <hr class="hr-orange" />
        <div class="col-md-4 col-12">
          <div class="card">
            <Photo :photoUrl="fisio.profile_photo_path" :fisioName="fisio.name" />
          </div>
        </div>
        <div class="col-md-8 col-12">
          <div class="card">
            <div class="row center no-pd">
              <div class="row center no-pd no-row">
                <div class="row center no-pd">
                  <div class="col-12 right_side">
                    <div class="row">
                      <div class="col-12 col-md-6 mt-2">
                        <label for="dni">DOCUMENTO DE IDENTIDAD</label>
                        <input
                          class="form-control"
                          id="dni"
                          type="tel"
                          placeholder="DNI"
                          aria-label="default input example"
                          v-model="fisio.document"
                        />
                      </div>
                      <div class="col-12 col-md-6 mt-2">
                        <label for="name">NOMBRE COMPLETO</label>
                        <input
                          class="form-control"
                          id="name"
                          type="text"
                          placeholder="NOMBRE COMPLETO"
                          aria-label="default input example"
                          v-model="fisio.name"
                        />
                      </div>
                      <div class="col-12 col-md-6 mt-2">
                        <label for="birthdate">FECHA DE NACIMIENTO</label>
                        <input
                          id="birthdate"
                          class="form-control"
                          type="date"
                          v-model="fisio.birthdate"
                        />
                      </div>
                      <div class="col-12 col-md-6 mt-2">
                        <label for="startDate">SEXO</label>
                        <div class="row center">
                          <div class="wrapper margin-center">
                            <input
                              type="radio"
                              name="select"
                              id="option-1"
                              checked
                              v-model="fisio.sex"
                            />
                            <input
                              type="radio"
                              name="select"
                              id="option-2"
                              checked
                              v-model="fisio.sex"
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
                      <div class="col-12 col-md-6 mt-2">
                        <label for="phone">WHATSAPP (Numero Peruano)</label>
                        <input
                          class="form-control"
                          id="phone"
                          type="tel"
                          placeholder="CELULAR"
                          aria-label="default input example"
                          v-model="fisio.phone"
                        />
                      </div>
                      <div class="col-12 col-md-6 mt-2">
                        <label for="email">EMAIL</label>
                        <input
                          class="form-control"
                          id="email"
                          type="tel"
                          placeholder="CORREO ELECTRÓNICO"
                          aria-label="default input example"
                          v-model="fisio.email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FisioterapeutasLayout>
  </div>
</template>
<script>
import FisioterapeutasLayout from "../../../../Layouts/Fisio/FisioLayout.vue";
import Photo from "./Photo.vue";
import Header from "../../../../Modules/UI/Header.vue";
export default {
  props: ["fisio"],
  data() {
    return {};
  },
  components: {
    FisioterapeutasLayout,
    Photo,
    Header,
  },
  methods: {},
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
