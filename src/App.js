import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import StarterFactory from './pages/starter-journey-here/start';
import Music from './pages/music/music';
import Baking from './pages/baking/baking';
import Bikes from './pages/bikes/bikes';
import Photography from './pages/photog/photography';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import AmsterdamGateway from './pages/blog/blogs/amsterdam/amsterdam-gateway';
import PhotogDark from './pages/photog/photog-dark';

function App() {
  return (
    <HashRouter className="App" basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starter" element={<StarterFactory />} />
        <Route path="/music" element={<Music />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/baking" element={<Baking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/bikes-bridges-battery-mis-management" element={<AmsterdamGateway />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/dark" element={<PhotogDark />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}


export default App;
