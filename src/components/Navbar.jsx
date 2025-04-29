import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <Link
              to={`/`}
              className="text-4xl"
            >
              Hassan Studio.
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? 'X' : '☰'}
            </button>
          </div>

          <div className="hidden lg:block">
            <ul className="menu menu-horizontal text-xl space-x-4">
              <li >
                <Link to={`/`}>
                Home
                </Link>
              </li>
              <li>
            <Link to={`search`} >
              Search
            </Link>
          </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 p-4 text-center">
          <li>
            <Link to={`/`} >
              Home
            </Link>
          </li>
          <li>
            <Link to={`search`} >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
