import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import { categoryFormSchema } from "../../validation/validationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { getFirebaseDataForEdit, setDataToFirebase, updateDataFromFirebase } from "../../firebase/firebaseUtils"
import { toast } from "react-toastify"
import { useEffect } from "react"



function CreatCategory() {

  const navigate = useNavigate()
  const param = useParams()



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(categoryFormSchema),

    defaultValues: {
      CategoryName: "",
      CategoryImgURL: "",
    }
  })
  const onSubmit = (data) => {

    if (param.id) {
      // update Category
      updateDataFromFirebase(`categories/${param.id}`, data)
      toast.success("update is successful");
    } else {
      // Creat Category
      setDataToFirebase('categories', data)
      toast.success("cration is successful");

    }
    navigate(-1)

  }

  useEffect(() => {
    async function getData() {
      let res = await getFirebaseDataForEdit("categories/" + param.id);

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
        <h1 className="text-2xl font-bold text-center mb-6">{param.id ? 'Edit Category' : 'Add Category'}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="CategoryName">
              Categiry Name
            </label>
            <input
              {...register("CategoryName")}
              type="text"
              id="CategoryName"
              name="CategoryName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter category name"
            />
            {errors.CategoryName && <span className="text-red-700">{errors.CategoryName?.message}</span>}
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="CategoryImgURL">
              Category Img URL
            </label>
            <input
              {...register("CategoryImgURL")}
              type="url"
              id=" CategoryImgURL"
              name="CategoryImgURL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter Category Img URL"
            />
            {errors.CategoryImgURL &&
              (<span className="text-red-700">{errors.CategoryImgURL?.message}</span>

              )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            {param.id ? 'Update Category' : 'Add Category'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatCategory