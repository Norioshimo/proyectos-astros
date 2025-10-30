import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createUserWithEmailAndPassword,updateProfile,sendEmailVerification, type AuthError } from "firebase/auth";
 


export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ name, email, password, remember_me }, { cookies }) => {
        console.log({ name, email, password, remember_me })
        if (remember_me) {
            cookies.set('email', email, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
                path: '/',// Funciona en toda la web
            })
        } else {
            cookies.delete('email', {
                path: '/'
            });
        }

        // Creación de usuario
        try {

            const user = await createUserWithEmailAndPassword(firebase.auth, email, password);

            console.log(user);
            // Actualiza el nombre (displayName)
            updateProfile(firebase.auth.currentUser!,{
                displayName:name
            });

            // Verificar correo electronico
            await sendEmailVerification(firebase.auth.currentUser!,{
                //url:'http://localhost:4321/protected?emailVerified=true'
                url:`${import.meta.env.WEBSITE_URL}/protected?emailVerified=true`
            })



        return { ok: true, msg: 'Usuario Creado' }

        } catch (error) {

            const firebaseError = error as AuthError;
            if(firebaseError.code === 'auth/email-already-in-use'){
                throw new Error('El correo ya está en uso');
            }
            throw new Error('Algo salió mal');
        }


    }

});
