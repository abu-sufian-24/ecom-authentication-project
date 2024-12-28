
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="text-white">
        <div className="bg-blue-900 flex justify-between items-center px-4 md:px-20 py-2 text-sm">
          <div>
            <span className="mr-4">📞 +8801887 484441</span>
            <span>📧 support@ulib.com</span>
          </div>
          <div className="hidden md:block">
            <a href="#" className="mr-4 hover:underline">Theme FAQ's</a>
            <a href="#" className="hover:underline">Need Help?</a>
          </div>
        </div>

        {/* Main navbar */}
        <div className="container mx-auto flex justify-between items-center px-4 md:px-20 py-3">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl font-bold text-red-600"
          >
            divineshop
          </div>

          {/* Search bar */}
          <div className="relative hidden md:flex flex-1 mx-4">
            <input
              type="text"
              placeholder="Search and hit enter..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-500" size={20} />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Categories dropdown */}
            <select className="hidden md:block px-4 py-2 border rounded-lg text-black focus:outline-none">
              <option>All Categories</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Home & Kitchen</option>
            </select>

            {/* User icon */}
            <div className="cursor-pointer bg-slate-200 p-2">
              <FiUser size={24} />
            </div>

            {/* Cart icon */}
            <div className="relative cursor-pointer bg-slate-200 p-2">
              <button onClick={() => navigate("/cart-details")}>
                <FiShoppingCart size={24} />
              </button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {!cart ? 0 : cart.length}
              </span>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-gray-100 md:hidden flex flex-col space-y-2 px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none"
            />
            <select className="px-4 py-2 border rounded-lg text-black">
              <option>All Categories</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Home & Kitchen</option>
            </select>
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Pages</a>
            <a href="#" className="hover:text-blue-600">User Account</a>
            <a href="#" className="hover:text-blue-600">Vendor Account</a>
            <a href="#" className="hover:text-blue-600">Track My Orders</a>
            <a href="#" className="hover:text-blue-600">Back to Demos</a>
          </div>
        )}
      </header>



    </>
  );
};

export default Navbar;
