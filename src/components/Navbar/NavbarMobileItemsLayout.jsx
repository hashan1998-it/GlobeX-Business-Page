import PropTypes from "prop-types"
import { twMerge } from "tailwind-merge";
import { useWindowInnerWidth } from "../../hooks/useWindowInnerWidth";
import {useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";



export const NavbarMobileItemsLayout = ({ children, top, left, gap, px, bgColor, width, py, breakpoint = 768, isHamburgerClicked = true, className, xsWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const innerWidth = useWindowInnerWidth();
  const menuRef = useRef(null);
  const smallMobileWidth = xsWidth || 200;

  useClickOutside(menuRef, () => {
    if (isHamburgerClicked) {
      setIsMenuOpen(true);
    }
    if (isMenuOpen && isHamburgerClicked) {
      setIsMenuOpen(false);
    }
    if(isMenuOpen && !isHamburgerClicked){
      setIsMenuOpen(false);
    }
    else if (!isMenuOpen && !isHamburgerClicked) {
      setIsMenuOpen(true);

    }
  });

  return (
    innerWidth < breakpoint ? (
      <nav
        className={twMerge('flex flex-col absolute top-0 left-0 gap-5 px-5 bg-blue-100 w-full py-5 h-full', top, left, gap, px, bgColor, width, py, isMenuOpen ? 'flex' : "hidden", className, innerWidth <= smallMobileWidth && "items-center")}
        ref={menuRef}>
        {children}
      </nav>
    ) : null
  );
}

NavbarMobileItemsLayout.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  gap: PropTypes.string,
  left: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.string,
  breakpoint: PropTypes.number,
  isHamburgerClicked: PropTypes.bool,
  className: PropTypes.string,
  xsWidth: PropTypes.number,
}
