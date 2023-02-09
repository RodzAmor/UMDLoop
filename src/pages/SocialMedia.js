import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Suspense } from 'react';

const Test = () => {
    return (
        <h1 className="text-white">
            Loading Tweets...
        </h1>
    );
}

const News = () => {
    return (
        <div className="container m-auto">
            <Navbar />
            <div className="mx-8">
                {/* <h1 className="text-4xl sm:text-6xl text-white font-poppins gradient font-light pt-12 sm:mt-16 mb-6">
                    Check out our Social Media!
                </h1> */}
                <div id="twitter-embed" className="w-1/2 mx-auto">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="UMDLoop"
                        options={{
                            height: 400,
                            width: 640
                        }}
                        theme="dark"
                        placeholder={<Test />}
                    />
                </div>
            </div>
        </div>
    )
}

export default News;