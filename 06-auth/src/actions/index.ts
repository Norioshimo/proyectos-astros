import {  loginUser, loginWithGoogle, logout, registerUser } from "./auth";

export const server = {

    // Auth actions
    registerUser,
    loginUser,
    logout,
    loginWithGoogle
}