"use client"
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav(){

    const [toggleMenu, setToggleMenu] = useState("hidden");

    return(
        <nav className = "fixed flex flex-col self-end p-4 bg-black">
            <IoIosMenu className = {`text-6xl ${toggleMenu === 'hidden' ? "" : "hidden"}`} onClick = {()=>setToggleMenu("block")}/>
            <IoIosClose className = {`text-6xl self-end ${toggleMenu === 'hidden' ? "hidden" : ""}`} onClick = {()=>setToggleMenu("hidden")}/>
            <ul className = {toggleMenu}>
                <li className = "mb-2"><Link className = "text-4xl" href = "#myProject">My Project</Link></li>
                <li><Link className = "text-4xl" href = "#documentation">Documentation</Link></li>
            </ul>
        </nav>
    )
}