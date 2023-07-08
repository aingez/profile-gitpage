import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Cirt from './pages/Cert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/profile-gitpage" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/cert" element={<Cirt />} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
