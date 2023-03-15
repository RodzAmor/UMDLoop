import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import one from "../../assets/competitions/comp2/one.jpeg";
import two from "../../assets/competitions/comp2/two.png";
import three from "../../assets/competitions/comp2/three.png";
import four from "../../assets/competitions/comp2/four.png";
import five from "../../assets/competitions/comp2/five.png";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HyperLoop2 = () => {
    const images = [one, two, three, four, five];

    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <div className="">
                        <h3 className="text-4xl text-center py-12"><span className="text-umd-red">HyperLoop</span> Competition 2</h3>
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
                <p className="text-3xl my-12 text-gray-200 font-medium">Competition Pod 2: Nemesis</p>
                <p className="text-center font-light mt-12 mb-12">
                    Competition 2 took place August 25-27, 2017 in Hawthorne, California. Around 40 UMD Loop members traveled out west to support and take part in the second Hyperloop design competition in the world. We were one in six teams chosen to compete an open air run.
                </p>
                <p className="mb-4">
                    <a href="https://www.youtube.com/watch?v=CjTfk0eqoLk"
                        className="text-umd-gold hover:underline">
                        UMD Hyperloop Pod ready for round II at SpaceX</a>
                </p>
                <p className="mb-4">
                    <a href="https://enme.umd.edu/news/story/new-umd-hyperloop-pod-races-against-rivals-this-weekend"
                        className="text-umd-gold hover:underline">
                        New UMD pod races against rivals this weekend </a>
                </p>

                {/* <div className="flex flex-wrap justify-center items-center my-16">
                    <div className="w-full sm:w-auto mx-2 my-2">
                        <img className="w-full h-auto" src={designaward} alt={`Award 1`} />
                    </div>
                    <div className="w-full sm:w-auto mx-2 my-2">
                        <img className="w-full h-auto" src={performanceaward} alt={`Award 2`} />
                    </div>
                </div> */}

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

export default HyperLoop2;