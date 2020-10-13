import React, { useState, useMemo } from 'react';

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const menuIcon = useMemo(() => {
    return (
      <div
        className="transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pr-8 h-2 relative transition-transform ease-in-out"
        onClick={() => setIsOpenNav((isOpen) => !isOpen)}
      >
        <span
          className={`${
            isOpenNav ? 'top-1 w-0 left-1/2' : 'top-0 w-8 left-0'
          } block absolute h-1 bg-pink-500 transform rotate-0 duration-300`}
        ></span>
        <span
          className={`${
            isOpenNav ? 'rotate-45' : 'rotate-0'
          } block absolute h-1 w-8 bg-pink-500 top-1 left-0 transform duration-300`}
        ></span>
        <span
          className={`${
            isOpenNav ? '-rotate-45' : 'rotate-0'
          } block absolute h-1 w-8 opacity-100 bg-pink-500 top-1 left-0 transform duration-300`}
        ></span>
        <span
          className={`${
            isOpenNav ? 'top-1 w-0 left-1/2' : 'top-2 left-0 w-8'
          } block absolute h-1 bg-pink-500 transform rotate-0 duration-300`}
        ></span>
      </div>
    );
  }, [isOpenNav]);

  return (
    <>
      <div className="sticky top-0 items-center hidden md:flex justify-end lg:pr-20 w-screen text-gray-400  h-16 bg-gray-900 border-b-4 border-pink-500">
        <div className="mr-12">
          <a href="#home" className="hover:text-pink-500">
            HOME
          </a>
        </div>
        <div className="mr-12">
          <a href="#about" className="hover:text-pink-500">
            ABOUT
          </a>
        </div>
        <div className="mr-12">
          <a href="#work" className="hover:text-pink-500">
            WORK
          </a>
        </div>
        <div>
          <a href="#contact" className="hover:text-pink-500">
            CONTACT
          </a>
        </div>
      </div>

      <div className="sticky top-0 h-16 flex flex-col items-end justify-center md:hidden bg-gray-900 border-b-2 border-pink-500">
        {menuIcon}
      </div>
    </>
  );
};

export default Navbar;
