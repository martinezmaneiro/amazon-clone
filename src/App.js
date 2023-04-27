import React from 'react';
import Header from './components/header/Header';
import HeaderBottom from './components/header/HeaderBottom';
import Banner from './components/home/Banner';

function App() {
  return (
    <div className="font-bodyFont">
      <Header/>
      <HeaderBottom/>
      <Banner/>
    </div>
  );
}

export default App;