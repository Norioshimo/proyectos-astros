/*
No funciona por el nombre del archivo middleware.local.ts
Demostración de autenticación básica local en Astro Middleware
*/


import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected"];


export const onRequest = defineMiddleware(async (context, next) => {
    console.log("Ejecutando en el middleware. ", context.url);

    const authHeader = context.request.headers.get("authorization") ?? '';
    console.log("Authorization Header:", authHeader);


    if (privateRoutes.includes(context.url.pathname)) {

        return checkLocalAuth(authHeader, next);


    }

    return await next();
})

const checkLocalAuth = (authHeader: string, next: MiddlewareNext) => {
    if (authHeader) { 
        const authValue = authHeader.split(" ")[1] ?? 'user:pass';
        const [username, password] = atob(authValue).split(":");
        if (username === "admin" && password === "123") {
            return next();
        }
    }
 
    return new Response("Acceso denegado. No estás autenticado.", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic real="Secure Area"'
        },
    });


}