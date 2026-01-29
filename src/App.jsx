import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sambutan from './components/Sambutan';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Sambutan />
    </div>
  );
}

export default App;