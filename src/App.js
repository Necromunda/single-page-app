import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/contact" element={<Contact />} />
          <Route to="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
