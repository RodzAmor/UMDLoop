import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import one from "../../assets/competitions/comp4/one.jpeg";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HyperLoop4 = () => {
    const images = [one];

    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <div className="">
                        <h3 className="text-4xl text-center py-12"><span className="text-umd-red">HyperLoop</span> Competition 4</h3>
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
                    Competition 4 took place in the Summer of 2019. The team researched, designed, and built a self-propelled pod capable of reaching speeds of 250 MPH in less than 15 seconds. At Hawthorne, the team experienced technical issues that prevented a live-run. However, the team used the experience to learn and plan ahead for Competition 5!        
                </p>

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

export default HyperLoop4;