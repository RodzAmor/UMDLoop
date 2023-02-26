import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <br class="bg-white"></br>
            <footer className="mx-auto mb-4 text-white flex flex-row justify-around max-w-5xl font-poppins">
                <div className="flex flex-col py-4 px-6">
                    <b className="text-md leading-7">Join Us</b>
                    <a className="link link-hover text-xs brightness-75">Application</a>
                    <a className="link link-hover text-xs brightness-75">Learn more</a>
                    <a className="link link-hover text-xs brightness-75">Marketing</a>
                    <a className="link link-hover text-xs brightness-75">Advertisement</a>
                </div>
                <div flex className="flex flex-col py-4 px-6">
                    <b className="text-md leading-7">Contact Us</b>
                    <a className="link link-hover text-xs brightness-75" href="/about">About us</a>
                    <a className="link link-hover text-xs brightness-75" href="/contact">Contact</a>
                    <a className="link link-hover text-xs brightness-75" href="/contact">Sponsor</a>
                </div>
                <div flex className="flex flex-col py-4 px-6">
                    <b className="text-md leading-7">Social Media</b>
                    <div className="flex item-start space-between">
                        <a className="link link-hover text-xs brightness-75" href="https://twitter.com/UMDLoop"><FaTwitter size="2em" /></a>
                        <a className="link link-hover text-xs brightness-75" href="https://www.instagram.com/umdloop"><FaInstagram size="2em" /></a>
                        <a className="link link-hover text-xs brightness-75" href="https://www.linkedin.com/company/umdloop/"><FaLinkedin size="2em" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;