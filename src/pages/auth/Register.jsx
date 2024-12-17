import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../../validation/validationSchema";
import { useForm } from "react-hook-form";
import { registerUser } from "../../firebase/firebaseAurh";
import { toast } from "react-toastify";
import { creatUserProfile } from "../../firebase/firebaseUtils";
import { useNavigate } from "react-router";



const RegistrationPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  })


  const onSubmit = async (data) => {

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user"
    }

    const res = await registerUser(formData)

    if (res.error) {
      toast.error(res.code)
    } else {
      creatUserProfile(res)
      reset()
      navigate("/login")

      console.log(res);
    }



  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              {...register("name")}
            />
            {errors.name && <span className="text-red-700">{errors.name?.message}</span>}
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              {...register("email")}
            />
            {errors.email && <span className="text-red-700">{errors.email?.message}</span>}
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              {...register("password")}
            />

            {errors.password && <span className="text-red-700">{errors.password?.message}</span>}
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && <span className="text-red-700">{errors.confirmPassword?.message}</span>}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Extra Login Button */}
        <div className="text-center mt-4">
          <p className="text-gray-500 mb-2">Already have an account?</p>
          <a
            href="/login"
            className="w-full block bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
