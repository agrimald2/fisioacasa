<template>
  <Header :title="title" :subtitle="subtitle" />
  <div class="col-12 card mt-4 mb-4">
    <div class="row">
      <DaySchedule
        v-for="day in schedule"
        :key="day.weekday"
        :day="day.weekday"
        :schedules="day.schedules"
        :headerColor="'#00699e'"
      />

        <button class="btn btn-orange" @click="populateSchedule(this.schedule, this.schedules)">POPU</button>
    </div>
  </div>
</template>
<script>
import Header from "../../../../Modules/UI/Header.vue";
import DaySchedule from "./DaySchedule.vue";
import moment from "moment";

export default {
  props: ["schedules"],
  components: {
    Header,
    DaySchedule,
  },
  data() {
    return {
      schedule: [
        {
          weekday: "Lunes",
          weekday_number: 0,
          schedules: [],
        },
        {
          weekday: "Martes",
          weekday_number: 1,
          schedules: [],
        },
        {
          weekday: "Miercoles",
          weekday_number: 2,
          schedules: [],
        },
        {
          weekday: "Jueves",
          weekday_number: 3,
          schedules: [],
        },
        {
          weekday: "Viernes",
          weekday_number: 4,
          schedules: [],
        },
        {
          weekday: "Sabado",
          weekday_number: 5,
          schedules: [],
        },
        {
          weekday: "Domingo",
          weekday_number: 7,
          schedules: [],
        },
      ],
      title: "Horario semanal",
      subtitle: "Haz click sobre un bloque para eliminarlo",
    };
  },

  mounted() {
    //this.populateSchedule(this.schedule, this.schedules);
    //console.log(this.populateSchedule(this.schedule, this.schedules))
  },

  methods: {
    populateSchedule(schedule, blocks) {
      // Loop through each weekday in the schedule array
      schedule.forEach((weekday) => {
        // Filter the blocks array to get the blocks for this weekday
        let blocksForWeekday = blocks.filter((block) => {
          return block.week_day === weekday.weekday_number;
        });

        // Add each block to the schedules array for this weekday
        blocksForWeekday.forEach((block) => {
          weekday.schedules.push(block);
        });
      });

      this.schedule = schedule;
      return schedule;
    },
  },
};
</script>
<style scoped></style>
