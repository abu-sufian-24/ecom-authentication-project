

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Table from "../../../component/Table";
import { useState } from "react";
import Modal from "../../../component/Modal";
import { removeDataFromFirebase } from "../../../database/firebaseUtils";

export default function IndexProduct() {
    const { categories } = useSelector((store) => store.categories);
    const { products } = useSelector((store) => store.products);
    const [deleteProductId, setDeletePorductId] = useState(false);
    console.log(products, categories);


    const navigate = useNavigate();

    const updatedProducts = products.map((item) => {
        let findCat = categories.find((d) => d.id === item.productCategory);
        return {
            ...item,
            productCategory: findCat ? findCat?.categoryName : 'Unknown',
        };
    });



    const handleDelete = () => {
        if (deleteProductId) {
            async function deleteCat() {
                const del = await removeDataFromFirebase(
                    "products/" + deleteProductId
                );
                // dispatch(deleteCategory(deleteCategoryId));
            }
            deleteCat();
            setDeletePorductId(false);
        }
    };

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
            <Table
                tableContent={updatedProducts}
                onAdd={() => navigate("/dashboard/create-product")}
                onEdit={(data) =>
                    navigate(`/dashboard/edit-product/${data.id}`)
                }
                onDelete={(id) => setDeletePorductId(id)}
            />


            {deleteProductId && (
                <Modal
                    onDelete={handleDelete}
                    onClose={() => setDeletePorductId(!deleteProductId)}
                />
            )}
        </>
    );
}