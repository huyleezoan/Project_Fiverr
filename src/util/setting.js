import axios from "axios";

export const domain = "https://fiverr.cybersoft.edu.vn";

export const http = axios.create({
  baseURL: domain,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenByClass:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc",
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
