// axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`, // Replace with your backend API URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Retrieve token from sessionStorage
   
    const token = sessionStorage.getItem('token');
    
    // If token exists, add it to the request headers
    console.log(location.href,location.href.includes("registration"));
    if (token ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    else{
        
        if(!location.href.includes("registration") || !location.href.includes("login")){
            // location.href = "/login"
        }
    }
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
