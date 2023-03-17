<template>
  <div class="col-12 col-md-4 card see_days">
    <div class="card">
      <div class="card-header day_title" :style="{ 'background-color': headerColor }">
        {{ day }} {{schedules}}
      </div>
      <!--
      <div class="card-body">
        <div
          v-for="schedule in schedules"
          :key="schedule.id"
          class="schedule-block"
          @click="deleteBlock(schedule.id)"
        >
          <div class="schedule-time">
            {{ schedule.start_time }} - {{ schedule.end_time }} -
            <span class="location_tag">{{ schedule.location.name }}</span>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    schedules: {
      type: Array,
      required: true,
    },
    headerColor: {
      type: String,
      default: "#007bff",
    },
  },
  methods: {
    deleteBlock(id) {
      axios
        .post(`/fisio/deleteSchedule/${id}`)
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

<style>
.location_tag {
  padding: 0.3rem;
  background-color: #ed6c14;
  border-radius: 5%;
  color: white;
  font-size: 0.8rem;
}
.schedule-block {
  padding: 10px;
  cursor: pointer;
}
.schedule-time {
  font-weight: bold;
}
.day_title {
  font-size: 1.5rem;
  color: white;
  text-align: center;
}
.schedule-block {
  border: 2px solid #ed6c14;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}
.see_days {
  margin-top: 1.5rem;
}
</style>
