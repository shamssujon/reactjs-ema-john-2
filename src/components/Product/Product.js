import React from "react";

const Product = ({ product }) => {
    const { category, img, name, price, seller, shipping } = product;
    return (
        <div className="group flex flex-col justify-between overflow-hidden rounded-lg border bg-white shadow transition hover:shadow-lg">
            <div className="aspect-4/3 overflow-hidden ">
                <img
                    src={img}
                    alt=""
                    className="scale-1 h-full w-full transform object-cover transition group-hover:scale-[1.02]"
                />
            </div>
            <div className="flex-1 p-4">
                <p className="mb-2 text-sm text-slate-600">
                    <a href="/">{category}</a>
                </p>
                <h6 className="mb-2 text-xl font-semibold capitalize transition hover:text-orange-600">
                    <a href="/" className="block">
                        {name.length > 30
                            ? name.slice(0, 30).toLowerCase() + "..."
                            : name.toLowerCase()}
                    </a>
                </h6>
                <p className="text-lg">
                    <span className="text-slate-600">Price:</span>{" "}
                    <span className="font-semibold text-orange-600">${price}</span>
                </p>
                <p className="text-sm">
                    <span className="text-slate-600">+ Shipping:</span>{" "}
                    <span className="font-semibold">${shipping}</span>
                </p>
            </div>
            <div className="pt-2">
                <button className="flex w-full items-center justify-center gap-2 bg-orange-600 px-6 py-3 text-center font-semibold uppercase tracking-wide text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default Product;
