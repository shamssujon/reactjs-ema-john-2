import React from "react";

const CartProduct = ({ product, handleRemoveCartProductBtn }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className="flex gap-4 rounded bg-white p-4 shadow">
            <div className="aspect-square w-40 overflow-hidden rounded">
                <img className="h-full w-full object-cover" src={img} alt="" />
            </div>
            <div className="flex flex-1 justify-between">
                <div className="">
                    <h5 className="mb-2 text-xl font-semibold">{name}</h5>
                    <p className="text-lg">
                        <span className="text-slate-600">Price:</span>{" "}
                        <span className="font-semibold text-orange-600">{price}</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-slate-600">+ Shipping:</span>{" "}
                        <span className="font-semibold">{shipping}</span>
                    </p>
                    <p className="mt-8">
                        <span className="text-slate-600">Quantity:</span>{" "}
                        <span className="font-semibold">{quantity}</span>
                    </p>
                </div>
                <div className="">
                    <button
                        onClick={()=>handleRemoveCartProductBtn(id)}
                        className="flex h-full w-20 items-center justify-center rounded bg-rose-100 text-center text-2xl text-rose-600 transition hover:bg-rose-600 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-8 w-8">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
