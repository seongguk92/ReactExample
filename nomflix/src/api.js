import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        "api_key": "f419005b168808321bcc27b142e72e91",
        "language": "en-US"
    }
});

api.get("tv/popular");

export default api;