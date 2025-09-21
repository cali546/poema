<template>
  <div class="musica">
    <audio controls autoplay loop>
      <source src="@/assets/amor.mp3" type="audio/mpeg" />
      Tu navegador no soporta audio.
    </audio>
  </div>
</template>

<script>
export default {
  name: "Musica",
};
</script>

<style scoped>
.musica {
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.musica:hover {
  opacity: 1;
}
</style>