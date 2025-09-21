<template>
  <div class="poema">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Poema",
};
</script>

<style scoped>
.poema {
  font-style: italic;
  font-size: 18px;
  color: #4a2f18;
  margin: 10px 0;
}
</style>