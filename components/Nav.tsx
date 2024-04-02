"use client";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState("hidden");

  return (
    <nav className="fixed hidden flex-col self-end bg-black w-full max-[1000px]:flex">
      <IoIosMenu
        className={`text-6xl self-end hover:cursor-pointer hover:scale-75 hover:ease-in hover:duration-300 ${toggleMenu === "hidden" ? "" : "hidden"}`}
        onClick={() => setToggleMenu("flex")}
      />
      <IoIosClose
        className={`text-6xl self-end hover:cursor-pointer hover:rotate-90 hover:ease-in hover:duration-300 ${toggleMenu === "hidden" ? "hidden" : ""}`}
        onClick={() => setToggleMenu("hidden")}
      />
      <ul className={`${toggleMenu} items-center flex-col pb-4 px-4`}>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="#myProject">
            My Project
          </Link>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="#documentation">
            Documentation
          </Link>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="#openSource">
            Open Source
          </Link>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="#experience">
            Experience
          </Link>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="#aboutMe">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
