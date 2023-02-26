import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hyperloop1 from '../assets/competitions/Hyperloop1.jpeg';
import Hyperloop2 from '../assets/competitions/Hyperloop2.jpeg';
import Hyperloop4 from '../assets/competitions/Hyperloop4.jpeg';
import NotABoring1 from '../assets/competitions/NotABoring1.jpeg';

const Competitions = () => {
    return (
        <div className="container m-auto text-white">
            <Navbar />
            <div className="mx-8">
                <div className="block m-auto font-poppins">
                    <h2 className="my-12 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">Competitions</h2>

                    <div className="">
                        <h3 className="text-2xl text-center py-8">HyperLoop Competition 1</h3>
                        <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop1} alt="Competition 1" /></a>
                        <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                            <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop1">HyperLoop 1</a>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-center py-8">HyperLoop Competition 2</h3>
                        <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop2} alt="Competition 2" /></a>
                        <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                            <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop2">HyperLoop 2</a>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-center py-8">HyperLoop Competition 4</h3>
                        <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={Hyperloop4} alt="Competition 4" /></a>
                        <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                            <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/hyperloop4">HyperLoop 4</a>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-center py-8">Not-A-Boring Competition 1</h3>
                        <a href="/competitions/hyperloop1"><img className="mx-auto hover:brightness-90" src={NotABoring1} alt="NotABoring 1" /></a>
                        <div className="flex my-6 py-3 px-5 mx-auto justify-center">
                            <a className="flex my-6 py-4 px-10 mx-auto text-md font-medium text-white bg-umd-red hover:brightness-90" href="/competitions/notaboring1">NotABoring 1</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Competitions;