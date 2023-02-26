import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { FaTwitter } from 'react-icons/fa'
import UMDLoopLogo from '../assets/UMDLoopLogo.svg';

const Test = () => {
    return (
        <h1 className="text-white">
            Loading Tweets...
        </h1>
    );
}

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-96 border rounded-3xl">
            <img src={UMDLoopLogo} alt="" className="text-umd-red animate-spin"/>
        </div>
    )
};
  

const News = () => {
    return (
        <div className="container m-auto">
            <Navbar />
            <div className="mx-8">
                {/* <h1 className="text-4xl sm:text-6xl text-white font-poppins gradient font-light pt-12 sm:mt-16 mb-6">
                    Check out our Social Media!
                </h1> */}

                <div className="my-12 text-3xl font-semibold tracking-tight text-white text-center sm:text-4xl font-poppins ">
                    <a className="hover:text-umd-red hover:underline" href="https://twitter.com/UMDLoop" target="_blank">
                        Twitter  <FaTwitter className="inline-block" />
                    </a>
                </div>
                <div id="twitter-embed" className="w-1/2 mx-auto my-8">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="UMDLoop"
                        options={{
                            height: 800,
                            width: 740
                        }}
                        theme="dark"
                        placeholder={<LoadingSpinner />}
                    />
                </div>
            </div>
        </div>
    )
}

export default News;