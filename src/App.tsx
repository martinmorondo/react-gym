import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import NotFound from './components/not-found/NotFound';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Exercises from './pages/Exercises';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;