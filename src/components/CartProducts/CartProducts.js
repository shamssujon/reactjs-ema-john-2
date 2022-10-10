import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";

const CartProducts = ({ cart, handleRemoveCartProductBtn }) => {
    return (
        <div className="col-span-3">
            <h3 className="mb-8 text-4xl font-semibold">Cart Products</h3>
            <div className="grid grid-cols-1 gap-4">
                {cart.length === 0 && (
                    <div>
                        <h4 className="mb-4 text-2xl text-black/70">
                            No products in your shopping cart
                        </h4>{" "}
                        <Link
                            to="/shop"
                            className="inline-block rounded bg-orange-600/80 py-4 px-8 text-lg font-semibold uppercase text-white transition hover:bg-orange-600">
                            Shop now
                        </Link>
                    </div>
                )}
                {cart.map((product) => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        handleRemoveCartProductBtn={handleRemoveCartProductBtn}></CartProduct>
                ))}
            </div>
        </div>
    );
};

export default CartProducts;
