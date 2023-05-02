import axios from 'axios';

//used Axios for data fetching
export async function productsData(){
    const products = await axios.get(
        'https://fakestoreapiserver.reactbd.com/amazonproducts'
    );
    return products;
};