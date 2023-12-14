import './index.css'
import React from 'react';
import { HeaderNav } from './components/Header/header';
import { SecondHero } from './components/Hero-2/hero-2';
import { FooterSection } from './components/Footer/footer';
import { FeaturedSection } from './components/Featured/featured';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/products/productsPage';
import { ContactSection } from './pages/contact/ContactSection';
//funcion para que scrollee hacia arriba cuando cambiamos de pagina
import ScrollToTop from './components/scrollTop/scrollTop';

function App() {
  return (
    <>
      <HeaderNav/>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SecondHero />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </ScrollToTop>
      <FooterSection/>
    </>
  )
}

export default App