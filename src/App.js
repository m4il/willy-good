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
import MaineBlog from './pages/blog/blogs/maine-blog';
import FirstBikePackingBlog from './pages/blog/blogs/first-bikepacking-blog';
import RedactiveRecruiting from './pages/blog/blogs/redactive-recruiting/redactive-recruiting'

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
          <BlogGateway>
            <AmsterdamBlog />
          </BlogGateway>
        } />
        <Route path="/blog/happiest-place-on-earth" element={
          <BlogGateway password='orlando' >
            <OrlandoBlog />
          </BlogGateway>
        } />
        <Route path="/blog/the-maine-event" element={
          <BlogGateway >
            <MaineBlog />
          </BlogGateway>
        } />
        <Route path="/blog/bikepacking-1" element={
          <BlogGateway >
            <FirstBikePackingBlog />
          </BlogGateway>
        } />
        <Route path="/blog/redactive-recruiting" element={
          <BlogGateway >
            <RedactiveRecruiting />
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
