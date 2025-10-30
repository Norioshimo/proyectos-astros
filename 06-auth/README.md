# Astro Proyecto Auth

Proyecto desarrollado con **Astro.js** para implementar **autenticación con Google** usando **Firebase Authentication**.  
Incluye manejo de rutas privadas (`/protected`) y flujo completo de inicio y cierre de sesión.

## Características

- **Login con Google**  
- **Registro automático del usuario** (Firebase Auth)  
- **Logout / Cierre de sesión**  
- **Ruta protegida** que muestra datos del usuario autenticado  
- Integrado con **Firebase** para autenticación y manejo de sesión  


## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).  
2. Habilita el **proveedor de autenticación de Google**.  
3. Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:

   ```bash
   WEBSITE_URL=http://localhost:4321
   
   PUBLIC_FIREBASE_API_KEY=xxxx
   PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx.firebaseapp.com
   PUBLIC_FIREBASE_PROJECT_ID=xxxx
   PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx.appspot.com
   PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
   PUBLIC_FIREBASE_APP_ID=xxxx
   ```

4. Asegúrate de importar y configurar Firebase en tu archivo `src/lib/firebase.ts`.

## Comandos

Ejecuta estos comandos desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`     |
| `npm run build`           | Genera el sitio de producción en `./dist/`       |
| `npm run preview`         | Previsualiza la versión de producción            |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                   |

## Notas Importantes

- **Desactiva temporalmente el firewall** si bloquea la conexión a Firebase en entorno local.  
- Asegúrate de **agregar los dominios autorizados** (como `http://localhost:4321`) en la configuración de autenticación de Firebase.  
- Para producción, deberías agregar tu dominio desplegado a la lista de dominios permitidos en Firebase.

## Tecnologías

- [Astro](https://astro.build/)  
- [Firebase Authentication](https://firebase.google.com/docs/auth)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/) *(opcional si lo usas para estilos)*  

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
