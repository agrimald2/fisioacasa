<template>
  <div class="col-12 card mt-4 mb-4">
    <div class="row">
      <h4 class="text-center up">{{title}}</h4>
      <hr style="width: 50vw; margin-right: auto; margin-left: auto" />
      <p class="text-center">{{subtitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle'],
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.up{
  text-transform: uppercase;
}
</style>
