import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SocialMedia from './pages/SocialMedia';
import Competitions from './pages/Competitions';
import HyperLoop1 from './pages/competitions/HyperLoop1';
import HyperLoop2 from './pages/competitions/HyperLoop2';
import HyperLoop4 from './pages/competitions/HyperLoop4';
import NotABoring1 from './pages/competitions/NotABoring1';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/competitions/hyperloop1" element={<HyperLoop1 />} />
                <Route path="/competitions/hyperloop2" element={<HyperLoop2 />} />
                <Route path="/competitions/hyperloop4" element={<HyperLoop4 />} />
                <Route path="/competitions/notaboring1" element={<NotABoring1 />} />
                <Route path="/socialmedia" element={<SocialMedia />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;