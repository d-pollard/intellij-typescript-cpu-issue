import axios from "axios";
import { HttpError } from "@refinedev/core";

const axiosInstance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  },
);

export { axiosInstance };