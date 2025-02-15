import { navBar } from "../../assets/datas/index";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react"; 

const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

  return (
    <header className="fixed top-0 left-0 z-50 w-screen h-[10vh] md:shadow-sm bg-thirdColor text-firstColor">
      <div className="flex justify-between px-7 p-2">
        <div className="logo flex items-center">
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[180px] h-[70px] object-contain pb-2 pt-0 mt-[-6px]"
            />
          </div>
          <h2 className="text-2xl font-semibold ml-2 text-firstColor">
            Music Dictionary
          </h2>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <VscThreeBars size={30} className="text-firstColor" />
          </button>
        </div>

        {/* Navigation Links and Profile */}
        <div
          className={`menus flex items-center space-x-6 sm:space-x-4 sm:ml-2 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`} 
        >
          <div className="flex space-x-6">
            <ul className="flex">
              {navBar.map((list, i) => (
                <li
                  className={`mx-5 py-2 ${activeNavLink} relative group`}
                  key={i}
                >
                  <NavLink
                    to={list.path}
                    className={`${activeNavLink} relative z-10`}
                  >
                    {list.name}
                  </NavLink>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile */}
          <div className="ml-6 flex items-center space-x-4 sm:space-x-2">
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
