import React from 'react';

// import components
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <About />
      <Services />
      <Contact />
    </React.Fragment>
  );
}

export default App;
