import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import '../styles.css';
import Arrow from '../assets/Arrow.svg';
import Hero from '../assets/Hero.png';

function Home() {

  return (
    <>
      <div className="absolute -z-10 w-full" >
        <img src={Hero} 
          alt="" 
            className={`brightness-[.33] max-h-fit object-cover w-full mx-auto ${
              window.innerWidth < 640 ? 'hidden' : ''
            }`}
            style={{ 
              minHeight: '500px',
              maxHeight: '500px' 
            }}
          />
      </div>
      <div className="md:container m-auto">
        <Navbar />
        {/* <div className="mx-8 pt-12 sm:mt-16" style={{backgroundImage: `url(${Hero})`}}> */}
        <div className="mx-8 pt-8 sm:mt-12">
          <h1 className="text-4xl sm:text-6xl text-white font-poppins gradient font-light mb-6">
            Accelerate the Future
          </h1>
          <h4 className="text-1xl text-white font-poppins font-light">
            Creating innovative and sustainable transportation solutions
          </h4>
          <div className="flex mt-12 mb-24">
            <a href="/about" className="text-white bg-umd-red py-1.5 px-4 sm:py-2 sm:px-6 rounded-3xl mr-1 sm:mr-8 font-normal hover:brightness-90">
              Discover
              <img src={Arrow} alt="" className="inline pl-4 hover:brightness-90"/>
            </a>
            <a href="/contact" className="text-white bg-umd-gray py-1.5 px-4 sm:py-2 sm:px-6 rounded-3xl mx-1 sm:mx-6 font-normal hover:brightness-90">
              Contact Us
            </a>
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center sm:pt-24">
          <img src={CMNS} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={JamesClark} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Boeing} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Altium} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={L3H} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={Siemens} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
          <img src={DTI} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
        </div> */}
        <Sponsors />
        <h3 className="text-white text-sm font-poppins font-normal text-center">
          <span className="text-umd-gray2">Sponsored by some of the world’s most innovative companies. </span>
          <a href="/contact" className="hover:text-gray-300">
            Meet our Sponsors
            <img src={Arrow} alt="" className="inline pl-1 hover:brightness-90"/>
          </a>
        </h3>

        <div className="w-11/12 sm:w-3/5 my-16 mx-auto pt-20">
          {/* <h3 className="text-white text-2xl font-poppins text-center font-light">
            A team where
          </h3> */}
          <strong className="block text-4xl text-white font-poppins gradient-2 font-light text-center mt-3 mb-8">
            Imagination Meets Execution
          </strong>
          <p className="text-center text-umd-gray2 font-light mt-4 mb-12">
            Our team of engineers is at the forefront of revolutionizing transportation through the development of cutting-edge hyperloop technology. We are committed to pushing the boundaries of safety, efficiency and sustainability while creating a future of swift and sustainable transportation. We are dedicated to shaping the future of transportation through our relentless pursuit of excellence and innovative solutions.
          </p>
          <a href="/about" className="block text-white text-sm font-poppins font-normal text-center hover:text-gray-300">
            Meet our Team
            <img src={Arrow} alt="" className="inline pl-2 hover:brightness-90"/>
          </a>
        </div>

        <div className="w-11/12 sm:w-3/5 my-16 mx-auto pt-10">
          <strong className="block text-4xl text-white font-poppins gradient-2 font-light text-center mt-3 mb-8">
            Sponsor Us
          </strong>
          <p className="text-center text-umd-gray2 font-light mt-4 mb-12">
            UMD Loop sponsors are typically corporations who provide donations either through monetary means, or through in-kind product donations. Sponsors receive a variety of benefits, which are detailed in the table below. You can become a UMD sponsor by contacting us through the form above. From there we will direct you to the appropriate points on contact within the university. UMD Loop also has donors, who are individuals with a desire to support the future of transportation. Donors are encouraged to donate through our College Park Foundation account, which can be reached by clicking the button below. We greatly appreciate the support our sponsors and donors have provided us. Without them, the Hyperloop would not be coming alive here at the University of Maryland.
          </p>
          <a href="/contact" className="block text-white text-sm font-poppins font-normal text-center hover:text-gray-300">
            Sponsor
            <img src={Arrow} alt="" className="inline pl-2 hover:brightness-90"/>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
