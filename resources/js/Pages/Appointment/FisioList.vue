<template>
  <div class="row px-2 center">
    <div class="card my-2 col-12 col-md-5 mx-md-4" v-for="doctor in doctors" :key="doctor.id"
    >
      <div class="d-flex">
        <div class="p-2">
          <div class="profilePhoto" :style="{ 'background-image': `url(${doctor.profilePhoto})` }"
          ></div>
          <h6>{{ doctor.name }}</h6>
        </div>
        <div class="p-2 flex-grow-1">
          <h4 class="card-title" style="margin-bottom: 0">
            <strong class="text-xl">S/{{ doctor.price }}</strong>
          </h4>
          <p class="card-text">
            <template v-for="n in doctor.rating" :key="n">
              <span class="fa fa-star colored"></span>
            </template>
            <template v-for="n in 5 - doctor.rating" :key="n">
              <span class="fa fa-star"></span>
            </template>
          </p>
          <button class="btn btn-orange mt-1 mx-auto my-1" style="padding: 0.4rem 0.4rem">
            Agendar Cita
          </button>
          <br />
          <a href="#" class="moreInfo" @click="showModal = doctor.id">Más información</a>
          <!--
          <a href="#" class="moreInfo" @click="showModal = doctor.id">Más información</a>
          <div v-if="showModal === doctor.id">
            <more-info-fisio :doctor="doctor" @close="showModal = null" />
          </div>
          -->
        </div>
      </div>
    </div>
    <a>
      <i class="center mb-2" style="text-decoration: underline; color: #ed6c14">
        Ver más
      </i>
    </a>
  </div>
</template>

<script>
//import MoreInfoFisio from './MoreInfoFisio.vue';
export default {
  props: ["appointmentInfo", "fa"],
  components: {  },
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: "Dr. John Doe",
          profilePhoto:
            "data:image/jpeg;base64,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",
          price: "100",
          rating: 4,
          distance: 0.8,
          duration: 60,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod massa sit amet diam fringilla, nec suscipit velit eleifend. Morbi a gravida nunc, id fermentum est. Nunc sodales ultrices dui.",
          academics: [
            { grade: "Licenciado", especiality: "Masajes Relajantes" },
            { grade: "Especialista", especiality: "Quiropraxia" },
          ],
        },
        {
          id: 2,
          name: "Dr. Jane Doe",
          profilePhoto:
            "https://pbs.twimg.com/profile_images/674042354475532288/H-7kQgSN_400x400.jpg",
          price: "150",
          rating: 5,
          distance: 1.2,
          duration: 75,
          description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod massa sit amet diam fringilla, nec suscipit velit eleifend. Morbi a gravida nunc, id fermentum est. Nunc sodales ultrices dui.",
          academics: [
            { grade: "Licenciado", especiality: "Masajes Relajantes" },
            { grade: "Especialista", especiality: "Quiropraxia" },
          ],
        },
        {
          id: 3,
          name: "Dr. Bob Smith",
          profilePhoto:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCEcEw0XTtuqJTkXeGXUMF-vBzRZdlKWM1ziZPyhZ_QiDZH77sd9F56MP8Cd0LUHyA1c&usqp=CAU",
          price: "200",
          rating: 3,
          distance: 2.3,
          duration: 30,
          description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod massa sit amet diam fringilla, nec suscipit velit eleifend. Morbi a gravida nunc, id fermentum est. Nunc sodales ultrices dui.",
          academics: [
            { grade: "Licenciado", especiality: "Masajes Relajantes" },
            { grade: "Especialista", especiality: "Quiropraxia" },
          ],
        },
      ],
      showModal: null,
    };
  },
};
</script>

<style scoped>
.moreInfo {
  text-decoration: underline;
  font-size: 0.8rem;
  color: #00699e;
  font-weight: 600;
}
.row {
  --bs-gutter-x: 0;
}
p {
  margin-top: 0px;
}
.card-text {
  margin-bottom: 2px;
}
.profilePhoto {
  width: 100px;
  height: 100px;
  /*border: 1px solid gainsboro;*/
  margin-bottom: 2px;
  border-radius: 5px;
  background-size: cover;
  background-color: #00699e;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-enter-active,
.modal-leave-active {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-to {
  opacity: 1;
}

.colored {
  color: #ed6c14;
}
</style>
