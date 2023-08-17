import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faVideo, faArrowLeft, faHouse, faPlay, faBell, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState, useRef, useEffect } from "react";

const NavBarMobile = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false);

  const mobileSearchRef = useRef<HTMLInputElement | null>(null);
  console.log(mobileSearchRef.current);
  const toggleSearch = () => {
    setisSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    if (isSearchOpen && mobileSearchRef.current) {
      mobileSearchRef.current.focus();
    }
  }, [isSearchOpen]);
  return (
    <nav className="bg-neutral-950 flex sm:hidden h-14">
      {!isSearchOpen ? (
        <div className="flex justify-between items-center w-full m-1 px-2">
          <div className="flex w-1/3 justify-start">
            <div className="text-white text-md font-semibold">
              <FontAwesomeIcon icon={faYoutube} size="xl" className="px-1 text-red-600 " />
              NextTube
            </div>
          </div>
          <div className="flex w-1/3 justify-end">
            <Link href="#">
              <FontAwesomeIcon icon={faVideo} className="px-3" size="lg" />
            </Link>
            <button onClick={toggleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="px-3" size="lg" />
            </button>
            <Link href="#">
              <FontAwesomeIcon icon={faFaceSmile} className="px-3" size="lg" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center w-full m-1 justify-evenly">
          <button onClick={toggleSearch}>
            <FontAwesomeIcon icon={faArrowLeft} size="xl" className="mx-3" />
          </button>
          <input type="text" id="mobile-search" ref={mobileSearchRef} placeholder="Search" className="focus:outline-none w-full place-self-center mx-3 bg-transparent text-xl" />
        </div>
      )}
      <aside className="bg-neutral-950 text-neutral-100 text-xs w-screen fixed bottom-0 flex justify-evenly items-center text-center">
        <Link href="/" className="flex flex-col p-3 w-1/4">
          <FontAwesomeIcon icon={faHouse} size="xl" className="pb-1" />
          Home
        </Link>
        <Link href="/" className="flex flex-col p-3 w-1/4">
          <FontAwesomeIcon icon={faPlay} size="xl" className="pb-1" />
          Subscriptions
        </Link>
        <Link href="/" className="flex flex-col p-3 w-1/4">
          <FontAwesomeIcon icon={faBell} size="xl" className="pb-1" />
          Notifications
        </Link>
        <Link href="/" className="flex flex-col p-3 w-1/4">
          <FontAwesomeIcon icon={faCirclePlay} size="xl" className="pb-1" />
          Library
        </Link>
      </aside>
    </nav>
  );
};

export default NavBarMobile;
