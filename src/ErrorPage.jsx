import { useNavigate } from "react-router";


const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={goBack}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
