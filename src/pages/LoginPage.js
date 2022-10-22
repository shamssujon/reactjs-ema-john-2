import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const LoginPage = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length <= 6) {
            setError("Password must be 6 charecters long");
            return;
        }

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError(null);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };
    return (
        <section className="bg-slate-50 py-12 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-xl rounded border bg-white p-8 shadow shadow-orange-300">
                    <h2 className="text-center text-4xl">Login</h2>

                    {/* Sign In Form */}
                    <form onSubmit={handleSignIn} className="my-8 space-y-6">
                        <div className="grid gap-2">
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                className="rounded border border-slate-300 py-2 px-4 outline-offset-4 transition hover:border-slate-400 focus:border-orange-400 focus:outline-4 focus:outline-orange-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                className="rounded border border-slate-300 py-2 px-4 outline-offset-4 transition hover:border-slate-400 focus:border-orange-400 focus:outline-4 focus:outline-orange-100"
                            />
                        </div>
                        <div className="grid gap-2 pt-2">
                            <button className="flex w-full items-center justify-center gap-2 rounded bg-orange-600/80 px-6 py-3 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600/100">
                                Login
                            </button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center text-slate-500">
                            Do not have an account?{" "}
                            <Link
                                to={"/signup"}
                                className="text-orange-500 underline underline-offset-2 hover:text-orange-600">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="my-8 text-center text-rose-600">
                    <p>{error}</p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
