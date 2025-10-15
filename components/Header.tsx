import React, { useState } from 'react';
import { StoreIcon, DocumentTextIcon, UserIcon, ChevronDownIcon, SearchIcon } from './icons/Icons';

const searchCategories = [
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'Professionals', href: '#services' } // Links to services section
];

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const NavLink: React.FC<{ page: string; currentPage: string; onNavigate: (page: string) => void; children: React.ReactNode }> = ({ page, currentPage, onNavigate, children }) => {
    const isActive = currentPage === page;
    return (
        <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate(page); }}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-amber-700 font-bold' : 'text-stone-700 hover:text-amber-600'}`}
        >
            {children}
        </a>
    );
};

const ActionLink: React.FC<{ icon: React.ReactNode; line1: string; line2: string; onClick: () => void;}> = ({ icon, line1, line2, onClick }) => (
    <a href="#" onClick={(e) => {e.preventDefault(); onClick();}} className="flex items-center text-stone-700 hover:text-amber-700 transition-colors">
        {icon}
        <div className="text-sm">
            <span>{line1}</span>
            <span className="font-bold block leading-4">{line2}</span>
        </div>
    </a>
)


const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState(searchCategories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-yellow-50/90 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className="text-3xl font-bold tracking-tighter text-stone-800">Virel<span className="text-amber-600 font-extrabold">Biz</span></h1>
          </div>

          <div className="flex-grow max-w-xl mx-8">
            <div className="flex items-stretch border-2 border-amber-500 rounded-full overflow-hidden bg-yellow-100">
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                  className="flex items-center pl-4 pr-3 h-full bg-yellow-50"
                >
                  <span className="text-stone-800 font-medium">{selectedCategory.name}</span>
                  <ChevronDownIcon className="h-4 w-4 ml-1.5 text-stone-600" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-yellow-50 border border-yellow-200 rounded-md shadow-lg z-20">
                    {searchCategories.map(category => (
                      <a 
                        key={category.name}
                        href={category.href}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                          if(currentPage !== 'home') onNavigate('home');
                        }}
                        className="block px-4 py-2 text-sm text-stone-800 hover:bg-amber-100"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <input type="text" placeholder="I'm looking for..." className="w-full px-4 py-2 focus:outline-none bg-yellow-100 placeholder-stone-500 border-l border-r border-amber-300" />
              <button className="bg-amber-600 text-white px-6 py-2 font-semibold hover:bg-amber-700 transition-colors flex items-center">
                <SearchIcon className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ActionLink icon={<StoreIcon className="h-7 w-7 mr-2"/>} line1="Become a" line2="Supplier" onClick={() => { /* Handle click */ }} />
            <ActionLink icon={<DocumentTextIcon className="h-7 w-7 mr-2"/>} line1="Request for" line2="Quotations" onClick={() => { /* Handle click */ }} />
            <ActionLink icon={<UserIcon className="h-7 w-7 mr-2"/>} line1="Sign in /" line2="Register" onClick={() => onNavigate('register')} />
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation Bar */}
      <nav className="bg-yellow-100 border-t border-yellow-200">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start text-sm font-medium py-2">
            <div className="flex items-center space-x-6">
                <NavLink page="home" currentPage={currentPage} onNavigate={onNavigate}>Home</NavLink>
                <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>About VirelBiz</NavLink>
                <NavLink page="synergy" currentPage={currentPage} onNavigate={onNavigate}>Synergy with DroneTV</NavLink>
                <NavLink page="vision" currentPage={currentPage} onNavigate={onNavigate}>Our Vision</NavLink>
                <NavLink page="contact" currentPage={currentPage} onNavigate={onNavigate}>Contact Us</NavLink>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;