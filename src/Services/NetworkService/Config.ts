import {QueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {BASE_URL} from '../../Utils';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 1000,
    },
    mutations: {},
  },
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});
