/* eslint-disable react/prop-types */
import { useState } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { setProductToCart } from "../../../database/firebaseUtils";

export default function ProductItem({ product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const naviget = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);



  const {
    id,
    productName,
    productPrice,
    productCategory,
    productImageUrl,
  } = product;
  const activeCart = cart.find((item) => item.productId === id);




  // Star SVG for ratings
  const StarIcon = (
    <svg
      className="w-5 h-5 text-yellow-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
      />
    </svg>
  );
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (user) {
      setProductToCart({

        productId: id,
        quantity: 1,
        userId: user.id
      });
    } else {
      naviget("/login");
    }

  }



  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleClick = (e, id) => {
    e.stopPropagation();

    naviget(`/product-index/${id}`);


  }

  const handleClose = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  }

  // Generate star ratings (default: 5 stars)
  const stars = Array(5).fill(StarIcon);

  return (
    <div onClick={() => setShowPopup(true)} className="border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-8 my-8">
      {/* Product Image */}
      <img
        className="w-full h-[180px] object-cover rounded-t-lg"
        src={productImageUrl}
        alt={productName}
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        <h3
          onClick={(e) => handleClick(e, id)}
          className="text-lg font-bold text-gray-800 mb-1"
        >
          {productName}
        </h3>
        <span className="text-sm text-gray-600 mb-2">{productCategory}</span>
        <p className="text-red-500 font-bold text-base mb-4">
          ${productPrice.toFixed(2)}
        </p>

        {/* Star Ratings */}
        <div className="flex gap-1 mb-4">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-auto">
          {/* Add to Wishlist Icon */}
          <button
            onClick={handleFavoriteToggle}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Add to Wishlist"
          >
            {isFavorite ? (
              <svg
                className="w-6 h-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>

            )}
          </button>

          {/* Add to Cart Icon */}
          <button
            onClick={handleAddToCart}
            disabled={activeCart ? true : false}
            className=" disabled:bg-red-500  p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Add to Cart"
          >

            <svg
              className="w-6 h-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7 7V5" />
            </svg>


          </button>

        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          product={product}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
