import PropTypes from "prop-types"
import { twMerge } from "tailwind-merge"
import { useWindowInnerWidth } from "../../hooks/useWindowInnerWidth";

export const NavbarItemsLayout = ({ children, className,breakpoint}) => {
    const innerWidth = useWindowInnerWidth();
    const hiddenBreakpoint = breakpoint || 768;
    
    return (
        innerWidth > hiddenBreakpoint ? (
            <div className={twMerge('flex gap-4 items-center', className)}>
                {children}
            </div>
        ) : null
    )
}

NavbarItemsLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    breakpoint: PropTypes.number
}
