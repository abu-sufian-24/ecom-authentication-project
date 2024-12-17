import { BrowserRouter, Route, Routes } from "react-router";
import Dashbord from "./assets/Dashbord";


import ErrorPage from "./ErrorPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import CreatCategory from "./pages/categoryForm/Index";
import CreatProduct from "./pages/productForm/Index";
import LoginPage from "./pages/auth/Login";
import RegistrationPage from "./pages/auth/Register";
import Private from "./pages/auth/Private";




function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<Private />} >

            <Route path="dashboard" element={<Dashbord />}>
              <Route index element={<Home />} />
              <Route path="creatCategori" element={<CreatCategory />} />
              <Route path="edit-category/:id" element={<CreatCategory />} />
              <Route path="creatProduct" element={<CreatProduct />} />
              <Route path="edit-product/:id" element={<CreatProduct />} />

              {/* Error Route */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>


    </>



  );
}

export default App;
