import axios from "axios";

export const BASE_URL = "http://localhost:5000";

interface IUser {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

async function register(body: string) {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body,
    }
    return fetch(`${BASE_URL}/register`, config)
}

async function login(body: string) {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body,
    };

    return fetch(`${BASE_URL}/auth/login`, config)
}

export const shortlyService = {
    register,
    login,
}