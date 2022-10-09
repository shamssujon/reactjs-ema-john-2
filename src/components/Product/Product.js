import React from "react";

const Product = ({ product, handleAddToCart }) => {
    const { category, img, name, price, shipping } = product;

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
                <h6 className="mb-2 text-xl font-semibold capitalize transition hover:text-yellow-600">
                    <a href="/" className="block">
                        {name.length > 30
                            ? name.slice(0, 30).toLowerCase() + "..."
                            : name.toLowerCase()}
                    </a>
                </h6>
                <p className="text-lg">
                    <span className="text-slate-600">Price:</span>{" "}
                    <span className="font-semibold text-yellow-600">${price}</span>
                </p>
                <p className="text-sm">
                    <span className="text-slate-600">+ Shipping:</span>{" "}
                    <span className="font-semibold">${shipping}</span>
                </p>
            </div>
            <div className="pt-2">
                <button
                    className="flex w-full items-center justify-center gap-2 bg-yellow-600/80 px-6 py-3 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-yellow-600/100"
                    onClick={() => handleAddToCart(product)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>

                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default Product;
