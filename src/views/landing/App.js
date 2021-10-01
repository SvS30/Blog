import React from 'react';

// import components
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <About />
    </React.Fragment>
  );
}

export default App;
