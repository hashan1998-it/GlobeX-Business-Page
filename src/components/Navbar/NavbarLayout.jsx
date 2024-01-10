import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { useWindowInnerWidth } from '../../hooks/useWindowInnerWidth';

export const NavbarLayout = ({ children, position, width, height, bgColor, maxWidth, px, className,xsWidth }) => {
    const innerWidth = useWindowInnerWidth();
    const smallMobileWidth = xsWidth || 200;
    return <header className={twMerge("relative flex w-full h-auto min-h-16 bg-blue-100 flex-wrap", position, width, height, bgColor, className)}>
        <nav className={twMerge("w-full flex-grow flex justify-between items-center mx-auto px-5 flex-wrap overflow-auto pb-2", maxWidth, px, innerWidth <= smallMobileWidth && "justify-center")}>
            {children}
        </nav>
    </header>;
}

NavbarLayout.propTypes = {
    children: PropTypes.node,
    position: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    maxWidth: PropTypes.string,
    px: PropTypes.string,
    className: PropTypes.string,
    xsWidth: PropTypes.number,

}
