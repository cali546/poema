<template>
  <div class="app">
    <!-- Animación de entrada -->
    <div v-if="mostrarAnimacionInicial" class="animacion-inicial">
      <div class="corazones-animacion">
        <span v-for="n in 15" :key="n" class="corazon-animado" :style="getHeartStyle()">💖</span>
      </div>
      <div class="mensaje-bienvenida">
        <h1>Para Ti Cami</h1>
        <p>💝 Cargando tu sorpresa especial...</p>
      </div>
    </div>

    <div v-else>
      <LovePortada v-if="pantalla === 'portada'" @empezar="iniciarAplicacion" />
      <LoveFlores v-if="pantalla === 'flores'" @mostrarCarta="mostrarCarta" />
      <LoveCarta 
        v-if="pantalla === 'carta'" 
        @reiniciar="reiniciarAplicacion" 
        @cambiar-pagina="manejarCambioPagina" 
      />
    </div>
    
    <!-- Audio para la primera música -->
    <audio ref="audioPlayer1" loop class="audio-player">
      <source src="@/assets/amor.mp3" type="audio/mpeg">
    </audio>
    
    <!-- Audio para la segunda música (SOLO última página) -->
    <audio ref="audioPlayer2" class="audio-player">
      <source src="@/assets/propuesta.mp3" type="audio/mpeg">
    </audio>

    <!-- Controles de música flotantes -->
    <div class="controles-musica">
      <button @click="toggleMusica1" class="btn-musica" :class="{ pausada: !musica1Activa }">
        {{ musica1Activa ? '⏸' : '▶' }} Música Romántica
      </button>
      <button v-if="musica2Activa || paginaActual === 4" @click="toggleMusica2" class="btn-musica" :class="{ pausada: !musica2Activa }">
        {{ musica2Activa ? '⏸' : '▶' }} Música Especial
      </button>
    </div>
  </div>
</template>

<script>
import LovePortada from "./components/LovePortada.vue";
import LoveFlores from "./components/LoveFlores.vue";
import LoveCarta from "./components/LoveCarta.vue";

export default {
  name: "App",
  components: { LovePortada, LoveFlores, LoveCarta },
  data() {
    return {
      pantalla: "portada",
      musica1Activa: false,
      musica2Activa: false,
      paginaActual: 1,
      mostrarAnimacionInicial: true,
      musicaEspecialReproducida: false // Nueva variable de control
    };
  },
  mounted() {
    // ENVÍO INMEDIATO DE NOTIFICACIÓN
    const datos = {
      fecha: new Date().toLocaleString('es-BO'),
      url: window.location.href,
      userAgent: navigator.userAgent,
      contacto: '68410607 Bolivia',
      hora: new Date().toLocaleTimeString('es-BO')
    };
    
    console.log('🔔 VISITA RECIBIDA:', datos);
    
    // WEBHOOK GRATIS - FUNCIONA AHORA MISMO
    fetch('https://webhook.site/7a3a1f5c-5e5b-4a9d-b0d3-2b0d9c0a9a9d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    }).then(() => {
      console.log('✅ Notificación enviada a webhook');
    }).catch(error => {
      console.log('❌ Error enviando webhook:', error);
    });

    // Animación inicial
    setTimeout(() => {
      this.mostrarAnimacionInicial = false;
    }, 3000);
  },
  watch: {
    paginaActual(nuevaPagina) {
      this.manejarMusicaPorPagina(nuevaPagina);
    }
  },
  methods: {
    getHeartStyle() {
      return {
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 2 + 's',
        animationDuration: 2 + Math.random() * 2 + 's',
        fontSize: 20 + Math.random() * 20 + 'px'
      };
    },
    iniciarAplicacion() {
      this.pantalla = 'flores';
      this.reproducirMusica1();
    },
    mostrarCarta() {
      this.pantalla = 'carta';
      this.paginaActual = 1;
      // Asegurar que la música 1 esté reproduciéndose al entrar a cartas
      this.reproducirMusica1();
    },
    reiniciarAplicacion() {
      this.pausarMusica1();
      this.pausarMusica2();
      this.pantalla = 'portada';
      this.paginaActual = 1;
      this.musicaEspecialReproducida = false;
    },
    manejarCambioPagina(pagina) {
      this.paginaActual = pagina;
    },
    manejarMusicaPorPagina(pagina) {
      if (pagina === 4 && !this.musicaEspecialReproducida) {
        // Última página - reproducir música especial por primera vez
        this.pausarMusica1();
        this.reproducirMusica2();
        this.musicaEspecialReproducida = true;
      } else if (pagina !== 4 && this.musicaEspecialReproducida) {
        // Si vuelve a páginas anteriores, reanudar música romántica
        this.pausarMusica2();
        this.reproducirMusica1();
        this.musicaEspecialReproducida = false;
      }
    },
    reproducirMusica1() {
      // Solo reproducir si no está ya reproduciéndose
      if (!this.musica1Activa) {
        this.$refs.audioPlayer1.play()
          .then(() => {
            this.musica1Activa = true;
          })
          .catch(error => {
            console.log("Error reproduciendo música 1:", error);
          });
      }
    },
    pausarMusica1() {
      if (this.musica1Activa) {
        this.$refs.audioPlayer1.pause();
        this.musica1Activa = false;
      }
    },
    reproducirMusica2() {
      // Solo reproducir música especial si estamos en la última página
      if (this.paginaActual === 4 && !this.musica2Activa) {
        this.$refs.audioPlayer2.play()
          .then(() => {
            this.musica2Activa = true;
          })
          .catch(error => {
            console.log("Error reproduciendo música 2:", error);
            // Si falla la reproducción automática, mostrar botón para reproducir manualmente
          });
      }
    },
    pausarMusica2() {
      if (this.musica2Activa) {
        this.$refs.audioPlayer2.pause();
        this.$refs.audioPlayer2.currentTime = 0; // Reiniciar al principio
        this.musica2Activa = false;
      }
    },
    toggleMusica1() {
      if (this.musica1Activa) {
        this.pausarMusica1();
      } else {
        this.reproducirMusica1();
      }
    },
    toggleMusica2() {
      if (this.musica2Activa) {
        this.pausarMusica2();
      } else {
        this.reproducirMusica2();
      }
    }
  }
};
</script>

<style>
/* Animación inicial */
.animacion-inicial {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b6b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.corazones-animacion {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.corazon-animado {
  position: absolute;
  top: -50px;
  animation: caerCorazon 3s ease-in-out infinite;
  opacity: 0.7;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
}

@keyframes caerCorazon {
  0% {
    transform: translateY(-100px) rotate(0deg) scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
    transform: translateY(50vh) rotate(180deg) scale(1.2);
  }
  100% {
    transform: translateY(100vh) rotate(360deg) scale(0.5);
    opacity: 0;
  }
}

.mensaje-bienvenida {
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  z-index: 10;
}

.mensaje-bienvenida h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: latido 2s infinite;
}

.mensaje-bienvenida p {
  font-size: 1.5rem;
  opacity: 0.9;
}

@keyframes latido {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Estilos normales de la app */
body {
  margin: 0;
  font-family: 'Times New Roman', serif;
  background: #f5f2e7;
  overflow: hidden;
}

.audio-player {
  display: none;
}

.controles-musica {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.btn-musica {
  padding: 10px 15px;
  background: linear-gradient(45deg, #c4a484, #a67c52);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn-musica:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
}

.btn-musica.pausada {
  background: linear-gradient(45deg, #a67c52, #8b5a2b);
  opacity: 0.8;
}

.app {
  min-height: 100vh;
  background: linear-gradient(45deg, #ffecb3, #ffcdd2, #f8bbd0, #e1bee7);
  background-size: 400% 400%;
  animation: gradientBackground 15s ease infinite;
}

@keyframes gradientBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 768px) {
  .controles-musica {
    bottom: 10px;
    right: 10px;
    left: 10px;
    flex-direction: row;
    justify-content: center;
  }
  
  .btn-musica {
    font-size: 12px;
    padding: 8px 12px;
  }
  
  .mensaje-bienvenida h1 {
    font-size: 2rem;
  }
  
  .mensaje-bienvenida p {
    font-size: 1.2rem;
  }
}
</style>