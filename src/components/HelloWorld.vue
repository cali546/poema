<template>
  <div class="hello">
    <div class="cartita_amor">
      <h1>{{ msg }}</h1>
      <p>Un día especial para recordarte <span class="amor_color">cuanto te amo</span></p>
      <p>💛 21 de Septiembre 💛</p>
      
      <div class="mensaje_especial">
        <p>Eres la razón de mi sonrisa</p>
        <p>Y el latido de mi corazón</p>
        <p>Hoy y siempre serás <span class="amor_color">mi amor eterno</span></p>
      </div>
      
      <div class="corazones">
        <span class="corazon">💖</span>
        <span class="corazon">💕</span>
        <span class="corazon">💞</span>
        <span class="corazon">💓</span>
        <span class="corazon">💗</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: "Feliz 21 de Septiembre mi Amor"
    }
  },
  data() {
    return {
      mostrarAudio: false
    }
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #ffecb3 0%, #ffccbc 100%);
}

.cartita_amor {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  border: 3px solid #ffb300;
  position: relative;
  overflow: hidden;
}

.cartita_amor::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #ff6f00, #ffb300, #ff6f00);
}

h1 {
  color: #ff6f00;
  margin-bottom: 20px;
  font-size: 2.2em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  font-family: 'Times New Roman', serif;
}

p {
  font-size: 1.2em;
  color: #5d4037;
  margin: 15px 0;
  line-height: 1.6;
  font-family: 'Georgia', serif;
}

.mensaje_especial {
  margin-top: 25px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  border: 2px dashed #ffb300;
  position: relative;
}

.mensaje_especial::before {
  content: '💌';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5em;
  background: white;
  padding: 5px;
  border-radius: 50%;
}

.amor_color {
  color: #ff6f00;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.corazones {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.corazon {
  font-size: 2em;
  animation: latido 2s infinite;
  display: inline-block;
}

.corazon:nth-child(1) { animation-delay: 0s; }
.corazon:nth-child(2) { animation-delay: 0.4s; }
.corazon:nth-child(3) { animation-delay: 0.8s; }
.corazon:nth-child(4) { animation-delay: 1.2s; }
.corazon:nth-child(5) { animation-delay: 1.6s; }

@keyframes latido {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(30px) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
}

.cartita_amor {
  animation: aparecer 1.2s ease-in-out;
}

/* Efecto de lluvia de pétalos */
.hello::before {
  content: '🌸';
  position: fixed;
  top: -50px;
  font-size: 2em;
  animation: lluvia 10s linear infinite;
  opacity: 0.6;
  z-index: -1;
}

.hello::after {
  content: '🌹';
  position: fixed;
  top: -50px;
  left: 20%;
  font-size: 1.8em;
  animation: lluvia 8s linear infinite;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: -1;
}

@keyframes lluvia {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 600px) {
  .cartita_amor {
    padding: 25px;
    margin: 15px;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  p {
    font-size: 1.1em;
  }
  
  .corazon {
    font-size: 1.5em;
  }
}
</style>