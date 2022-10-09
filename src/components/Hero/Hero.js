import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../images/hero-img.jpg";

const Hero = () => {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="">
                        <p className="mb-4 text-yellow-600">Sale up to 70% off</p>
                        <h1 className="mb-2 text-5xl font-bold">New Collection For Fall</h1>
                        <p className="text-lg">
                            Discover all the new arrivals of ready-to-wear collection.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/shop"
                                className="inline-block rounded bg-yellow-600 py-4 px-8 text-lg font-semibold uppercase text-white">
                                Shop now
                            </Link>
                        </div>
                    </div>
                    <div className="aspect-square overflow-hidden">
                        <img
                            src={HeroImage}
                            alt=""
                            className="h-full w-full rounded-lg object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
