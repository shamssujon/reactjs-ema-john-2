import React from "react";

const Product = () => {
    return (
        <div className="border bg-white shadow rounded-lg overflow-hidden">
            <div className="aspect-4/3 overflow-hidden ">
                <img
                    src="https://loremflickr.com/320/240"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h5 className="text-2xl">Product name </h5>
                <h6 className="text-xl">Price</h6>
            </div>
            <div className="pt-2">
                <button className="bg-orange-600 text-white px-6 py-3 w-full">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
