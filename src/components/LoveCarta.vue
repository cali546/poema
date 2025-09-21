<template>
  <div class="carta-container">
    <div class="carta">
      <div class="corazon">💖</div>
      <transition name="fade" mode="out-in">
        <div :key="pagina" class="pagina">
          <LoveHojas :texto="poemas[pagina - 1]" :pagina="pagina" />
          <div class="botones">
            <button v-if="pagina > 1" @click="cambiarPagina(pagina - 1)">← Anterior</button>
            <button v-if="pagina < 4" @click="cambiarPagina(pagina + 1)">Siguiente →</button>
            <button v-else @click="reiniciar" class="btn-especial">Volver al Inicio</button>
          </div>
        </div>
      </transition>
      <div class="numero-pagina">Página {{ pagina }} de 4</div>
    </div>
  </div>
</template>

<script>
import LoveHojas from "./LoveHojas.vue";

export default {
  name: "LoveCarta",
  components: { LoveHojas },
  data() {
    return {
      pagina: 1,
      poemas: [
        "Me seguire enamorando de ti, todos los dias, porque no puedo evitar sonreir cuando pienso en ti, porque al mirarte confirmo que eres todo lo que quiro en mi vida.?",
        "El universo será testigo de las locuras que haré. Solo para que el brillo de tu mirar y tu hermosa sonrisa nunca se apaguen 🌻✨",
        "Me enamoré hasta de las letras de tu nombre, me enamoré de tus hermosos ojos que parecen estrellas, me enamoré de tu sonrisa, me enamoré de tu voz, me enamoré de ti 👉👈",
        "Posdata me ubiera gustado pasar este hermoso dia y darte el remo de flores que te mereces, espero que algun dia podamos estar y darte todo lo que temereces. ''Desde el día que llegaste iluminaste mis días, eres como un faro en la oscuridad, y aunque las páginas del tiempo se desgasten, mi amor por ti será eterno ❤''\n\n¿Me aceptas? Te haré la mujer más feliz... 🎧 Escuchaste el audio especial"
      ],
    };
  },
  methods: {
    cambiarPagina(nuevaPagina) {
      this.pagina = nuevaPagina;
      this.$emit('cambiar-pagina', nuevaPagina);
    },
    reiniciar() {
      this.pagina = 1;
      this.$emit('cambiar-pagina', 1);
      this.$emit('reiniciar');
    },
  },
};
</script>

<style scoped>
.carta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f5f2e7, #e8dccc);
}

.carta {
  width: 90%;
  max-width: 500px;
  min-height: 400px;
  background: #fdf3e7;
  border: 2px solid #c4a484;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  font-family: 'Times New Roman', serif;
  position: relative;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fdf3e7"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="%23c4a484" stroke-width="0.5" opacity="0.2"/></svg>');
}

.corazon {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.botones {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  background: #c4a484;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #a67c52;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-especial {
  background: linear-gradient(45deg, #e91e63, #c2185b);
  font-weight: bold;
  padding: 12px 24px;
}

.btn-especial:hover {
  background: linear-gradient(45deg, #c2185b, #ad1457);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 12px rgba(233, 30, 99, 0.4);
}

.numero-pagina {
  position: absolute;
  bottom: 10px;
  right: 15px;
  color: #a67c52;
  font-size: 0.9rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>