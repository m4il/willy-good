import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import StarterFactory from './pages/starter-journey-here/start';
// import About from './pages/About';

function App() {
  return (
    <HashRouter className="App" basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StarterFactory />} />
      </Routes>
    </HashRouter>
  )
}


export default App;
