import React from "react";
import Product from "../Product/Product";

const Products = () => {
    return (
        <div className="col-span-3">
            <h3 className="mb-8 text-4xl font-semibold">Latest Products</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Product></Product>
            </div>
        </div>
    );
};

export default Products;
