import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-10 text-white flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-24 mb-8">
                <div className="flex flex-col items-center">
                    <b className="text-lg mb-2 text-umd-red">Join Us</b>
                    <a href="#" className="link link-hover hover:underline text-sm mb-1">Application</a>
                    <a href="/competitions" className="link link-hover hover:underline text-sm mb-1">Learn more</a>
                    {/* <a className="link link-hover hover:underline text-sm mb-1">Marketing</a>
                    <a className="link link-hover hover:underline text-sm mb-1">Advertisement</a> */}
                </div>
                <div className="flex flex-col items-center">
                    <b className="text-lg mb-2 text-umd-red">Contact Us</b>
                    <a href="/about" className="link link-hover hover:underline text-sm mb-1">About us</a>
                    <a href="/contact" className="link link-hover hover:underline text-sm mb-1" >Contact</a>
                    <a href="/contact" className="link link-hover hover:underline text-sm mb-1" >Sponsor</a>
                </div>
                <div className="flex flex-col items-center">
                    <b className="text-lg mb-2 text-umd-red">Social Media</b>
                    <div className="flex items-center gap-4">
                        <a className="link link-hover" href="https://twitter.com/UMDLoop"><FaTwitter size="2em" /></a>
                        <a className="link link-hover" href="https://www.instagram.com/umdloop"><FaInstagram size="2em" /></a>
                        <a className="link link-hover" href="https://www.linkedin.com/company/umdloop/"><FaLinkedin size="2em" /></a>
                    </div>
                </div>
            </div>
            <div className="text-sm opacity-50">
                © {new Date().getFullYear()} UMDLoop. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;
