import React, { useContext } from "react";
import { Tema } from "./Tema";
import { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, darkModeOn, lightMode, changeLanguage, english } = useContext(Tema);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 h-[57px] flex justify-between items-center
      text-white font-bold px-4 py-4 transition-all duration-700 z-10 lg:px-24
    ${isScrolled ? "rounded-b-3xl" : ""} bg-headerColor`}>
      <a href="#home">
        <svg width="122" height="25" viewBox="0 0 122 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.54545 24H0.727273L8.40909 0.727272H17.0455L24.7273 24H17.9091L12.8182 7.13636H12.6364L7.54545 24ZM6.27273 14.8182H19.0909V19.5455H6.27273V14.8182ZM33.3324 0.727272V24H27.0597V0.727272H33.3324ZM36.4375 24V0.727272H42.7102V9.59091H42.8011C43.0284 9 43.3617 8.45833 43.8011 7.96591C44.2405 7.46591 44.786 7.06818 45.4375 6.77273C46.089 6.4697 46.8466 6.31818 47.7102 6.31818C48.8617 6.31818 49.9564 6.625 50.9943 7.23864C52.0398 7.85227 52.8883 8.81818 53.5398 10.1364C54.1989 11.4545 54.5284 13.1667 54.5284 15.2727C54.5284 17.2879 54.214 18.9583 53.5852 20.2841C52.964 21.6098 52.1307 22.5985 51.0852 23.25C50.0473 23.9015 48.9072 24.2273 47.6648 24.2273C46.8466 24.2273 46.1155 24.0947 45.4716 23.8295C44.8352 23.5568 44.2898 23.1894 43.8352 22.7273C43.3883 22.2576 43.0436 21.7273 42.8011 21.1364H42.6648V24H36.4375ZM42.5739 15.2727C42.5739 16.1212 42.6837 16.8561 42.9034 17.4773C43.1307 18.0909 43.4489 18.5682 43.858 18.9091C44.2746 19.2424 44.7708 19.4091 45.3466 19.4091C45.9223 19.4091 46.411 19.2462 46.8125 18.9205C47.2216 18.5871 47.5322 18.1136 47.7443 17.5C47.964 16.8788 48.0739 16.1364 48.0739 15.2727C48.0739 14.4091 47.964 13.6705 47.7443 13.0568C47.5322 12.4356 47.2216 11.9621 46.8125 11.6364C46.411 11.303 45.9223 11.1364 45.3466 11.1364C44.7708 11.1364 44.2746 11.303 43.858 11.6364C43.4489 11.9621 43.1307 12.4356 42.9034 13.0568C42.6837 13.6705 42.5739 14.4091 42.5739 15.2727ZM65.517 24.3182C63.6534 24.3182 62.0473 23.9621 60.6989 23.25C59.358 22.5303 58.3239 21.5 57.5966 20.1591C56.8769 18.8106 56.517 17.197 56.517 15.3182C56.517 13.5152 56.8807 11.9394 57.608 10.5909C58.3352 9.24242 59.3617 8.19318 60.6875 7.44318C62.0133 6.69318 63.5777 6.31818 65.3807 6.31818C66.6989 6.31818 67.892 6.52273 68.9602 6.93182C70.0284 7.34091 70.9413 7.93561 71.6989 8.71591C72.4564 9.48864 73.0398 10.428 73.4489 11.5341C73.858 12.6402 74.0625 13.8864 74.0625 15.2727V16.7273H58.4716V13.2727H68.2898C68.2822 12.7727 68.1534 12.3333 67.9034 11.9545C67.661 11.5682 67.3314 11.2689 66.9148 11.0568C66.5057 10.8371 66.0398 10.7273 65.517 10.7273C65.0095 10.7273 64.5436 10.8371 64.1193 11.0568C63.6951 11.2689 63.3542 11.5644 63.0966 11.9432C62.8466 12.322 62.714 12.7652 62.6989 13.2727V17C62.6989 17.5606 62.8163 18.0606 63.0511 18.5C63.286 18.9394 63.6231 19.2841 64.0625 19.5341C64.5019 19.7841 65.0322 19.9091 65.6534 19.9091C66.0852 19.9091 66.4792 19.8485 66.8352 19.7273C67.1989 19.6061 67.5095 19.4318 67.767 19.2045C68.0246 18.9697 68.214 18.6894 68.3352 18.3636H74.0625C73.8655 19.5758 73.3996 20.6288 72.6648 21.5227C71.9299 22.4091 70.9564 23.0985 69.7443 23.5909C68.5398 24.0758 67.1307 24.3182 65.517 24.3182ZM76.6222 24V6.54545H82.7131V9.86364H82.8949C83.2131 8.63636 83.7169 7.73864 84.4062 7.17045C85.1032 6.60227 85.9176 6.31818 86.8494 6.31818C87.1222 6.31818 87.3911 6.34091 87.6562 6.38636C87.929 6.42424 88.1903 6.48106 88.4403 6.55682V11.9091C88.1297 11.803 87.7472 11.7235 87.2926 11.6705C86.8381 11.6174 86.4479 11.5909 86.1222 11.5909C85.5085 11.5909 84.9555 11.7311 84.4631 12.0114C83.9782 12.2841 83.5956 12.6705 83.3153 13.1705C83.035 13.6629 82.8949 14.2424 82.8949 14.9091V24H76.6222ZM101.625 6.54545V11.0909H90.125V6.54545H101.625ZM92.3523 2.36364H98.625V18.3864C98.625 18.6288 98.6667 18.8333 98.75 19C98.8333 19.1591 98.9621 19.2803 99.1364 19.3636C99.3106 19.4394 99.5341 19.4773 99.8068 19.4773C99.9962 19.4773 100.216 19.4545 100.466 19.4091C100.723 19.3636 100.913 19.3258 101.034 19.2955L101.943 23.7045C101.663 23.7879 101.261 23.8902 100.739 24.0114C100.223 24.1326 99.6098 24.2121 98.8977 24.25C97.4583 24.3258 96.25 24.178 95.2727 23.8068C94.2955 23.428 93.5606 22.8333 93.0682 22.0227C92.5758 21.2121 92.3371 20.197 92.3523 18.9773V2.36364ZM112.406 24.3182C110.512 24.3182 108.891 23.9432 107.543 23.1932C106.194 22.4356 105.16 21.3826 104.44 20.0341C103.721 18.678 103.361 17.1061 103.361 15.3182C103.361 13.5303 103.721 11.9621 104.44 10.6136C105.16 9.25758 106.194 8.20454 107.543 7.45454C108.891 6.69697 110.512 6.31818 112.406 6.31818C114.3 6.31818 115.921 6.69697 117.27 7.45454C118.618 8.20454 119.652 9.25758 120.372 10.6136C121.092 11.9621 121.452 13.5303 121.452 15.3182C121.452 17.1061 121.092 18.678 120.372 20.0341C119.652 21.3826 118.618 22.4356 117.27 23.1932C115.921 23.9432 114.3 24.3182 112.406 24.3182ZM112.452 19.6818C112.982 19.6818 113.44 19.5038 113.827 19.1477C114.213 18.7917 114.512 18.2841 114.724 17.625C114.937 16.9659 115.043 16.1818 115.043 15.2727C115.043 14.3561 114.937 13.572 114.724 12.9205C114.512 12.2614 114.213 11.7538 113.827 11.3977C113.44 11.0417 112.982 10.8636 112.452 10.8636C111.891 10.8636 111.41 11.0417 111.009 11.3977C110.607 11.7538 110.3 12.2614 110.088 12.9205C109.876 13.572 109.77 14.3561 109.77 15.2727C109.77 16.1818 109.876 16.9659 110.088 17.625C110.3 18.2841 110.607 18.7917 111.009 19.1477C111.41 19.5038 111.891 19.6818 112.452 19.6818Z"
            fill="white" />
        </svg>
      </a>
      <nav
        ref={menuRef}
        className={`fixed rounded-b-3xl left-0 w-full
      bg-headerColor transition-all duration-700 z-10
      ${showMenu ? "top-0" : "-top-full"} lg:static lg:rounded-none lg:bg-transparent lg:top-0 lg:flex lg:justify-center lg:items-center lg:-translate-x-8`}
      >
        <FaTimes
          className={`cursor-pointer text-lg absolute top-5 right-4 z-10 lg:hidden`}
          onClick={toggleMenu}
        ></FaTimes>
        <ul className="flex justify-center gap-10 text-lg p-10 lg:gap-20">
          {!english && (
            <>
              <li>
                <a href="#about" onClick={toggleMenu} className="hover-underline-animation">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#project" onClick={toggleMenu} className="hover-underline-animation">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu} className="hover-underline-animation">
                  Contato
                </a>
              </li>
            </>
          )}
          {english && (
            <>
              <li>
                <a href="#about" onClick={toggleMenu} className="hover-underline-animation">
                  About
                </a>
              </li>
              <li>
                <a href="#project" onClick={toggleMenu} className="hover-underline-animation">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu} className="hover-underline-animation">
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="flex justify-center items-center text-lg">
        <FiSun
          onClick={lightMode}
          className={`cursor-pointer transition-opacity duration-500
          ${showMenu ? "opacity-0" : "opacity-100"}`}
        />

        <span
          className={`h-6 w-px bg-white mx-3 transition-opacity duration-500
          ${showMenu ? "opacity-0" : "opacity-100"}`}
        ></span>

        <FiMoon
          onClick={darkModeOn} 
          className={`cursor-pointer transition-opacity duration-500
          ${showMenu ? "opacity-0" : "opacity-100"}`}
        />

        <IoApps
          className={`ml-5 cursor-pointer z-0 transition-opacity duration-500 ${showMenu ? "opacity-0" : "opacity-100"} lg:hidden`}
          onClick={toggleMenu}
        ></IoApps>

        {!english && (
          <button onClick={changeLanguage}
            className="absolute top-16 right-0 p-1 rounded-l-lg text-sm font-normal bg-headerColor lg:static lg:ml-6 lg:p-0 lg:w-9 lg:whitespace-nowrap hover:underline">
            PT-BR
          </button>
        )}
        {english && (
          <button onClick={changeLanguage}
            className="absolute top-16 right-0 p-1 rounded-l-lg text-sm font-normal bg-headerColor lg:static lg:ml-6 lg:p-0 lg:w-9 lg:whitespace-nowrap hover:underline">
            ENG
          </button>
        )}
      </div>
    </header>
  );
}
