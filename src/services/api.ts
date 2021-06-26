import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (request) => {
  try {
    const token = localStorage.getItem('@APP:token');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    //
  }
  return request;
});

api.interceptors.response.use(
  async (response) =>
    new Promise((resolve) => {
      resolve(response);
    }),
  async (error) =>
    new Promise((reject) => {
      reject(error.response || error);
    }),
);

export default api;
