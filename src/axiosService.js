// This is generic file

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // JSONPlaceholder base URL
  timeout: 5000, // Set timeout (optional)
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Add token to headers if available
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request interceptor triggered:", config);
    return config;
  },
  function (error) {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("Response interceptor triggered:", response);
    return response;
  },
  function (error) {
    console.error("Error in response interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
