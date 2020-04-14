import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:8080/auth"
});
export interface loginData {
    username: string;
    password: string;
};

export interface registerData {
    username: string;
    name: string;
    password: string;
};

export const loginUser = async (data : loginData) => {
    return instance.post("/login", data);
}

export const registerUser = async (data : registerData) => {
    return instance.post("/register", data);
}