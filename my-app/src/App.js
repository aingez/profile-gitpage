import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Certi from './Pages/Certi';
import Exp from './Pages/Exp';
import Me from './Pages/whoami';
import Resume from './Pages/Resume';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile-gitpage" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cert" element={<Certi />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/me" element={<Me />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
