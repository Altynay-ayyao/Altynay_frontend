import axios from 'axios';

const productionUrl = 'https://api.escuelajs.co/api/v1/products'

export const customFetch = axios.create({
    baseURL:productionUrl,
});

