import axios from "axios";
const ACCESS_TOKEN =
  "ya29.A0ARrdaM8dJbSlZN0QTTJrZ53jLFcWbqLN2WdFkZgJExMRhPGuMM_RW28GK-wAFQkD8KlRJMpbD9BElOdJ3LuiQCGo2F9nISvIRBVTJ_xNtTTY-i04j8WF6hm-N3FpjXqyyazLI9QQCs7NPfGfqXca34GFZmwz";
const axiosConfig = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
axiosConfig.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
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
