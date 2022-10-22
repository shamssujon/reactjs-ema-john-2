import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container text-center">
                <h2 className="mb-4 text-6xl font-bold text-slate-400">404 not found</h2>
                <p className="mb-6 text-xl">Seems link you are in the wrong path.</p>
                <Link to={"/"}>
                    <button className="inline-block rounded bg-orange-600/80 py-4 px-8 text-lg font-semibold uppercase text-white transition hover:bg-orange-600">
                        Go back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
