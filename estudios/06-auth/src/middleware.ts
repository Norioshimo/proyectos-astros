
import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

const privateRoutes = ["/protected"];

const notAuthenticateRoutes = ['/login', '/register'];


export const onRequest = defineMiddleware(async (context, next) => {
    console.log("Ejecutando en el middleware. ", context.url);

    const isLoggedIn = !!firebase.auth.currentUser;
    const user = firebase.auth.currentUser;

    context.locals.isLoggedIn = isLoggedIn;
    if (user) {
        context.locals.user = {
            avatar: user.photoURL ?? '',
            email: user.email!,
            name: user.displayName!,
            emailVerified: user.emailVerified
        }
    }


    // Usuario no logueado trata de entrar en la pagina no permitida
    if (!isLoggedIn && privateRoutes.includes(context.url.pathname)) {
        return context.redirect('/');
    }

    // Usuario logueado y trata de aceder a paginas no autorizados
    if (isLoggedIn && notAuthenticateRoutes.includes(context.url.pathname)) {
        return context.redirect('/');
    }


    return await next();
})

