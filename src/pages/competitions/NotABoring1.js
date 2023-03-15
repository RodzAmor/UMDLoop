import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import one from "../../assets/competitions/notaboring1/one.jpeg";
import two from "../../assets/competitions/notaboring1/two.jpeg";
import three from "../../assets/competitions/notaboring1/three.jpeg";
import award from "../../assets/competitions/notaboring1/award.jpeg";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NotABoring1 = () => {
    const images = [one, two, three];

    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <div className="">
                        <h3 className="text-4xl text-center py-12"><span className="text-umd-red">Not-A-Boring</span> Competition 1</h3>
                        {/* <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop1} alt="Competition 1" /></a>
                        <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                            <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop1">HyperLoop 1</a>
                        </div> */}
                        <p></p>
                    </div>
                </div>
                <Carousel showArrows={true} showIndicators={false} showStatus={false} infiniteLoop={true}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Competition 1 Image ${index+1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="px-12">
                <p className="text-center font-light mt-12 mb-12">
                UMD Loop was one of the 12 finalists (the Digging Dozen) invited to The Boring Company’s first Not-a-Boring Competition. At competition, the team worked tirelessly through the week as we integrated our avionics and mechanical systems, continued testing, and assembled the final parts of the machine. However, a sandstorm and thunderstorm on Friday afternoon cut short our work day and set back our timeline significantly since we had to evacuate the site. We were eventually also able to get approval from engineers from The Boring Company to run the tunnel boring machine on competition day. However, due to safety concerns that our operations subteam had while attempting to run the machine, we decided Monday afternoon that it would be in the best interest of the team’s safety to not proceed further. Although we were not able to run the tunnel boring machine in the end, we were able to test our hydraulic systems, most of our software, and spin the auger mechanism used to extract dirt from the inside of the TBM. During the awards ceremony for the competition, UMD Loop received an award for safety from The Boring Company.
                </p>
                <p className="mb-4">
                    <a href="https://dbknews.com/2021/03/07/umd-loop-engineering-competition-tunnel-boring-machine/"
                        className="text-umd-gold hover:underline">
                        A team of UMD students are building a machine to compete in a tunnel boring competition </a>
                </p>

                <div className="flex flex-wrap justify-center items-center my-16">
                    <div className="w-full sm:w-auto mx-2 my-2">
                        <img className="w-full h-auto" src={award} alt={`Award 1`} />
                        <p className="text-center text-umd-gold font-poppins font-light mt-12 mb-12">Team Safety Award</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-32">
                    <div className="bg-gray-500 h-px w-2/3"></div>
                    <span className="text-3xl mx-4 text-gray-200 font-medium">Sponsors</span>
                    <div className="bg-gray-500 h-px w-2/3"></div>
                </div>
            </div>

            <Sponsors />
            <Footer />
        </div>
    )
}

export default NotABoring1;