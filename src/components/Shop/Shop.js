import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";

const Shop = () => {
    // Load Products
    const products = useLoaderData();

    const [cart, setCart] = useState([]);

    // Button handlder
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    // Display saved cart
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const productId in storedCart) {
            const addedProduct = products.find((product) => product.id === productId);
            if (addedProduct) {
                const quantity = storedCart[productId];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <Products handleAddToCart={handleAddToCart} products={products}></Products>
                    <Sidebar cart={cart}></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Shop;
