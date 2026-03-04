import axios from "axios";

export const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 10000,
});