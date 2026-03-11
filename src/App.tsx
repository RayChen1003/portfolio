import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AiChat from './components/AiChat'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Esports from './pages/Esports'
import Music from './pages/Music'

export default function App() {
  return (
    <HashRouter>
      <div className="noise-overlay" />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
      <Footer />
      <AiChat />
    </HashRouter>
  )
}
