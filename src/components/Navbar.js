import UMDLoopLogo from '../assets/UMDLoopLogo.svg';
const Navbar = () => {
    return (
        <nav className="text-white flex justify-between items-center">
            <div>
                <a href="/"><img src={UMDLoopLogo} alt="UMD LOOP" /></a>
            </div>
            <div>
                <a href="/sponsor" className="m-6 inline-block font-normal hover:text-umd-red hover:underline">Sponsor</a>
                <a href="/about" className="m-6 inline-block font-normal hover:text-umd-red hover:underline">About Us</a>
                <a href="/news" className="m-6 inline-block font-normal hover:text-umd-red hover:underline">News</a>
                <a href="/contact" className="m-6 inline-block font-normal hover:text-umd-red hover:underline">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;