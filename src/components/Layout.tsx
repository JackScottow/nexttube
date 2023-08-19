import { useState } from "react";
import Navbar from "./NavBar";
import NavbarMobile from "./NavBarMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" max-w-screen bg-neutral-900">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <NavbarMobile />
      {isMenuOpen ? <main className="max-w-screen p-6 sm:pl-60 sm:pr-4 sm:pt-20  ">{children}</main> : <main className="sm:pl-28 sm:pt-20 sm:pr-4 p-6 pb-20">{children}</main>}
    </div>
  );
}
