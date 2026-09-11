
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

      {/* WhatsApp Floating Chat Button — hidden from live for now
      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .wa-float {
          animation: wa-pulse 2s infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-float:hover {
          transform: scale(1.12);
        }
        .wa-tooltip {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }
        .wa-wrapper:hover .wa-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      <div className="wa-wrapper" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '10px' }}>
        Tooltip
        <div
          className="wa-tooltip"
          style={{
            background: '#fff',
            color: '#1a1a1a',
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            border: '1px solid #e5e7eb',
          }}
        >
          Chat with us on WhatsApp
        </div>

        Button
        <a
          href="https://wa.me/919490151050?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Chat with us on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          WhatsApp SVG Icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="none">
            <path
              d="M24 4C12.954 4 4 12.954 4 24c0 3.592.95 6.964 2.61 9.88L4 44l10.38-2.574A19.9 19.9 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"
              fill="#fff"
              fillOpacity="0.15"
            />
            <path
              d="M24 4C12.954 4 4 12.954 4 24c0 3.592.95 6.964 2.61 9.88L4 44l10.38-2.574A19.9 19.9 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"
              fill="#fff"
            />
            <path
              d="M24 6.4C14.277 6.4 6.4 14.277 6.4 24c0 3.343.908 6.477 2.494 9.16L6.8 41.2l8.22-2.062A17.544 17.544 0 0 0 24 41.6c9.723 0 17.6-7.877 17.6-17.6S33.723 6.4 24 6.4z"
              fill="#25D366"
            />
            <path
              d="M32.72 27.68c-.4-.2-2.36-1.16-2.72-1.3-.36-.12-.62-.2-.88.2-.26.4-1.02 1.3-1.24 1.56-.22.26-.46.28-.86.1-.4-.2-1.7-.62-3.24-2-.6-.54-1-1.14-1.12-1.54-.12-.4.04-.6.22-.8.18-.18.4-.46.6-.68.2-.22.26-.38.38-.64.12-.26.06-.48-.02-.68-.1-.2-.88-2.12-1.2-2.9-.32-.76-.64-.66-.88-.68-.22-.02-.48-.02-.74-.02-.26 0-.68.1-1.04.48-.36.38-1.36 1.32-1.36 3.22s1.4 3.74 1.6 4 2.72 4.16 6.6 5.84c.92.4 1.64.64 2.2.82.92.28 1.76.24 2.42.14.74-.1 2.28-.92 2.6-1.82.32-.9.32-1.68.22-1.84-.1-.16-.36-.26-.76-.46z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      */}
    </div>
  );
};

export default App;
