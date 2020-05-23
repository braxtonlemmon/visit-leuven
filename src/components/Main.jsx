import React from 'react';
import ProductNav from './ProductNav';
import MainNav from './MainNav';
import Hero from './Hero';
import ReviewSlider from './ReviewSlider';
import DesktopLibrary from './DesktopLibrary'
import EquipmentSelection from './EquipmentSelection';
import Footer from './Footer';

function Main() {
  return (
    <>
      <ProductNav />
      <MainNav />
      <Hero />
      <ReviewSlider />
      <DesktopLibrary />
      <EquipmentSelection />
      <Footer />
    </>
  )
}

export default Main;