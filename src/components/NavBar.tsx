import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faVideo, faHouse, faBolt, faPlay, faCirclePlay, faClockRotateLeft, faSquareCaretRight, faThumbsUp, faFireFlameCurved, faMusic, faClapperboard, faTowerBroadcast, faGamepad, faNewspaper, faTrophy, faLightbulb, faShirt, faGear, faCircleQuestion, faCircleExclamation, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFaceSmile, faClock } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const subscriptions = ["Traversy Media", "Academind", "The Net Ninja", "Dev Ed", "Web Dev Simplified"];

  return (
    <nav className="bg-neutral-950 p-3">
      <div className="flex justify-between items-center w-full h-10">
        {/* Menu Toggle & Logo */}
        <div className="flex w-1/2 sm:w-1/3 justify-start">
          <button onClick={toggleMenu} className=" text-neutral-100 mr-4">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="text-white text-xl font-semibold">
            <FontAwesomeIcon icon={faYoutube} size="xl" className="px-1 text-red-600 " />
            NextTube
          </div>
        </div>
        {/* Search Bar */}
        <div className="hidden sm:flex sm:w-1/3 justify-center items-center rounded-full bg-neutral-800 py-3 px-5">
          <input type="text" placeholder="Search" className=" focus:outline-none w-full text-neutral-100 text-xl placeholder-neutral-400 bg-neutral-800" />
          <button className="ml-4 text-neutral-100">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
        <div className="flex w-1/2 sm:w-1/3 justify-end">
          <Link href="#">
            <FontAwesomeIcon icon={faVideo} className="px-3" size="lg" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faBell} className="px-3" size="lg" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faFaceSmile} className="px-3" size="lg" />
          </Link>
        </div>
      </div>
      {isMenuOpen ? (
        <aside className="bg-neutral-950 text-neutral-100 p-4 pb-16 mt-16 w-auto h-screen fixed top-0 left-0 overflow-y-scroll">
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faHouse} className="w-10 place-self-center" size="lg" />
            Home
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faBolt} className="w-10 place-self-center" size="lg" />
            Shorts
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faPlay} className="w-10 place-self-center" size="lg" />
            Subscriptions
          </Link>
          <hr className="border-neutral-500 my-2" />
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faCirclePlay} className="w-10 place-self-center" size="lg" />
            Library
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 place-self-center" size="lg" />
            History
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faSquareCaretRight} className="w-10 place-self-center" size="lg" />
            Your Videos
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faClock} className="w-10 place-self-center" size="lg" />
            Watch Later
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faThumbsUp} className="w-10 place-self-center" size="lg" />
            Liked Videos
          </Link>
          <hr className="border-neutral-500 my-2" />
          <h3 className="text-neutral-100 text-lg px-5">Subscriptions</h3>
          {subscriptions.map((subscription) => (
            <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex " key={subscription}>
              <FontAwesomeIcon icon={faFaceSmile} className="w-10 place-self-center" size="lg" />
              {subscription}
            </Link>
          ))}
          <hr className="border-neutral-500 my-2" />
          <h3 className="text-neutral-100 text-lg px-5">Explore</h3>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faFireFlameCurved} className="w-10 place-self-center" size="lg" />
            Trending
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faMusic} className="w-10 place-self-center" size="lg" />
            Music
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faClapperboard} className="w-10 place-self-center" size="lg" />
            Movies & TV
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faTowerBroadcast} className="w-10 place-self-center" size="lg" />
            Live
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faGamepad} className="w-10 place-self-center" size="lg" />
            Gaming
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faNewspaper} className="w-10 place-self-center" size="lg" />
            News
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faTrophy} className="w-10 place-self-center" size="lg" />
            Sport
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faLightbulb} className="w-10 place-self-center" size="lg" />
            Learning
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faShirt} className="w-10 place-self-center" size="lg" />
            Fashion
          </Link>
          <hr className="border-neutral-500 my-2" />
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faGear} className="w-10 place-self-center" size="lg" />
            Settings
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faCircleQuestion} className="w-10 place-self-center" size="lg" />
            Help
          </Link>
          <Link href="/" className=" py-2 my-1 hover:bg-neutral-800 transition duration-200 rounded-lg flex">
            <FontAwesomeIcon icon={faCircleExclamation} className="w-10 place-self-center" size="lg" />
            Send Feedback
          </Link>
          <hr className="border-neutral-500 my-2" />
          <Link href="www.jackscottow.com" className="text-neutral-400 text-sm flex justify-evenly p-1 hover:text-neutral-100">
            Made By Jack Scottow 2023
          </Link>
        </aside>
      ) : (
        <aside className="bg-neutral-950 justify-items-center text-white w-24 text-center py-4 px-1 mt-16 h-screen fixed top-0 left-0 mx-auto overflow-y-auto">
          <Link href="/" className="py-2 my-1 mb-2 h-20 justify-center hover:bg-neutral-800 transition duration-200 rounded-lg flex flex-col">
            <FontAwesomeIcon icon={faHouse} size="xl" className="pb-1" />
            <p className="text-xs">Home</p>
          </Link>
          <Link href="/" className="py-2 my-1 mb-2 h-20 justify-center hover:bg-neutral-800 transition duration-200 rounded-lg flex flex-col">
            <FontAwesomeIcon icon={faBolt} size="xl" className="pb-1" />
            <p className="text-xs">Shorts</p>
          </Link>
          <Link href="/" className="py-2 my-1 mb-2 h-20 justify-center hover:bg-neutral-800 transition duration-200 rounded-lg flex flex-col">
            <FontAwesomeIcon icon={faPlay} size="xl" className="pb-1" />
            <p className="text-xs">Subscriptions</p>
          </Link>
          <Link href="/" className="py-2 my-1 mb-2 h-20 justify-center hover:bg-neutral-800 transition duration-200 rounded-lg flex flex-col">
            <FontAwesomeIcon icon={faCirclePlay} size="xl" className="pb-1" />
            <p className="text-xs">Library</p>
          </Link>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
