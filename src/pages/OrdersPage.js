import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrdersPage = () => {
    const products = useLoaderData();
    return (
        <div>
            This is cart page: {products.length}
            {
                products.map(product => console.log(product))
            }
        </div>
    );
};

export default OrdersPage;