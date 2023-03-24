import logo from "../../assets/logo.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";

import { useState } from "react";

function Nav() {

  const [menuVerify, setMenuVerify] = useState(null);

  const menu = () => {
    setMenuVerify(!menuVerify);
  }

  return (
    <div className="flex bg-image-header h-screen bg-cover bg-bottom bg-no-repeat flex-col text-white items-center">
      <nav className="flex w-screen justify-between items-center mt-6">

        <div className="ml-7">
          <img src={logo} alt="logo-primary" />
        </div>

        <div className="mr-7 ">
          <ul className="flex gap-6 items-center font-Barlow max-sm:invisible max-sm:absolute max-sm:left-0 max-sm:w-0">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <button className="text-black bg-white p-2 px-4 rounded-3xl font-Fraunces font-semibold hover:bg-sky-300 text-sm duration-200 hover:text-white">CONTACT</button>
          </ul>

          <button className="invisible absolute max-sm:visible max-sm:relative" onClick={menu}><img src={iconHamburger} alt="iconNav" /></button>
        </div>
      </nav>

      {/* menu */}

      <div className={menuVerify ? "nav__menu__hamburger opacity-100" : "nav__menu__hamburger opacity-0"}>

        <div className="clip-path bg-white w-10 h-10 absolute right-0 -top-8"></div>
        <ul className="flex flex-col gap-3">
          <li className="mt-5"><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <button className="text-black bg-yellow-400 p-2 px-4 rounded-3xl font-Fraunces font-semibold hover:bg-sky-300 text-sm duration-200 hover:text-white mb-5 mt-2">CONTACT</button>
        </ul>
      </div>




      <div className="mt-10 flex flex-col items-center max-sm:mt-14">
        <h1 className="font-Fraunces font-bold text-4xl max-sm:text-3xl duration-200 ">WE ARE CREATIVE</h1>
        <img src={arrowDown} alt="arrow-down" className="w-7 mt-36" />
      </div>
    </div>
  )
}

export default Nav
