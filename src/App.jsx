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

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyRouter />} />
        <Route path="/about/:slug" element={<CreatorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;