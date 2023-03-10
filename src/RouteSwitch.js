import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SocialMedia from './pages/SocialMedia';
import Competitions from './pages/Competitions';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/competitions/:id" element={<Competitions />} />
                <Route path="/socialmedia" element={<SocialMedia />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;