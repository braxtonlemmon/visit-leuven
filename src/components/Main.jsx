import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ReviewSlider from './ReviewSlider';
import DesktopLibrary from './DesktopLibrary'
import EquipmentSelection from './EquipmentSelection';
import Footer from './Footer';
import { Responsive, Segment } from 'semantic-ui-react';

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <ReviewSlider />
      <DesktopLibrary />
      <EquipmentSelection />
      <Footer />
    </>
  )
}

export default Main;