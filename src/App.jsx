import React from 'react';
import Landing from 'src/components/Landing';
import Navbar from 'src/components/Navbar';
import About from 'src/components/About';
import Work from 'src/components/Work';

function App() {
  return (
    <div>
      <Landing />
      <div className="relative">
        <Navbar />
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
