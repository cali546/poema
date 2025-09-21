<template>
  <div class="portada">
    <div class="lluvia-petalos">
      <span v-for="n in 25" :key="n" class="petalo" :style="getPetalStyle()">🌸</span>
    </div>
    
    <div class="contenido-portada">
      <h1 class="titulo-animado">💖 Bienvenida Esta Es Mi Segunda Confesion XD💖</h1>
      <p class="subtitulo-animado">Este ramo es solo el comienzo...</p>
      
      <!-- Ramo de flores que se arma -->
      <div class="ramo-container">
        <div class="flor" v-for="(flor, index) in flores" :key="index" 
             :class="['flor-' + (index + 1)]" :style="getFlorStyle(index)">
          {{ flor.emoji }}
        </div>
        <div class="cinta">🎀</div>
      </div>
      
      <button @click="$emit('empezar')" class="btn-animado">
        <span class="btn-texto">Abrir Mi Corazón</span>
        <span class="btn-efecto">💝</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LovePortada",
  data() {
    return {
      flores: [
        { emoji: '🌻', delay: 0.2 },
        { emoji: '🌻', delay: 0.4 },
        { emoji: '🌻', delay: 0.6 },
        { emoji: '🌻', delay: 0.8 },
        { emoji: '🌻', delay: 1.0 },
        { emoji: '🌼', delay: 1.2 },
        { emoji: '🌼', delay: 1.4 },
        { emoji: '🌸', delay: 1.6 },
        { emoji: '🌸', delay: 1.8 },
        { emoji: '🌹', delay: 2.0 }
      ]
    };
  },
  methods: {
    getPetalStyle() {
      return {
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 3 + 's',
        animationDuration: 4 + Math.random() * 3 + 's',
        fontSize: 12 + Math.random() * 10 + 'px',
        opacity: Math.random() * 0.7 + 0.3
      };
    },
    getFlorStyle(index) {
      return {
        animationDelay: this.flores[index].delay + 's'
      };
    }
  }
};
</script>

<style scoped>
.portada {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('@/assets/fondo_castillo.jpg') no-repeat center center/cover;
  color: white;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
  position: relative;
  overflow: hidden;
}

.lluvia-petalos {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.petalo {
  position: absolute;
  top: -50px;
  animation: caerPetalo linear infinite;
  z-index: 1;
  user-select: none;
  opacity: 0.6;
}

@keyframes caerPetalo {
  0% {
    transform: translateY(-100px) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) rotate(360deg) scale(1.2);
    opacity: 0;
  }
}

.contenido-portada {
  text-align: center;
  z-index: 10;
  background: rgba(139, 69, 19, 0.3);
  padding: 40px;
  border-radius: 25px;
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
  animation: aparecer 1.5s ease-out;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.titulo-animado {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  animation: tituloLatido 2s infinite;
}

@keyframes tituloLatido {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.subtitulo-animado {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #fff8dc;
  font-style: italic;
  animation: parpadeo 3s infinite;
}

@keyframes parpadeo {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Ramo de flores */
.ramo-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flor {
  position: absolute;
  font-size: 2.5rem;
  animation: aparecerFlor 1s ease-out forwards;
  opacity: 0;
  transform: translateY(100px) scale(0);
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.8));
}

@keyframes aparecerFlor {
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0) rotate(-180deg);
  }
  70% {
    transform: translateY(-10px) scale(1.1) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* Posiciones específicas para cada flor */
.flor-1 { transform: translate(-60px, -30px); }
.flor-2 { transform: translate(-30px, -50px); }
.flor-3 { transform: translate(0px, -60px); }
.flor-4 { transform: translate(30px, -50px); }
.flor-5 { transform: translate(60px, -30px); }
.flor-6 { transform: translate(-40px, -10px); }
.flor-7 { transform: translate(-20px, -20px); }
.flor-8 { transform: translate(20px, -20px); }
.flor-9 { transform: translate(40px, -10px); }
.flor-10 { transform: translate(0px, -40px); }

.cinta {
  position: absolute;
  bottom: -20px;
  font-size: 2rem;
  animation: latidoCinta 2s infinite;
  filter: drop-shadow(0 0 3px rgba(255, 105, 180, 0.8));
}

@keyframes latidoCinta {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Botón animado */
.btn-animado {
  margin-top: 30px;
  padding: 18px 35px;
  background: linear-gradient(45deg, #ff6b6b, #ffd700);
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.btn-animado:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
}

.btn-animado:active {
  transform: translateY(1px);
}

.btn-texto {
  position: relative;
  z-index: 2;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.btn-efecto {
  position: absolute;
  right: 20px;
  animation: brillo 1.5s infinite;
}

@keyframes brillo {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.btn-animado::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: rotate(45deg);
  animation: efectoBrillo 2s infinite;
}

@keyframes efectoBrillo {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .titulo-animado {
    font-size: 2.2rem;
  }
  
  .subtitulo-animado {
    font-size: 1.1rem;
  }
  
  .ramo-container {
    transform: scale(0.8);
  }
  
  .btn-animado {
    padding: 15px 25px;
    font-size: 1.1rem;
  }
}
</style>