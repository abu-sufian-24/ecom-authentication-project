import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidation } from "../../validation/validationSchema";
import { loginUser } from "../../firebase/firebaseAurh";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getProfile } from "../../firebase/firebaseUtils"
import { useNavigate } from "react-router";
import { setLoginUserDataToRedux } from "../../features/auth/authSlice";




const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  })

  const onSubmit = async (data) => {
    const res = await loginUser(data);

    if (res.error) {
      toast.error(res.code);
    } else {
      // Login User;
      let userProfile = await getProfile(res.id);
      const loginUserInfo = {
        id: res.id,
        email: res.email,
        name: userProfile.name,
        role: userProfile.role,
      };

      dispatch(setLoginUserDataToRedux(loginUserInfo));
      reset();
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {/* Email and Password Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
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
          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="password">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <div className="text-center mt-4">
          <p className="text-gray-500 mb-2">Or login with</p>
          <button
            type="button"
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
        </div>

        {/* Registration Link */}
        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
