// vue.config.js
module.exports = {
  devServer: {
    port: 8080,          // Puerto del servidor
    open: true,          // Abre el navegador automáticamente al iniciar
    hot: true,           // Habilita Hot Module Replacement
    client: {
      overlay: {         // Muestra errores en el navegador
        warnings: false, // No mostrar advertencias
        errors: true     // Mostrar errores
      }
    },
    historyApiFallback: true, // Para rutas con Vue Router en modo 'history'
  }
};