import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useWindowInnerWidth } from "../../hooks/useWindowInnerWidth";
export const NavbarHamburgerMenu = ({
  className,
  isDark = false,
  breakpoint,
  handleClick,
}) => {
  const innerWidth = useWindowInnerWidth();
  const hiddenBreakpoint = breakpoint || 768;

  return innerWidth <= hiddenBreakpoint ? (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        "inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
        isDark &&
        "dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
        className
      )}
      aria-controls="navbar-hamburger"
      aria-expanded="false"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  ) : null;
};

NavbarHamburgerMenu.propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool,
  breakpoint: PropTypes.number,
  handleClick: PropTypes.func,
};
