import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import NavBarMobile from "@/components/NavBarMobile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <NavBarMobile />
    </main>
  );
}
