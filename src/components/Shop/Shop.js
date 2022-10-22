import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
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

    // Remove all from cart
    const handleClearCartBtn = () => {
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <Products handleAddToCart={handleAddToCart} products={products}></Products>
                    <Sidebar cart={cart} handleClearCartBtn={handleClearCartBtn}>
                        <Link to={"/orders"}>
                            <button className="flex w-full items-center justify-center gap-2 rounded bg-orange-600/80 px-6 py-3 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600/100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <span>Review orders</span>
                            </button>
                        </Link>
                    </Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Shop;
