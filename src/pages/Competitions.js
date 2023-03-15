import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hyperloop1 from '../assets/competitions/Hyperloop1.jpeg';
import Hyperloop2 from '../assets/competitions/Hyperloop2.jpeg';
import Hyperloop4 from '../assets/competitions/Hyperloop4.jpeg';
import NotABoring1 from '../assets/competitions/NotABoring1.jpeg';

const CompetitionTimeline = ({title, date, content, image, link, orientation, bottommargin}) => {
    const isImageLeft = orientation === 'left';
    const imagePositionClasses = isImageLeft ? 'flex-row' : 'flex-row-reverse';
    const gridClasses = `grid grid-cols-2 gap-4 rounded-lg shadow-lg ${imagePositionClasses}`;
    
    return (
        <div className={`${bottommargin}`}>
            {isImageLeft ?
                <div className={gridClasses}>
                    <div className="relative w-full">
                        <a href={link}><img className="absolute inset-0 h-full w-full object-cover" src={image} alt={title} /></a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-umd-gray2 text-base">{date}</p>
                        <p className="text-umd-gray2 text-base mt-4">{content}</p>
                        <a href={link} className="bg-umd-red hover:brightness-90 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Learn More</a>
                    </div>
                </div>
                :
                <div className={gridClasses}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-umd-gray2 text-base">{date}</p>
                        <p className="text-umd-gray2 text-base mt-4">{content}</p>
                        <a href={link} className="bg-umd-red hover:brightness-90 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Learn More</a>
                    </div>
                    <div className="relative w-full">
                        <a href={link}><img className="absolute inset-0 h-full w-full object-cover" src={image} alt={title} /></a>
                    </div>
                </div>
            }
        </div>
    )
}

const Competitions = () => {
    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <div className="my-12 flex justify-center">
                        <span className="text-2xl sm:text-5xl text-white font-poppins gradient font-light">
                            Competitions
                        </span>
                    </div>
                    <CompetitionTimeline 
                        title="HyperLoop Competition 1" 
                        date="February 2016" 
                        content="The first Hyperloop competition was held in January 2016, where teams from around the world competed to design and build the best pod. The competition was held at SpaceX's headquarters in Hawthorne, California, and was judged based on speed, safety, and design." 
                        image={Hyperloop1} 
                        link="/competitions/hyperloop1"
                        orientation="left"
                        bottommargin={"mb-32"}
                    />
                    <CompetitionTimeline 
                        title="HyperLoop Competition 2" 
                        date="August 2017" 
                        content="The second Hyperloop competition took place in August 2017, and focused on achieving maximum speed. The competition was held at SpaceX's test track in Hawthorne, California, and was judged based on the pod's top speed." 
                        image={Hyperloop2} 
                        link="/competitions/hyperloop2" 
                        orientation="right"
                        bottommargin={"mb-32"}
                    />
                    <CompetitionTimeline 
                        title="HyperLoop Competition 4" 
                        date="December 2019" 
                        content="The fourth Hyperloop competition was held in December 2019, and focused on building a full-scale pod that could carry passengers. The competition was held at the Las Vegas Convention Center in Nevada, and was judged based on speed, safety, and design." 
                        image={Hyperloop4} 
                        link="/competitions/hyperloop4" 
                        orientation="left"
                        bottommargin={"mb-32"}
                    />
                    <CompetitionTimeline 
                        title="Not-A-Boring Competition 1" 
                        date="June 2021" 
                        content="The Not-A-Boring competition was held in June 2021, and focused on building a tunneling machine that could be used to create tunnels for transportation and utilities. The competition was held at the Las Vegas"
                        image={NotABoring1} 
                        link="/competitions/hyperloop4"
                        orientation="right"
                        bottommargin={"mb-32"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Competitions;

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Hyperloop1 from '../assets/competitions/Hyperloop1.jpeg';
// import Hyperloop2 from '../assets/competitions/Hyperloop2.jpeg';
// import Hyperloop4 from '../assets/competitions/Hyperloop4.jpeg';
// import NotABoring1 from '../assets/competitions/NotABoring1.jpeg';

// const Competition = () => {

// }

// const Competitions = () => {
//     return (
//         <div className="container m-auto text-white">
//             <Navbar />
//             <div className="mx-8">
//                 <div className="block m-auto font-poppins">
//                     {/* <h2 className="my-12 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">Competitions</h2> */}
//                     <div className="">
//                         <h3 className="text-2xl text-center py-8"><span className="text-umd-red">HyperLoop</span> Competition 1</h3>
//                         <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop1} alt="Competition 1" /></a>
//                         <div className="flex my-6 py-3 px-5 mx-auto justify-center">
//                             <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop1">HyperLoop 1</a>
//                         </div>
//                     </div>
//                     <div className="">
//                         <h3 className="text-2xl text-center py-8"><span className="text-umd-red">HyperLoop</span> Competition 2</h3>
//                         <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop2} alt="Competition 2" /></a>
//                         <div className="flex my-6 py-3 px-5 mx-auto justify-center">
//                             <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop2">HyperLoop 2</a>
//                         </div>
//                     </div>
//                     <div className="">
//                         <h3 className="text-2xl text-center py-8"><span className="text-umd-red">HyperLoop</span> Competition 4</h3>
//                         <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop4} alt="Competition 4" /></a>
//                         <div className="flex my-6 py-3 px-5 mx-auto justify-center">
//                             <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop4">HyperLoop 4</a>
//                         </div>
//                     </div>
//                     <div className="">
//                         <h3 className="text-2xl text-center py-8"><span className="text-umd-red">Not-A-Boring</span> Competition 1</h3>
//                         <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={NotABoring1} alt="NotABoring 1" /></a>
//                         <div className="flex my-6 py-3 px-5 mx-auto justify-center">
//                             <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/notaboring1">NotABoring 1</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Competitions;