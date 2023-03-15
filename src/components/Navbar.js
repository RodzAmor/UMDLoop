import UMDLoopLogo from '../assets/UMDLoopLogo.svg';
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className={menu ? "text-white flex justify-between items-center mx-8 flex-col" : "text-white flex justify-between items-center mx-8"}>
            <div>
                <a href="/"><img src={UMDLoopLogo} alt="UMD LOOP" /></a>
            </div>
            <div className="font-poppins">
                <a href="/" className="mx-2 my-6 hidden sm:inline-block font-normal hover:text-umd-red hover:underline">Home</a>
                <a href="/about" className="mx-2 my-6 hidden sm:inline-block font-normal hover:text-umd-red hover:underline">About Us</a>
                <a href="/competitions" className="mx-2 my-6 hidden sm:inline-block font-normal hover:text-umd-red hover:underline">Competitions</a>
                <a href="/socialmedia" className="mx-2 my-6 hidden sm:inline-block font-normal hover:text-umd-red hover:underline">Socials</a>
                <a href="/contact" className="mx-2 my-6 hidden sm:inline-block font-normal hover:text-umd-red hover:underline">Contact</a>
                <FaBars onClick={handleMenu} className="inline-block sm:hidden mx-2 my-6 font-normal hover:text-umd-red hover:cursor-pointer" />
            </div>
            <div className={menu ? "w-screen" : "hidden"}>
                <a href="/about" className="mx-2 my-6 block font-normal text-center hover:text-umd-red hover:underline">About Us</a>
                <a href="/socialmedia " className="mx-2 my-6 block font-normal text-center hover:text-umd-red hover:underline">Socials</a>
                <a href="/contact" className="mx-2 my-6 block font-normal text-center hover:text-umd-red hover:underline">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;