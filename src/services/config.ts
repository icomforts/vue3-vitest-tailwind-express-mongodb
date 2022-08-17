import axios from "axios";

const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
};
const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

api.interceptors.request.use(async (config) => await config);

api.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default api;
