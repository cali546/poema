<template>
  <div class="hoja">
    <p>{{ texto }}</p>
    <div v-if="pagina === 4" class="audio-mensaje">
      <p>🎧 Escucha mi mensaje especial</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoveHojas",
  props: ["texto", "pagina"]
};
</script>

<style scoped>
.hoja {
  padding: 25px;
  border: 1px solid #c4a484;
  border-radius: 5px;
  background: rgba(255, 250, 240, 0.9);
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
  font-size: 1.1rem;
  line-height: 1.7;
  color: #3e2c1b;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.audio-mensaje {
  margin-top: 20px;
  padding: 15px;
  background: rgba(233, 30, 99, 0.1);
  border-radius: 8px;
  border: 1px dashed #e91e63;
  color: #e91e63;
  font-weight: bold;
}
</style>