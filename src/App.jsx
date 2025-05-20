import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
