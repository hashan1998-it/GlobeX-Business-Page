import PropTypes from "prop-types"
import { twMerge } from "tailwind-merge";
import { useWindowInnerWidth } from "../../hooks/useWindowInnerWidth";



export const NavbarMobileItemsLayout = ({ children, top, left, gap, px, bgColor, width, py, breakpoint = 768, isShown = true ,className,xsWidth}) => {
  const innerWidth = useWindowInnerWidth();
  const smallMobileWidth = xsWidth || 200;
  return (
    innerWidth < breakpoint ? (
      <nav className={twMerge('flex-col absolute top-0 left-0 gap-5 px-5 bg-blue-100 w-full py-5', top, left, gap, px, bgColor, width, py, isShown ? 'flex' : 'hidden',className,innerWidth<= smallMobileWidth && "items-center")}>
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
  isShown: PropTypes.bool,
  className: PropTypes.string,
  xsWidth: PropTypes.number,
}
