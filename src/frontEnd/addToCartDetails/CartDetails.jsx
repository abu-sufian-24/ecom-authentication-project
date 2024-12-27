


import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import CartItem from "./CartItem";
import { ref, remove } from "firebase/database";
import { db } from "../../database/firebaseUtils";
import { toast } from "react-toastify";


function CartDetails() {
  const { user } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);
  const { products } = useSelector((store) => store.products);


  const updateCarts = cart.map((cart) => {
    let findProduct = products.find(
      (product) => product.id === cart.productId
    );
    return {
      cartId: cart.id,
      productId: cart.productId,
      productName: findProduct.productName,
      productImage: findProduct.productImageUrl,
      productPrice: findProduct.productPrice,
      quantity: cart.quantity,
    };
  });

  if (!user) {
    return <Navigate to="/login" />
  };

  const totalCount = updateCarts.reduce((total, cart) => {
    return total + (cart.productPrice * cart.quantity);
  }, 0);


  const handleDeletAllItem = () => {
    remove(ref(db, `carts/${user.id}`));
    toast.success("Product removed from cart");
  };

  return (
    <>
      <div className="max-w-[800px] mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Hello {user.name}! This Is Your Shopping Cart</h1>

        {updateCarts.map((item) =>
          <CartItem key={item.cartId} cart={item} />)}
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl font-bold">
            Total: ${totalCount.toFixed(2)}
          </h2>
          <button onClick={handleDeletAllItem} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>

    </>

  )
}

export default CartDetails