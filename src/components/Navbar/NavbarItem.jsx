import PropTypes from "prop-types"
import { twMerge } from "tailwind-merge"


export const NavbarItem = ({ className, children }) => (
	<a href='#' className={twMerge('text-blue-500 hover:text-blue-700', className)}>{children}</a>
)

NavbarItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}
