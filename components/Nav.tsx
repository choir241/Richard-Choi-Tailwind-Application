"use client"
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav(){

    const [toggleMenu, setToggleMenu] = useState("hidden");

    return(
        <nav className = "fixed hidden flex-col self-end bg-black w-full max-[800px]:flex">
            <IoIosMenu className = {`text-6xl self-end ${toggleMenu === 'hidden' ? "" : "hidden"}`} onClick = {()=>setToggleMenu("flex")}/>
            <IoIosClose className = {`text-6xl self-end ${toggleMenu === 'hidden' ? "hidden" : ""}`} onClick = {()=>setToggleMenu("hidden")}/>
            <ul className = {`${toggleMenu} items-center flex-col pb-4 px-4`}>
                <li className = "mb-2"><Link className = "text-4xl" href = "#myProject">My Project</Link></li>
                <li><Link className = "text-4xl" href = "#documentation">Documentation</Link></li>
            </ul>
        </nav>
    )
}