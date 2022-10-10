import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import CartProducts from "../components/CartProducts/CartProducts";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";

const OrdersPage = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveCartProductBtn = (productId) => {
        const remaining = cart.filter((product) => product.id !== productId);
        setCart(remaining);
        removeFromDb(productId);
    };

    // Remove all from cart
    const handleClearCartBtn = () => {
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <CartProducts
                        cart={cart}
                        handleRemoveCartProductBtn={handleRemoveCartProductBtn}></CartProducts>
                    <Sidebar cart={cart} handleClearCartBtn={handleClearCartBtn}></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default OrdersPage;
