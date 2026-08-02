import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyRouter from './pages/CaseStudyRouter';
import CreatorProfile from './pages/CreatorProfile';
import Projects from './pages/Projects'; // ← ADD THIS

function HomePage({ scrollLocked, onUnlock }) {
  return (
    <>
      <div className={scrollLocked ? 'h-screen overflow-hidden' : ''}>
        <Navbar scrollLocked={scrollLocked} />
        <Hero onUnlock={onUnlock} />
      </div>
      
      {!scrollLocked && (
        <>
          <Portfolio />
          <Services />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const hasUnlocked = localStorage.getItem('aurora-unlocked');
    if (hasUnlocked === 'true') {
      setScrollLocked(false);
    }
  }, []);

  const handleUnlock = () => {
    setScrollLocked(false);
    localStorage.setItem('aurora-unlocked', 'true');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage scrollLocked={scrollLocked} onUnlock={handleUnlock} />} />
        <Route path="/projects" element={
          <>
            <Navbar />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/case-study/:slug" element={<CaseStudyRouter />} />
        <Route path="/about/:slug" element={<CreatorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;