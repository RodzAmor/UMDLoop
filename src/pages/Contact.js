import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="container m-auto">
            <Navbar />
            <div className="border-white m-8">
                <section className="font-poppins">
                    <div className="py-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Want to learn more about our team? Just send us an email and we'd be happy to respond.</p>
                        
                        <form action="#" className="space-y-8 mb-10">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-100">Email <span style={{color: "#e32"}}>*</span></label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium text-gray-100">Subject <span style={{color: "#e32"}}>*</span></label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Reach out to the team" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-100">Body <span style={{color: "#e32"}}>*</span></label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Body"></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-umd-red hover:brightness-90">Send Message</button>
                        </form>
                        <div className="mb-12 max-w-screen-lf mx-auto">
                            <h2 id="sponsor" className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-100">Sponsor Us</h2>
                            <p className="text-white mb-8">UMD Loop sponsors are typically corporations who provide donations either through monetary means, or through in-kind product donations. Sponsors receive a variety of benefits, which are detailed in the table below. You can become a UMD sponsor by contacting us through the form above. From there we will direct you to the appropriate points on contact within the university. UMD Loop also has donors, who are individuals with a desire to support the future of transportation. Donors are encouraged to donate through our College Park Foundation account, which can be reached by clicking the button below. We greatly appreciate the support our sponsors and donors have provided us. Without them, the Hyperloop would not be coming alive here at the University of Maryland.</p>
                            <p className="text-white mb-8">For more information on our team and how you can make an impact as a sponsor, take a look at the various sponsorship documents below. You can also email <a href="mailto:umdloop@gmail.com" className="text-umd-red hover:brightness-90">umdloop@gmail.com</a> with any questions or inquiries.</p>
                            <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                                <a className="flex my-6 py-3 px-5 mx-auto text-sm font-medium text-white bg-umd-red hover:brightness-90" href="https://giving.umd.edu/giving/fund.php?name=hyperloop-design-competition">Donate Today!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;