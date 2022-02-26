import React from 'react';
import './App.css';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';

const App = () => {
  return (
    <>
      <Title />
      <Gretting />
      <Gallery />
      <CongratulatoryMoney />
      <Share />
    </>
  );
};

export default App;
