import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";
import { deleteDataFromFirebase } from "../../firebase/firebaseUtils";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { DeletePopup } from '/src/popup/DeletePopup';


function CetegorySection() {
  const dispatch = useDispatch();
  const CategiriesData = useSelector(state => state.categories);

  const [showDeletePopup, setShowDeletePopup] = useState(false)

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    dispatch(getCategories());

  }, [dispatch]);

  const handleDelete = async () => {
    if (selectedCategoryId) {
      try {
        await deleteDataFromFirebase(`categories/${selectedCategoryId}`);
        toast.success("Category deleted successfully!");
        setShowDeletePopup(false);
        dispatch(getCategories()); // Refresh the categories after deletion
      } catch (error) {
        toast.error("Failed to delete category. Please try again.");
      }
    }

  }
  let categoriesSectionContent;

  if (CategiriesData.isLoading) {
    categoriesSectionContent = (
      <div className="text-xl">Data is loading ...</div>
    );
  }

  if (!CategiriesData.isLoading && CategiriesData.isError) {
    categoriesSectionContent = (
      <div className="text-xl">Error || {CategiriesData.error}</div>
    );
  }

  if (
    !CategiriesData.isLoading &&
    !CategiriesData.isError &&
    CategiriesData.categories.length === 0
  ) {
    categoriesSectionContent = (
      <div className="text-xl">No category found</div>
    );
  }
  if (
    !CategiriesData.isLoading &&
    !CategiriesData.isError &&
    CategiriesData.categories.length > 0
  ) {
    categoriesSectionContent =
      CategiriesData.categories.map((category) => (
        <div
          key={category.id}
          className="bg-white shadow rounded-lg p-4 text-center hover:shadow-lg transition w-full"
        >
          <img
            src={category.CategoryImgURL}
            alt={category.CategoryName}
            className="w-full h-32 object-contain mb-4"
          />
          <h3 className="text-lg font-medium">{category.CategoryName}</h3>
          <div className="flex justify-between mt-4">
            <Link to={`/edit-category/${category.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Edit
            </Link>

            <button
              onClick={() => {
                setShowDeletePopup(true);
                setSelectedCategoryId(category.id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))
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
        <h1 className="text-center text-2xl">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categoriesSectionContent}
        </div>
      </section>

    </>
  )
}

export default CetegorySection