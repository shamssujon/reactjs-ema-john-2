import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import SignUpPage from "./pages/SignUpPage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route
                    path="/shop"
                    loader={() => fetch("products.json")}
                    element={<ShopPage></ShopPage>}></Route>
                <Route
                    path="/orders"
                    loader={productsAndCartLoader}
                    element={<OrdersPage></OrdersPage>}></Route>
                <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Route>
        )
    );
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
