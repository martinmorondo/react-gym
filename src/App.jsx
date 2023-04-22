import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
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
