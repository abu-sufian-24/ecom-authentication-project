import { ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";
import { db } from "../../database/firebaseUtils";
import { toast } from "react-toastify";


function CartItem({ cart }) {

  const {
    cartId,
    productId,
    productName,
    productImage,
    productPrice,
    quantity,
  } = cart;

  const { user } = useSelector((store) => store.auth);



  const handleClick = () => {
    remove(ref(db, `carts/${user.id}/${cartId}`));
    toast.success("Product removed from cart");
  };
  const handlePlus = () => {
    set(ref(db, `carts/${user.id}/${cartId}`), {
      productId,
      quantity: quantity + 1,
    });
  }
  const handleMinus = () => {
    set(ref(db, `carts/${user.id}/${cartId}`), {
      productId,
      quantity: quantity === 1 ? 1 : quantity - 1,
    });
  }
  




  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 ">
        <div

          className="flex items-center justify-between  py-4 relative"
        >
          {/* Product Image */}
          <img
            src={productImage}
            alt={productName}
            className="w-20 h-20 object-cover rounded"
          />

          {/* Product Details */}
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold">{productName}</h3>
            <p className="text-gray-600">${productPrice.toFixed(2)}</p>
            {/* Subtotal */}
            <p className="text-red-500 font-bold">
              Subtotal: ${(productPrice * quantity).toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleMinus}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={handlePlus}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleClick}
            className="text-gray-500 hover:text-red-500 absolute right-[-18px] top-0"
          >
            ✖
          </button>
        </div>
      </div>



    </>




  )
}

export default CartItem