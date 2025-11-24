import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { signOut } from "firebase/auth";



export const logout = defineAction({
    accept: 'json',
    handler: async (_, { cookies }) => {
        console.log(`cookies: ${cookies}`)
        return await signOut(firebase.auth);
    }
});