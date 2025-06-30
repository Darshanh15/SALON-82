import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Hair from './pages/Hair';
import Skin from './pages/Skin';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/main.scss';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/services/hair" element={<Hair />} />
        <Route path="/services/skin" element={<Skin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


// import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Topbar from './components/Topbar/Topbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';
// import { Navbar as BootstrapNavbar } from 'react-bootstrap'; 
// import { main } from './../node_modules/@popperjs/core/lib/enums';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Topbar />
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/gallery" element={<Gallery />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Topbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// export default App;

