import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import one from "../../assets/competitions/comp1/1.jpeg";
import two from "../../assets/competitions/comp1/2.jpeg";
import three from "../../assets/competitions/comp1/3.jpeg";
import designaward from "../../assets/competitions/comp1/designweekendaward.jpeg";
import performanceaward from "../../assets/competitions/comp1/performanceaward.png";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HyperLoop1 = () => {
    const images = [one, two, three];

    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <div className="">
                        <h3 className="text-4xl text-center py-12"><span className="text-umd-red">HyperLoop</span> Competition 1</h3>
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
                    Competition 1 took place January 27-29, 2017 in Hawthorne, California. Around 40 UMD Loop members traveled out west to support and take part in the first Hyperloop design competition in the world. We won the Performance in Operations Award and placed in the top 5 for overall design.
                </p>
                <p className="mb-4">
                    <a href="https://eng.umd.edu/news/story/umd-team-takes-top-spot-in-performance-amp-operations-at-spacex-hyperloop-competition"
                        className="text-umd-gold hover:underline">
                        UMD Team Takes Top Spot in Performance & Operations at SpaceX Hyperloop Competition</a>
                </p>
                <p className="mb-4">
                    <a href="https://dbknews.com/2017/02/16/umd-hyperloop-space-x-competition/"
                        className="text-umd-gold hover:underline">
                        About 60 University of Maryland students are helping pave the way for high-speed travel</a>
                </p>
                
                <div className="flex justify-center items-center mt-32">
                    <div className="bg-gray-500 h-px w-2/3"></div>
                        <span className="text-3xl mx-4 text-gray-200 font-medium">Awards</span>
                    <div className="bg-gray-500 h-px w-2/3"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center my-16">
                    <div className="w-full sm:w-auto mx-2 my-2">
                        <img className="w-full h-auto" src={designaward} alt={`Award 1`} />
                        <p className="text-center text-umd-gold font-poppins font-light mt-12 mb-12">Design Weekend Award</p>
                    </div>
                    <div className="w-full sm:w-auto mx-2 my-2">
                        <img className="w-full h-auto" src={performanceaward} alt={`Award 2`} />
                        <p className="text-center text-umd-gold font-poppins font-light mt-12 mb-12">Performance in Operations Award</p>
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

export default HyperLoop1;