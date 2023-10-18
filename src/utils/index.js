import axios from 'axios';

export const productionUrl = 'https://api.escuelajs.co/api/v1'

export const customFetch = axios.create({
    baseURL:productionUrl,
});

export const formatPrice = ()=>{
         const eurosAmount = new Intl.NumberFormat('fi-FI',{
        style: 'currency',
        currency: 'EUR', 
    }).format((price/100).toFixed(2));
    return eurosAmount;
}

