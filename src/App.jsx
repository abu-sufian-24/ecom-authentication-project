

import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";
import DashboardLayout from "./layout/DashboardLayout";
import HomeDashboard from "./pages/dashboard/home/Index";
import IndexCategory from "./pages/dashboard/category/Index";
import CreateCategory from "./pages/dashboard/category/Create";
import IndexProduct from "./pages/dashboard/product/Index";
import CreateProduct from "./pages/dashboard/product/Creat";
import Error from "./Error"
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./frontEnd/home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';



export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomeIndex />} />
            </Route>

            {/* Auth Route */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route element={<Private />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route index element={<HomeDashboard />} />

                    {/* ============ Category ================= */}
                    <Route path="index-category" element={<IndexCategory />} />
                    <Route
                        path="create-category"
                        element={<CreateCategory />}
                    />
                    <Route
                        path="edit-category/:id"
                        element={<CreateCategory />}
                    />

                    {/* ============ Product ================= */}
                    <Route path="index-product" element={<IndexProduct />} />
                    <Route path="create-product" element={<CreateProduct />} />
                    <Route
                        path="edit-product/:id"
                        element={<CreateProduct />}
                    />

                    {/* Error Route */}
                    <Route path="*" element={<Error />} />
                </Route>
            </Route>
        </Routes>
    );
}

// catetory/index
// category/create
// category/edit/:id