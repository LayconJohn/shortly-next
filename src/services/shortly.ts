import axios from "axios";

export const BASE_URL = "http://localhost:5000";

interface IUser {
    name: string,
    email: string,
    password: string
}

async function register(body: IUser) {
    return axios.post(`${BASE_URL}/signup`, body)
}

async function login(body: Omit<IUser, "name">) {
    return axios.post(`${BASE_URL}/signin`, body)
}

export const shortlyService = {
    register,
    login,
}