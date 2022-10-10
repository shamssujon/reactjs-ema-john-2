import React from "react";

const Sidebar = ({ cart, handleClearCartBtn }) => {
    // console.log(cart);
    let total = 0,
        shipping = 0,
        quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;

    return (
        <div className="rounded-lg border border-orange-200 bg-orange-100">
            <div className="sticky top-0 p-6">
                <h5 className="text-center text-2xl font-semibold">Order Summary</h5>
                <ul className="mt-4">
                    <li className="flex flex-wrap items-center justify-between gap-2 py-2">
                        <span>Selected Items:</span>
                        <span className="text-lg font-semibold">{quantity}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2 border-t border-orange-900/20 py-2">
                        <span>Total Price:</span>
                        <span className="text-lg font-semibold">${total}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2 border-t border-orange-900/20 py-2">
                        <span>Total Shipping:</span>
                        <span className="text-lg font-semibold">${shipping}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2 border-t border-orange-900/20 py-2">
                        <span>Tax:</span>
                        <span className="text-lg font-semibold">${tax.toFixed(2)}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2 border-t border-orange-900/20 py-2">
                        <span>Grand Total:</span>
                        <span className="text-lg font-semibold text-orange-700">${grandTotal}</span>
                    </li>
                </ul>
                <div className="mt-8 grid gap-3">
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

                        <span>Checkout</span>
                    </button>
                    <button
                        onClick={handleClearCartBtn}
                        className="flex w-full items-center justify-center gap-2 rounded border border-rose-600/80 px-6 py-3 text-center font-semibold uppercase tracking-wide text-rose-600 transition hover:bg-rose-600/100 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span>Clear cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
