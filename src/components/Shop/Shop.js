import React from "react";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";

const Shop = () => {
    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <Products></Products>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Shop;
