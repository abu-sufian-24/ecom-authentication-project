
import { useDispatch, useSelector } from "react-redux";
import { DeletePopup } from '/src/popup/DeletePopup';
import { useEffect, useState } from "react";
import { getProducts } from "../../features/product/ProductSlice";
import { deleteDataFromFirebase } from "../../firebase/firebaseUtils";
import { toast } from "react-toastify";
import { Link } from "react-router";


function ProductSection() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [ProductDeletePopupId, setProductDeletePopupId] = useState(null)


  useEffect(() => {

    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = async () => {

    if (ProductDeletePopupId) {
      try {
        await deleteDataFromFirebase(`products/${ProductDeletePopupId}`);
        toast.success("Product deleted successfully!");
        setShowDeletePopup(false);
        dispatch(getProducts())
      } catch (error) {
        toast.error("Failed to delete product. Please try again.");
      }
    }
  }

  return (
    <>

      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-full max-w-[400px] max-h-[400vh] overflow-y-auto bg-white p-6 rounded-lg shadow-lg relative">
            <DeletePopup
              onClose={() => setShowDeletePopup(false)}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}


      <section className="p-8 bg-gray-50">
        <h1 className="text-center text-2xl">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {products.products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow border rounded-lg p-4 text-center"
            >
              <img
                src={product.productImgUrl}
                alt={product.productName}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p className="text-red-500 font-medium text-xl mt-2">
                ${product.productPrice.toFixed(2)}
              </p>
              {/* Star Rating */}
              <div className="flex justify-center items-center text-yellow-500 my-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < product.rating ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <Link to={`/edit-product/${product.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Edit
                </Link>
                <button
                  onClick={() => {
                    setShowDeletePopup(true);
                    setProductDeletePopupId(product.id);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductSection