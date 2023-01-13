import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    console.log('request: ', request);
    // if (request && request.headers && request.headers) {
    //   request.headers.common['Accept'] = 'application/json';
    // }
    console.log('request sent');
    return request;
  },
  (error): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error): Promise<AxiosError> => {
    if (error instanceof AxiosError) {
      console.log(error.response);
      if (error.response && error.response.status === 404) {
        console.log('NOT FOUND');
      }
    }
    return Promise.reject(error);
  }
);

export default authFetch;