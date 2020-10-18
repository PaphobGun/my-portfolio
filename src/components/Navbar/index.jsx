import React, { useState, useMemo, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import Modal from 'src/components/Modal';

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const onClickNavModal = (targetId) => {
    scroller.scrollTo(targetId, {
      duration: 400,
      smooth: true,
    });
    setIsOpenNav(false);
  };

  useEffect(() => {
    if (isOpenNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenNav]);

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
          <Link
            activeClass="active-nav"
            className="hover:text-pink-500 cursor-pointer"
            to="home"
            spy
            smooth
            duration={400}
          >
            Home
          </Link>
        </div>
        <div className="mr-12">
          <Link
            activeClass="active-nav"
            className="hover:text-pink-500 cursor-pointer"
            to="about"
            spy
            smooth
            duration={400}
          >
            About
          </Link>
        </div>
        <div className="mr-12">
          <Link
            activeClass="active-nav"
            className="hover:text-pink-500 cursor-pointer"
            to="work"
            spy
            smooth
            duration={400}
          >
            Work
          </Link>
        </div>
        <div>
          <Link
            activeClass="active-nav"
            className="hover:text-pink-500 cursor-pointer"
            to="contact"
            spy
            smooth
            duration={400}
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`sticky top-0 h-16 flex flex-col items-end justify-center md:hidden ${
          isOpenNav
            ? 'bg-transparent w-16 ml-auto'
            : 'border-b-2 border-pink-500 bg-gray-900'
        } z-50`}
      >
        {menuIcon}
      </div>
      <Modal isOpen={isOpenNav}>
        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 text-white font-xl z-40">
          <div className="px-16 py-16 my-auto text-center text-white text-3xl">
            <div className="mt-16 mb-4" onClick={() => onClickNavModal('home')}>
              Home
            </div>
            <div className="mb-4 " onClick={() => onClickNavModal('about')}>
              About
            </div>
            <div className="mb-4 " onClick={() => onClickNavModal('work')}>
              Work
            </div>
            <div onClick={() => onClickNavModal('contact')}>Contact</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
