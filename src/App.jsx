import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
return (
<> <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</>
);
}

export default App;
