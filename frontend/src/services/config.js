import axios from 'axios';

export const http = axios.create({
    baseURL:'https://ebocampolargoapi.herokuapp.com/'
});