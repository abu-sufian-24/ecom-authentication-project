import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { productFormSchema } from "../../validation/validationSchema";
import { getFirebaseDataForEdit, setDataToFirebase, updateDataFromFirebase } from "../../firebase/firebaseUtils";
import { toast } from "react-toastify";
import { useEffect } from "react";



function CreatProduct() {

  const navigate = useNavigate()
  const param = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productFormSchema),

    defaultValues: {
      productName: "",
      productPrice: "",
      productImgUrl: "",
    }
  })

  const onSubmit = (data) => {


    if (param.id) {
      // update Category
      updateDataFromFirebase(`products/${param.id}`, data)
      toast.success("update is successful");
    } else {
      // Creat Category
      setDataToFirebase('products', data)
      toast.success("cration is successful");

    }
    // try {

    //   dispatch(setProducts(data));
    //   toast.success("cration is successful");
    // } catch (error) {
    //   console.error('Form Validation Error:', error.message);
    // }
    reset()
    navigate("/")

  };

  useEffect(() => {
    async function getData() {
      let res = await getFirebaseDataForEdit("products/" + param.id);

      reset(res);
      console.log(res);

    }
    if (param.id) {
      getData()
    } else {
      reset({
        CategoryName: "",
        CategoryImgURL: "",
      });
    }


  }, [param, reset])




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create new Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product name"
              {...register("productName")}
            />
            {errors.productName &&
              (<span className="text-red-700">{errors.productName?.message}</span>

              )}
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productPrice">
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product price"
              {...register("productPrice")}
            />
            {errors.productPrice &&
              (<span className="text-red-700">{errors.productPrice?.message}</span>

              )}
          </div>



          {/* Product Image */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productImage">
              Product Image
            </label>
            <input
              type="url"
              id="productImage"
              name="productImgUrl"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product image URL"
              {...register("productImgUrl")}
            />
            {errors.productImgUrl &&
              (<span className="text-red-700">{errors.productImgUrl?.message}</span>

              )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            {param.id ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatProduct