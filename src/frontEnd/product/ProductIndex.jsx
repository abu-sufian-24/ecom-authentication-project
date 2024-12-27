import { useSelector } from "react-redux";
import { useParams } from "react-router";

function ProductIndex() {
  const { products } = useSelector((store) => store.products);
  const param = useParams();

  const product = products.find((product) => product.id === param.id);

  if (!product) {
    return <h1 className="font-bold text-center  text-2xl py-10 text-red-500">Product is loading....!</h1>;
  }

  let {
    productName,
    productPrice,
    productImageUrl,
    brand = "Ziaomi",
    rating = 4.5,
    reviews = 50,
    store = "Mobile Store",
    stock = "Stock Available",
  } = product;

  return (
    <div className="flex justify-center items-center  bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section: Product Image */}
        <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-6">
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full max-w-sm rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{productName}</h2>
            <p className="text-gray-600 mb-6">
              Brand: <span className="font-semibold text-gray-800">{brand}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              <span className="text-sm text-gray-500 ml-2">({reviews} reviews)</span>
            </div>

            {/* Price & Stock */}
            <p className="text-red-600 font-bold text-2xl mb-2">${productPrice.toFixed(2)}</p>
            <p className={`text-sm font-medium ${stock === "Stock Available" ? "text-green-600" : "text-red-600"} mb-6`}>
              {stock}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-300 mb-4">
            Add to Cart
          </button>

          {/* Sold By */}
          <p className="text-sm text-gray-500">
            Sold By: <span className="font-semibold text-gray-800">{store}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductIndex;
