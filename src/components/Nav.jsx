import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../App";
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  // eslint-disable-next-line no-unused-vars
  const navRefs = useRef([]);
  // eslint-disable-next-line no-unused-vars
  const { homeVisibility, setHomeVisibility, sectionRefs, isBigWindow } =
    useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();
  const [showMenu, setShowMenu] = useState(false);
  const [isWindowBig, setIsWindowBig] = useState(isBigWindow);

  const location = useLocation(); // Hook to track the current route

  function toggleMenu() {
    if (!isWindowBig) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
      if (showMenu) {
        allowScroll();
      } else {
        blockScroll();
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const windowIsBig = window.innerWidth >= 1200; // Adjust breakpoint as needed
      setIsWindowBig(windowIsBig);

      if (windowIsBig) {
        setShowMenu(false); // Automatically close the menu on resize
        allowScroll(); // Ensure scrolling is allowed
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [allowScroll]);

  // Update `homeVisibility` on location change
  useEffect(() => {
    const isAtHome = location.pathname === "/";
    setHomeVisibility(isAtHome);
  }, [location, setHomeVisibility]);

  const menu_icon = showMenu ? (
    <FaTimes onClick={toggleMenu} className="menu--icon" />
  ) : (
    <FiMenu onClick={toggleMenu} className="menu--icon" />
  );

  const navStyles =
    showMenu || isWindowBig ? { display: "flex" } : { display: "none" };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className={`${navClass}`}>
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#home">
            Bhiwandi Fight <span className="orange--word">Club</span>
          </a>
        </div>
        <ul style={navStyles} className="nav--list slidein">
          <li onClick={toggleMenu}>
            <Link className={`nav--link ${isActive("/")}`} to="/">
              home
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link className={`nav--link ${isActive("/about")}`} to="/about">
              about
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link className={`nav--link ${isActive("/prices")}`} to="/prices">
              prices
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className={`nav--link ${isActive("/schedules")}`}
              to="/schedules"
            >
              schedules
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className={`nav--link ${isActive("/acheivements")}`}
              to="/acheivements"
            >
              acheivements
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link className={`nav--link ${isActive("/contact")}`} to="/contact">
              contact
            </Link>
          </li>
        </ul>

        {!isWindowBig && (
          <div className="nav--rightside-group">{menu_icon}</div>
        )}
      </div>
    </nav>
  );
}
