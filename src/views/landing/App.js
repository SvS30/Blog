import React from 'react';

// import components
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Services from './components/services/Services';

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default App;
