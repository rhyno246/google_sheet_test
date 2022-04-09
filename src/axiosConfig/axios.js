import axios from "axios";
const axiosConfig = axios.create({
  headers: {
    baseURL:
      "https://script.google.com/macros/s/AKfycby3U4LPKDJHTSV9yRk5wiEH-6q2xy3CsoWLCxg28jJfTFzYGQo/exec",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
axiosConfig.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer`;
  return req;
});
axiosConfig.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
export default axiosConfig;
