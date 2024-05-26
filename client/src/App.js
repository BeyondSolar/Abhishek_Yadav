import React from 'react';
import Hero from './components/Hero.jsx';
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <div className="h-screen">
      <div className='fixed flex flex-col justify-center items-center min-w-72 h-full bg-theme p-10'>
        <Sidebar />
      </div>
      <div className='flex flex-col ml-72 h-full bg-white'>
        <Hero />
      </div>
    </div>
  );
}

export default App;

