import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/services" element={ <Services /> } />
      <Route exact path="/testimonials" element={<Testimonials /> } />
      <Route exact path="/contact" element={<Contact /> } />
      </Routes>
  </div>
  )
}

export default App
