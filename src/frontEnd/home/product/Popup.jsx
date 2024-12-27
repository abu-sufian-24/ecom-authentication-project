/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Popup({ product, onClose }) {
  const {
    productName,
    productPrice,
    productCategory,
    productImageUrl,
    brand = "Ziaomi",
    rating = 4.5,
    reviews = 50,
    store = "Mobile Store",
    stock = "Stock Available",
  } = product;

  const [selectedImage, setSelectedImage] = useState(productImageUrl);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Popup Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Product Images */}
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={productName}
              className="w-full max-w-sm rounded-lg mb-4 object-cover"
            />
            <div className="flex gap-2">
              {[productImageUrl, productImageUrl].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${selectedImage === image ? "border-red-500" : "border-gray-200"
                    }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{productName}</h2>
            <p className="text-gray-500 mb-4">
              Brand: <span className="font-semibold">{brand}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < Math.round(rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              <span className="text-sm text-gray-500">({reviews})</span>
            </div>


            {/* Price & Stock */}
            <p className="text-red-500 font-bold text-2xl mb-1">
              ${productPrice.toFixed(2)}
            </p>
            <p className="text-green-500 text-sm mb-4">{stock}</p>

            {/* Add to Cart Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition">
              Add to Cart
            </button>

            {/* Sold By */}
            <p className="text-sm text-gray-500 mt-4">
              Sold By: <span className="font-semibold">{store}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
