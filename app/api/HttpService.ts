import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import {isClientSide} from "../utils";



// Set config defaults when creating the instance
export const httpService = axios.create({});



// requests using this instance will wait 15 seconds before timing out
httpService.defaults.timeout = 15000;

// Alter defaults after instance has been created
// httpService.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
httpService.interceptors.request.use(function (config) {
    // Do something before request is sent

    !isClientSide() && console.log(`API info`,
        {
            url: config.url,
            method: config.method,
            body: config.data || ''
        } as AxiosRequestConfig)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpService.interceptors.response.use(function (response) {
    return response;
}, function (error: AxiosError) {
    console.error(`API Error ${error.code} ${error.message}`,
        {
            url: error.config.url,
            method: error.config.method,
            headers: error.config.headers,
            timeout: error.config.timeout
        } as AxiosRequestConfig)
    if (error.response) {
        const resError = error.response;
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`API Response error ${resError.status} ${resError.statusText}`);
    } else if (error.request) {
        const reqError = error.request;
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.error(`API Request error ${reqError}`);
    } else {
        // Something happened in setting up the request that triggered an Error
    }
    return Promise.reject(error);
});