import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles.css';
import Arrow from '../assets/Arrow.svg';
import CMNS from '../assets/companies/CMNS.svg';
import JamesClark from '../assets/companies/JamesClark.svg';
import L3H from '../assets/companies/L3H.svg';
import Boeing from '../assets/companies/Boeing.svg';
import Altium from '../assets/companies/Altium.svg';
import DTI from '../assets/companies/DTI.svg';
import Siemens from '../assets/companies/Siemens.svg';

function Home() {

  return (
    <div className="container m-auto">
      <Navbar />
      <div className="mx-8">
        <h1 className="text-4xl sm:text-6xl text-white font-poppins gradient font-light pt-12 sm:mt-16 mb-6">
          Accelerate the Future
        </h1>
        <h4 className="text-1xl text-white font-poppins font-light">
          Creating innovative and sustainable transportation solutions
        </h4>
        <div className="flex my-16">
          <a href="/about" className="text-white bg-umd-red py-1.5 px-4 sm:py-2 sm:px-6 rounded-3xl mr-1 sm:mr-8 font-normal hover:brightness-90">
            Discover
            <img src={Arrow} alt="" className="inline pl-4 hover:brightness-90"/>
          </a>
          <a href="/contact" className="text-white bg-umd-gray py-1.5 px-4 sm:py-2 sm:px-6 rounded-3xl mx-1 sm:mx-6 font-normal hover:brightness-90">
            Contact Us
          </a>
        </div>
      </div>
        <div className="flex flex-wrap justify-center sm:pt-16">
          <img src={CMNS} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={JamesClark} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Boeing} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Altium} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={L3H} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Siemens} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={DTI} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
        </div>
        <h3 className="text-white text-sm font-poppins font-normal text-center">
          <span className="text-umd-gray2">Sponsored by some of the world’s most innovative companies. </span>
           <a href="/sponsor" className="hover:text-gray-300">
             Meet our Sponsors
             <img src={Arrow} alt="" className="inline pl-1 hover:brightness-90"/>
           </a>
        </h3>

        <div className="w-11/12 sm:w-3/5 my-16 mx-auto pt-20">
          <h3 className="text-white text-2xl font-poppins text-center font-light">
            A team where
          </h3>
          <strong className="block text-4xl text-white font-poppins gradient-2 font-light text-center mt-3 mb-8">
            Imagination Meets Execution
          </strong>
          <p className="text-white text-center text-umd-gray2 font-light mt-4 mb-12">
            Our team of engineers is at the forefront of revolutionizing transportation through the development of cutting-edge hyperloop technology. We are committed to pushing the boundaries of safety, efficiency and sustainability while creating a future of swift and sustainable transportation. We are dedicated to shaping the future of transportation through our relentless pursuit of excellence and innovative solutions.
          </p>
          <a href="/about" className="block text-white text-sm font-poppins font-normal text-center hover:text-gray-300">
            Meet our Team
            <img src={Arrow} alt="" className="inline pl-2 hover:brightness-90"/>
          </a>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
