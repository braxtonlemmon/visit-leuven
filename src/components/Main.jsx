import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import ReviewSlider from './ReviewSlider';
import DesktopLibrary from './DesktopLibrary'
import EquipmentSelection from './EquipmentSelection';
import Footer from './Footer';
import { Responsive, Segment } from 'semantic-ui-react';

function Main() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleScroll = () => {
    console.log('inside scroll handle');
    const hero = document.getElementById('hero').getBoundingClientRect();
    const header = document.getElementById('header').getBoundingClientRect();
    console.log(header.bottom);
    console.log(hero.bottom);
    if (hero.bottom < 127) {
      setIsHeroVisible(false);
    } else if (hero.bottom > 127 ) {
      setIsHeroVisible(true);
    }
  }

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded])


  return (
    <>
      <Header isHeroVisible={isHeroVisible}/>
      <Hero />
      <ReviewSlider />
      <DesktopLibrary />
      <EquipmentSelection />
      <Footer />
    </>
  )
}

export default Main;