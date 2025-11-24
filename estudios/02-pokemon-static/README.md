# Astro Proyecto Pokémon

Proyecto desarrollado con Astro que utiliza la PokéAPI para generar
páginas estáticas con información de Pokémon.

------------------------------------------------------------------------

🚀 Tecnologías Utilizadas

-   Astro — Framework para sitios estáticos modernos.
-   PokéAPI — API pública de datos de Pokémon.
-   Node.js — Entorno de ejecución para el desarrollo.
-   Iconify - https://iconify.design/
-   SolidJS - Isla integrado https://docs.astro.build/en/reference/directives-reference/#client-directives
-   View Transitions - https://docs.astro.build/en/guides/view-transitions/#lifecycle-events

------------------------------------------------------------------------

🧩 Descripción General

Este proyecto demuestra cómo generar páginas estáticas (SSG) usando la
PokéAPI.
El sitio construye tres tipos de rutas principales:

1.  Lista general de Pokémon: muestra un listado inicial.
2.  Lista paginada: muestra páginas de resultados según el número de
    página recibido.
3.  Detalles individuales: cada Pokémon tiene su propia página accesible
    por nombre.

------------------------------------------------------------------------
⚙️ Comandos

Ejecuta estos comandos desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`     |
| `npm run build`           | Genera el sitio de producción en `./dist/`       |
| `npm run preview`         | Previsualiza la versión de producción            |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                   |
------------------------------------------------------------------------

💡 Notas Importantes

-   Este proyecto usa generación estática (SSG) para construir todas las
    páginas al momento del build.
-   Ideal como ejemplo educativo de cómo usar APIs externas con Astro.
-   No requiere servidor backend en producción.

------------------------------------------------------------------------

🧑‍💻 Autor

Desarrollado por Norio Shimomoto como ejemplo educativo con Astro y
PokéAPI.

Página alojado en Netlify:
https://atro-pokemon.netlify.app/
