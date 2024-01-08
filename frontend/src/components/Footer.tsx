import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 pt-6">
      <div className="w-full flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row  lg:flex-row sm:justify-between gap-4 text-center md:justify-evenly">
        {/* Navigation Section */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Navigation</h3>
          <ul>
            <li>
              <NavLink to="/about" className="hover:text-gray-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-400">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Customer Service</h3>
          <ul>
            <li>Email: support@sales24.com</li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>

        {/* Shopping Information Section */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Shopping Information</h3>
          <ul>
            <li>
              <NavLink
                to="/shopping-information"
                className="hover:text-gray-400"
              >
                How to Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopping-information"
                className="hover:text-gray-400"
              >
                Shipping Information
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="mb-8 md:mb-4 ">
            <p>Follow us on social media </p>
            <div className="flex mt-3 justify-center">
              <NavLink
                to="#"
                className="text-blue-500 mr-4 hover:scale-110 hover:text-blue-600"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </NavLink>
              <NavLink
                to="#"
                className="text-blue-400 mr-4 hover:scale-110 hover:text-blue-500"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </NavLink>
              <NavLink
                to="#"
                className="text-pink-500 hover:scale-110 hover:text-pink-600"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12">
        <p>
          &copy; {new Date().getFullYear()} Sales24. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
