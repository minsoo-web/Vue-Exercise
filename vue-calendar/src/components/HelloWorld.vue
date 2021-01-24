<template>
  <div>
    <vc-date-picker is-range v-model="range" />
    <p>
      {{ range.start }}
    </p>
    <p>
      {{ range.end }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: {
        start: Date.now(),
        end: new Date()
      }
    };
  }
};
</script>

<style></style>
