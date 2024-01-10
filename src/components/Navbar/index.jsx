import { NavbarMobileItemsLayout } from './NavbarMobileItemsLayout'
import { NavbarHamburgerMenu } from './NavbarHamburgerMenu'
import { NavbarItemsLayout } from "./NavbarItemsLayout";
import { NavbarItem } from "./NavbarItem";
import { NavbarLogoText } from "./NavbarLogoText";
import { NavbarLayout } from "./NavbarLayout";
import { useState } from 'react';

function Navbar() {
  //Config
  //const breakpoint = 768; 
  // Only on NavbarItemsLayout,NavbarMobileItemsLayout,NavbarHamburgerMenu

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerClicked(prev=>!prev);
  }
  return (
    <NavbarLayout bgColor={"bg-transparent"}>
      <NavbarLogoText />
      <NavbarItemsLayout>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarItemsLayout>
      <NavbarHamburgerMenu handleClick={handleHamburgerClick}/>
      <NavbarMobileItemsLayout top={"top-16"} isHamburgerClicked={isHamburgerClicked} bgColor={"bg-transparent"}>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarMobileItemsLayout>
    </NavbarLayout>
  );
}

export default Navbar;
