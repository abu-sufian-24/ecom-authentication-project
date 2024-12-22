;
import { FaThLarge } from "react-icons/fa";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <header className=" text-white">
        {/* Top bar */}
        <div className=" bg-blue-900  flex justify-between items-center px-20 py-2 text-sm">
          <div>
            <span className="mr-4">📞 +88012 3456 7894</span>
            <span>📧 support@ulib.com</span>
          </div>
          <div>
            <a href="#" className="mr-4 hover:underline">Theme FAQ's</a>
            <a href="#" className="hover:underline">Need Help?</a>
          </div>
        </div>

        {/* Main navbar */}
        <div className=" container mx-auto flex justify-between items-center px-4 py-3 ">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">divineshop</div>

          {/* Search bar */}
          <div className="relative flex-1 mx-4">
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
            <select className="px-4 py-2 border rounded-lg text-black focus:outline-none">
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
            <div className="relative cursor-pointer  bg-slate-200 p-2">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Categories Dropdown */}
          <div className="flex items-center space-x-2">
            <FaThLarge className="text-gray-700" />
            <button className="text-gray-700 font-medium">Categories</button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Pages</a>
            <a href="#" className="hover:text-blue-600">User Account</a>
            <a href="#" className="hover:text-blue-600">Vendor Account</a>
            <a href="#" className="hover:text-blue-600">Track My Orders</a>
            <a href="#" className="hover:text-blue-600">Back to Demos</a>
          </nav>
        </div>
      </header>
    </>

  );
};

export default Navbar;
