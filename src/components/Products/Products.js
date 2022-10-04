import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="col-span-3">
            <h3 className="mb-8 text-4xl font-semibold">Latest Products {products.length}</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {products.map((product) => console.log(product))}
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;
