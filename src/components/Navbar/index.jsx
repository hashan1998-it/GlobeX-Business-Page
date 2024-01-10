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

  const [isClicked, setIsClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsClicked(!isClicked);
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
      <NavbarMobileItemsLayout top={"top-16"} isShown={isClicked} bgColor={"bg-transparent"}>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarMobileItemsLayout>
    </NavbarLayout>
  );
}

export default Navbar;
