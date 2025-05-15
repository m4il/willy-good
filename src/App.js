import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import StarterFactory from './pages/starter-journey-here/start';
import Projects from './pages/projects/projects';
import Baking from './pages/baking/baking';
import Bikes from './pages/projects/bikes';
import Photography from './pages/photog/photography';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import BlogGateway from './pages/blog/blog-gateway';
import PhotogDark from './pages/photog/photog-dark';
import AmsterdamBlog from './pages/blog/blogs/amsterdam-blog';
import OrlandoBlog from './pages/blog/blogs/orlando-blog';

function App() {
  return (
    <HashRouter className="App" basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starter" element={<StarterFactory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/baking" element={<Baking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/bikes-bridges-battery-mis-management" element={
          <BlogGateway password='tulip'>
            <AmsterdamBlog />
          </BlogGateway>
        } />
        <Route path="/blog/happiest-place-on-earth" element={
          <BlogGateway password='orlando' >
            <OrlandoBlog />
          </BlogGateway>
        } />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/dark" element={<PhotogDark />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}


export default App;
