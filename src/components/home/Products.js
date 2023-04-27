import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const data = useLoaderData();
    const productData = data.data;

    return (
        <div>Products</div>
    )
};

export default Products;