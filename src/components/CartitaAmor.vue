<template>
  <div class="cartita_amor">
    <h1>{{ msg }}</h1>
    <p>Un día especial para recordarte <span class="amor_color">cuanto te amo</span></p>
    <p>💛 21 de Septiembre 💛</p>
    <div class="mensaje_especial">
      <p>Eres la razón de mi sonrisa</p>
      <p>Y el latido de mi corazón</p>
      <p>Hoy y siempre serás <span class="amor_color">mi amor eterno</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartitaAmor',
  data() {
    return { 
      msg: "Feliz 21 de Septiembre mi Amor"
    }
  }
}
</script>

<style scoped>
.cartita_amor {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border: 3px solid #ffb300;
}

h1 {
  color: #ff6f00;
  margin-bottom: 20px;
  font-size: 2.2em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

p {
  font-size: 1.2em;
  color: #5d4037;
  margin: 15px 0;
  line-height: 1.5;
}

.mensaje_especial {
  margin-top: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: 2px dashed #ffb300;
}

.amor_color {
  color: #ff6f00;
  font-weight: bold;
  font-style: italic;
}

.cartita_amor {
  animation: aparecer 1s ease-in-out;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>