# Habit Tracker PWA

Esta Tarea es una aplicación web progresiva (PWA) diseñada para registrar hábitos diarios. Está construida con una arquitectura modular, integración de componentes externos, y estilos personalizados que garantizan claridad visual, responsividad y trazabilidad técnica.

## Características principales

- ✅ Instalable como PWA con manifest.json y service worker configurados
- 🧩 Arquitectura modular con componentes personalizados (`habit-card`, `espe-header`, `test-card`)
- 🎨 Estilos CSS limpios, responsivos y adaptados a pantallas móviles
- 📦 Integración de encabezado institucional externo (`espe-header`) con validación de slot y estilo
- 🧠 Entrada de nuevos hábitos con botón de acción y renderizado dinámico
- 🔍 Preparado para escalar con vistas adicionales o estadísticas

## Estructura del proyecto

- `index.html`: punto de entrada principal con estructura semántica
- `main.js`: lógica de interacción, renderizado de hábitos y eventos
- `habit-card.js`: componente personalizado para mostrar cada hábito
- `espe-header.js`: componente externo institucional integrado y adaptado
- `test-card.js`: componente de prueba para validación visual
- `manifest.json`: configuración PWA (nombre, íconos, orientación)
- `service-worker.js`: manejo de caché y soporte offline
- `styles.css`: hoja de estilos completa, modular y responsiva

## Estilos CSS destacados

- Layout centrado con `main` usando `grid-template-columns`
- Tarjetas con sombra, bordes redondeados y efecto hover
- Botón `#add-button` con transición suave y colores institucionales
- Campo `#new-habit` con espaciado ajustable (`margin-right`)
- Responsive design para pantallas menores a 600px
- Estilo diferenciado para `test-card` con fondo amarillo claro y borde punteado

## Instalación y uso

1. Clona el repositorio
2. Asegúrate de servirlo desde un entorno HTTPS o localhost
3. Abre en navegador compatible con PWA (Chrome, Edge, etc.)
4. Agrega hábitos desde el input y observa cómo se renderizan dinámicamente
5. Instala la app desde el navegador para usarla offline

## Recomendaciones técnicas

- Validar cada componente con DevTools y revisar slots y propiedades reactivas
- Confirmar que los imports de módulos estén correctamente resueltos (evitar errores silenciosos)
- Mantener trazabilidad en cada función y evitar improvisaciones en nombres o estructuras
- Adaptar cualquier componente externo a los estándares de modularidad y claridad visual definidos

## Autor

Desarrollado por Anthony, con enfoque en precisión técnica, modularidad, y buenas prácticas en desarrollo web progresivo. Esta tarea refleja un compromiso con la escalabilidad, la reproducibilidad y la integración profesional de componentes.
