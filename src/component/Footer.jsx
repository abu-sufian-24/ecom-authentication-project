
import { FaFacebookF, FaTwitter, FaTumblr, FaYoutube, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Section 1: Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Bonik</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
          </p>
          <div className="flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        {/* Section 2: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Our Stores</a></li>
            <li><a href="#" className="hover:underline">Our Cares</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Section 3: Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">How to Buy</a></li>
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
            <li><a href="#" className="hover:underline">Corporate & Bulk Purchasing</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-4">
            70 Washington Square South, New York, NY 10012, United States
          </p>
          <p className="text-sm mb-4">Email: ulib.help@gmail.com</p>
          <p className="text-sm mb-4">Phone: +1 1123 456 780</p>
          <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaTumblr className="cursor-pointer hover:text-blue-300" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaGoogle className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
