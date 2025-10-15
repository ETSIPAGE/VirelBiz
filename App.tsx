import React, { useState } from 'react';
import Header from './components/Header';
import FloatingToolbar from './components/FloatingToolbar';
import ImageSlideshow from './components/ImageSlideshow';
import Banner from './components/Banner';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage';
import AboutPage from './components/AboutPage';
import SynergyPage from './components/SynergyPage';
import VisionPage from './components/VisionPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <main className="max-w-screen-xl mx-auto px-4 py-8 space-y-8">
              <section aria-label="Featured content">
                <ImageSlideshow />
              </section>
              <section aria-label="Upcoming Shows">
                <Banner />
              </section>
              <section aria-label="Product Highlights">
                <Hero />
              </section>
              <section aria-label="Product Showcase">
                <ProductShowcase />
              </section>
            </main>
            <Footer onNavigate={navigateTo} />
            <FloatingToolbar />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'synergy':
        return <SynergyPage />;
      case 'vision':
        return <VisionPage />;
      case 'contact':
        return <ContactPage />;
      case 'register':
        return <RegistrationPage onNavigate={navigateTo} />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="bg-yellow-400 min-h-screen font-sans text-stone-800">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
