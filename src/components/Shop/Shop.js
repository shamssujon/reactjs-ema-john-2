import React, { useState } from "react";
import { addToDb } from "../../utilities/fakedb2";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <Products handleAddToCart={handleAddToCart}></Products>
                    <Sidebar cart={cart}></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Shop;
