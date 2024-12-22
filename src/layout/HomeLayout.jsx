import { Outlet } from "react-router"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../database/firebaseUtils";
import { useDispatch } from "react-redux";
import { getCategories } from "../features/categories/categoriesSlice";
import { getProducts } from "../features/product/ProductSlice";


function HomeLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoryRef = ref(db, "categories");
    const productRef = ref(db, "products");

    // Set category to redux for getting this content globally;
    const disableCategory = onValue(categoryRef, (snapshot) => {
      const updateCategoryList = [];

      snapshot.forEach((item) => {
        updateCategoryList.push({
          id: item.key,
          ...item.val(),
        });
      });

      dispatch(getCategories(updateCategoryList));
    });

    // Set products to redux for getting this content globally;
    const disableProduct = onValue(productRef, (snapshot) => {
      const updateProductList = [];

      snapshot.forEach((item) => {
        updateProductList.push({
          id: item.key,
          ...item.val(),
        });
      });

      dispatch(getProducts(updateProductList));
    });

    return () => {
      disableCategory();
      disableProduct();
    };
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout