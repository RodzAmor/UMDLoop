import CMNS from '../assets/companies/CMNS.svg';
import JamesClark from '../assets/companies/JamesClark.svg';
import L3H from '../assets/companies/L3H.svg';
import Boeing from '../assets/companies/Boeing.svg';
import Altium from '../assets/companies/Altium.svg';
import DTI from '../assets/companies/DTI.svg';
import Siemens from '../assets/companies/Siemens.svg';


const Sponsors = () => {
    return (
        <div className="flex flex-wrap justify-center sm:pt-12">
            <img src={CMNS} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={JamesClark} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={Boeing} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={Altium} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={L3H} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={Siemens} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
            <img src={DTI} alt="" className='mx-4 lg:mx-12 xl:mx-20 my-4 sm:my-8' />
        </div>
    )
}

export default Sponsors;