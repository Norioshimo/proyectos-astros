# Repositorio de Proyectos con Astro.js

Este repositorio contiene múltiples proyectos desarrollados con [Astro.js](https://astro.build/), organizados en diferentes ramas.  
Cada rama representa un proyecto independiente.

## Cambio entre Proyectos

Para cambiar de proyecto, usa el siguiente comando:

```sh
git checkout nombre-de-la-rama
```

Para listar todas las ramas disponibles:

```sh
git branch -a
```

## Instalación y Uso

Después de cambiar a la rama deseada, instala las dependencias y ejecuta el proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor en `localhost:4321`           |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza el sitio antes de desplegarlo       |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`            |
| `npm run astro -- --help` | Muestra ayuda sobre el CLI de Astro              |

## Contribución

Si deseas agregar un nuevo proyecto, crea una nueva rama basada en `main`:

```sh
git checkout -b nombre-de-nueva-rama
```

Luego, desarrolla tu proyecto y súbelo al repositorio.

## Licencia

Este repositorio está bajo la licencia MIT.
