const Footer = () => {
    return (
        <footer className="mx-auto text-white flex flex-row justify-around max-w-2xl font-poppins">
            <div className="flex flex-col py-4 px-6">
                <b className="text-md leading-7">Join Us</b>
                <a className="link link-hover text-xs brightness-75">Application</a>
                <a className="link link-hover text-xs brightness-75">Learn more </a>
                <a className="link link-hover text-xs brightness-75">Marketing</a>
                <a className="link link-hover text-xs brightness-75">Advertisement</a>
            </div>
            <div flex className="flex flex-col py-4 px-6">
                <b className="text-md leading-7">Contact Us</b>
                <a className="link link-hover text-xs brightness-75">About us</a>
                <a className="link link-hover text-xs brightness-75">Contact</a>
                <a className="link link-hover text-xs brightness-75">Sponsor</a>
            </div>
            <div flex className="flex flex-col py-4 px-6">
                <b className="text-md leading-7">Social Media</b>
                <a className="link link-hover text-xs brightness-75">Twitter</a>
                <a className="link link-hover text-xs brightness-75">Instagram</a>
                <a className="link link-hover text-xs brightness-75">Facebook</a>
            </div>
        </footer>
    )
}

export default Footer;