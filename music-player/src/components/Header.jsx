import React from "react";
import logo from "../assets/images/logo.PNG";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-sm bg-thirdColor text-firstColor">
      {/* For desktop */}
      <div className="hidden md:flex justify-between px-7 p-2">
        <div className="logo flex">
          <div>
            <img src={logo} alt="Logo" className="w-[86px] h-[40px] object-contain" />
          </div>
          <h2 className="text-2xl font-semibold ml-3 text-firstColor">Music Dictionary</h2>
        </div>

        {/* navlinks */}
      </div>
    </header>
  );
};

export default Header;
