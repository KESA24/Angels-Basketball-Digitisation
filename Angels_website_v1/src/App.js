/* eslint-disable */
import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Games } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Games />
    <Header />
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
