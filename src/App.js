import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import ShopPage from "./pages/ShopPage";

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
