import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions"; 
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { signInWithCredential } from "firebase/auth";

export const loginWithGoogle = defineAction({
    accept: 'json',

    handler: async (credentials) => {
        console.log('Login con google');
        const credential = GoogleAuthProvider.credentialFromResult(credentials);

        if (!credential) {
            console.log('Error inesperado.', credential)
            throw new Error('Google SignIn folló');
        }

        await signInWithCredential(firebase.auth, credential);

        console.log('Login con google con exito');
        return { ok: true }
    }
});