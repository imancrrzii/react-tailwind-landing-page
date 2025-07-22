import { useState } from "react";
import { Link } from "react-router";
import { menuItems } from "../utils/data";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link to={"/"} className="text-xl font-bold">
              <span className="text-blue-600">Muskehounds</span> UI
            </Link>
          </div>
          {/* Dekstop menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {Object.keys(menuItems).map((key) => (
              <div key={menuItems[key].title} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center "
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown */}
                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 p-4">
                      {key === "platform" ? (
                        menuItems[key].sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                              {section.title}
                            </h3>
                            <div>
                              {section.items.map((item, itemIndex) => (
                                <Link key={itemIndex}
                                  to={`/${key}/${item.name
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className={`group flex items-start p-2 rounded-lg hover:bg-gray-50 `}
                                >
                                  <div className="px-4">
                                    <p className="text-sm font-medium text-gray-900 flex items-center">
                                      {item.name} {item.isNew && (<span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">NEW</span>)}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-1">
                          {menuItems[key].items.map((item, index) => (
                            <Link key={index}
                              to={`/${key}/${item.name
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className={`group flex items-start p-2 rounded-lg hover:bg-gray-50 `}
                            >
                              <div className="px-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to={"/enterprise"} className="hover:text-gray-300">
              Enterprise
            </Link>
            <Link to={"/pricing"} className="hover:text-gray-300">
              Pricing
            </Link>
          </div>

          {/* Auth button */}
          <div>
            <Link>Login</Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">mobile menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
