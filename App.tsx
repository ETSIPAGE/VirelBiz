
import React, { useState, useEffect } from 'react';
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
import Announcement from './components/Announcement';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path.startsWith('/admindashboard')) {
      return 'admindashboard';
    }
    // Simple mapping for other pages based on path
    const page = path.substring(1);
    if (['about', 'synergy', 'vision', 'contact', 'register'].includes(page)) {
        return page;
    }
    return 'home';
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
        window.history.pushState({ page }, '', path);
    }
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
      case 'admindashboard':
        return <AdminDashboard />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="bg-[#fbc819] min-h-screen font-sans text-stone-800">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      {currentPage === 'home' && <Announcement onNavigate={navigateTo} />}
      {renderPage()}
    </div>
  );
};

export default App;
