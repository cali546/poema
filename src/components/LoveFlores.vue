<template>
  <div class="flores" @click="contadorClicks++">
    <h2>🌻 Toca 10 flores para continuar 🌻</h2>
    <p class="contador">{{ contadorClicks }}/10</p>
    <div
      v-for="n in 15"
      :key="n"
      class="flor"
      :style="{
        left: Math.random() * 100 + 'vw',
        animationDuration: 5 + Math.random() * 5 + 's',
        fontSize: 20 + Math.random() * 15 + 'px'
      }"
      @click.stop="florClicada"
    >
      {{ flores[Math.floor(Math.random() * flores.length)] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LoveFlores",
  data() {
    return {
      flores: ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐', '🥀', '🪷'],
      contadorClicks: 0
    };
  },
  methods: {
    florClicada() {
      this.contadorClicks++;
      
      if (this.contadorClicks >= 10) {
        this.$emit('mostrarCarta');
      }
    }
  }
};
</script>

<style scoped>
.flores {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff8dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.flores h2 {
  color: #c4a484;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px 25px;
  border-radius: 10px;
}

.contador {
  color: #a67c52;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 8px;
}

.flor {
  position: absolute;
  top: -10%;
  animation: caer linear infinite;
  z-index: 1;
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.flor:hover {
  transform: scale(1.2);
}

@keyframes caer {
  to {
    transform: translateY(110vh) rotate(360deg);
  }
}
</style>