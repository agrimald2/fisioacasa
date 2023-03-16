<template>
  <div class="col-12 col-md-4">
    <div class="card mb-4 mb-xl-0 orange-border">
      <div class="card-body text-center">
        <div class="small text-muted mb-4">
          <h6 class="mb-2">
          {{ mainIndication }}
          </h6>
          <p class="mt-2">
          {{ subIndication }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['mainIndication', 'subIndication'],
};
</script>
