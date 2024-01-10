import PropTypes from "prop-types"
import { twMerge } from "tailwind-merge"


export const NavbarLogoText = ({className}) => (
	<h1 className={twMerge('text-xl font-bold',className)}>BrandName</h1>
)

NavbarLogoText.propTypes = {
  className: PropTypes.string
}
